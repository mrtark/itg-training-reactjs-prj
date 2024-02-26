import { Button } from '@mui/material'
import { DataGrid , trTR} from '@mui/x-data-grid'
//PK declared but never used //Muhsin: import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../axiosSample/axiosInstance' // Muhsin: '../axiosSample/axiosInstance'
//PK declared but never used //Muhsin: import { Grid } from '@mui/material';
import './loadingCss.css'; //Muhsin: '../cssFile/loadingCss.css';

function OrderDataGrid() {

    const [orders,setOrders] = useState([]) ; 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await axiosInstance.get("orders");
          setOrders(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
      fetchOrders();
    }, []);
    
    const deleteOrder = (id) => {
      try {
      axiosInstance.delete(`orders/${id}`).then(() => {
        const updatedOrder = orders.filter(row => row.id !== id);
        setOrders(updatedOrder); 
        alert(`${id} id 'li  veri silindi.`);
      });
  }
    catch (error) {
      alert.error('Silme işleminde bir hata oluştu. Hata Nedeni :', error);
    }
   };

    const formatDate = (dateString) => {
      if (!dateString || isNaN(new Date(dateString))) return "-";
    
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
      const date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', options);
    };
    
    const columns = [
      { field: 'id', headerName: 'ID', width: 350 },
      { 
        field: 'customerId', 
        headerName: 'Customer ID', 
        width: 350,
        renderCell: (params) => (
          <span>{params.value && params.value.toLowerCase() === 'null' ? "-" : params.value}</span>
        ),
      },
      { 
        field: 'orderDate', 
        headerName: 'Order Date', 
        width: 350,
        renderCell: (params) => (
          <span>{formatDate(params.value)}</span>
        ),
      },
      { 
        field: 'shippedDate', 
        headerName: 'Shipped Date', 
        width: 350, 
        renderCell: (params) => (
          <span>{formatDate(params.value)}</span>
        ),
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 120,
        renderCell: (params) => (
          <Button variant="contained" color="secondary" onClick={() => deleteOrder(params.row.id)}>
            Delete
          </Button>
        ),
      },
    ];
    
      
      
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-text">Loading...</div>
        </div>
      );
    }



      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={orders}
            columns={columns}
            autoHeight
            localeText={trTR.components.MuiDataGrid.defaultProps.localeText} 
          />
        </div>
      );
      
      
      
      
}



export default OrderDataGrid
