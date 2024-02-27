import axios from 'axios';
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { DataGrid, trTR } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';



function OrderPage() {

const [orders, setOrders] = useState([]);

useEffect(() => {
    loadOrders();
}, [])

const loadOrders = () => {
    axios.get("https://northwind.vercel.app/api/orders")
    .then(res => {
        setOrders(res.data)
    })
}

const theme = createTheme(
    trTR,
  );

  const columns = [{
    field: "id",
    headerName:"Order ID",
    width:200
  },
  {
    field: "customerId",
    headerName: "Customer ID",
    width: 200
},
{
    field: "orderDate",
    headerName: "Order Date",
    width: 400,
    renderCell: (params) => {
        return dayjs(params.value).format('DD MMMM YYYY dddd')
    }
},
{
    field: "shippedDate",
    headerName: "Shipped Date",
    width: 400,
    renderCell: (params) => {
        return dayjs(params.value).format('DD MMMM YYYY dddd')
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
    axios.delete(`https://northwind.vercel.app/api/orders/${id}`)
    .then(res => {
        loadOrders();
    })
}



  return (
    <div style={{ height: 600 }}>
        <ThemeProvider theme={theme}>
            <DataGrid
                rows={orders}
                columns={columns} />
        </ThemeProvider>
        </div>
  )
}

export default OrderPage