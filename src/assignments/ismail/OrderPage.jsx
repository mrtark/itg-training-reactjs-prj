import React, { useContext, useEffect, useState } from 'react'
//PK:'FavoritesContext' is declared but its value is never read //Ismail: import { FavoritesContext } from '../context/FavoritesContext'
import { axiosInstance } from '../../axiosSample/axiosInstance'; //ISmail: '../api/axiosInstance'
//PK:'FavoritesContext' is declared but its value is never read //Ismail: import moment from 'moment';
import 'moment/locale/tr';
import { Button } from '@mui/material';
import { DataGrid , trTR} from '@mui/x-data-grid'

function OrderPage() {
  
    const moment = require('moment');
    const [orders, setorders] = useState([])

    useEffect(() => {
        loadOrders();
    }, [])

    const loadOrders = () => {
        axiosInstance.get("/orders")
        .then(res => {
            setorders(res.data)
        })
    }

    const columns = [
        {
            field: "id",
            headerName: "Order ID",
            width: 200
        },
        {
            field: "customerId",
            headerName: "Customer ID",
            width: 300
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            width: 300,
            renderCell: (params) => {
                const formattedDate = moment(params.value).locale('tr').format('DD MMMM YYYY dddd');
                return formattedDate;
            }
        },
        {
            field: "shippedDate",
            headerName: "Shipped Date",
            width: 300,
            renderCell: (params) => {
                const formattedDate = moment(params.value).locale('tr').format('DD MMMM YYYY dddd');
                return formattedDate;
            }
        },
        {
            field: "Delete",
            headerName: "Delete",
            width: 200,
            renderCell: (params) => {
                return <Button onClick={() => deleteOrder(params.row.id)} variant='contained' color='error'>Delete</Button>
            }
        }
    ]


    const deleteOrder = (id) => {
        axiosInstance.delete("/orders/" + id)
            .then(res => {
                loadOrders();
            })

    }

    return (<>
        <div style={{ height: 400 }}>
            <DataGrid
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
                rows={orders}
                columns={columns} />
        </div>

    </>)
}

export default OrderPage
