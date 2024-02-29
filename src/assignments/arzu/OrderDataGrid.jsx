import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosSample/axiosInstance'; //Arzu: '../api/axiosInstance'
import { DataGrid , trTR} from '@mui/x-data-grid'
//PK: is declared but its value is never read //Arzu: import dayjs from 'dayjs'
import { Button } from '@mui/material'




function OrderDataGrid() {

    const [orders,setOrders] = useState([]) ; 

    
    const { data, isLoading, refetch } = useQuery('orders', () => {
        return axiosInstance.get('/orders')
            .then(response => response.data)
    }
    )
    useEffect(() => {
        refetch(); 
    }, []);
    const formatTurkishDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        return date.toLocaleDateString('tr-TR', options);
    };

    const deleteOrderById = async (id) => {
        try {
            await axiosInstance.delete(`/orders/${id}`);
            console.log("Order deleted successfully.");
            const updatedOrders = orders.filter(order => order.id !== id);
            setOrders(updatedOrders);
            refetch();
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100
        },
        {
            field: "customerId",
            headerName: "Customer ID",
            width: 150
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            width: 250, // 22 Mayıs 2000 10:00 -> Format
            renderCell: (params) => {
                return formatTurkishDate(new Date(params.value));
            }
        },
        {
            field: "shippedDate",
            headerName: "Shipped Date",
            width: 250,
            renderCell: (params) => {
                return formatTurkishDate(new Date(params.value));
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: (params) => (
              <Button variant="contained" color="secondary" onClick={() => deleteOrderById(params.row.id)}>
                Delete
              </Button>
            ),
          },
    ]

    return (<>
        <h1>Orders</h1>
        <hr />
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={data || []}
            columns={columns}
            localeText={trTR.components.MuiDataGrid.defaultProps.localeText} 
        />
        </div>
        
    </>
    )
}

export default OrderDataGrid

