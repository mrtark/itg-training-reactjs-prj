import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from '@mui/material'


function Odev3() {

    const [orders, setorders] = useState([])

    useEffect(() => {
        loadOrders();
    },[])

    const loadOrders = () => {
        axios.get("https://northwind.vercel.app/api/orders")
        .then(res => {
            setorders(res.data)
        })
    }

    const columns = [
        {
            field: "id",
            headerName: "Numara",
            width: 100
        },
        {
            field: "customerId",
            headerName: "Müsteri Numarası",
            width: 200
        },
        {
            field: "orderDate",
            headerName: "Sipariş Tarihi",
            width: 200
        },
        {
            field: "shippedDate",
            headerName: "Sevkiyat Tarihi",
            width: 200
        },
        {
            field: "delete",
            headerName: "Sil",
            width: 200,
            renderCell: (params) => {
                return <Button onClick={() => deleteOrder(params.row.id)} variant='contained' color='error'>Delete</Button>
            }
        },
    ]

    const deleteOrder = (id) => {
        axios.delete(`https://northwind.vercel.app/api/orders/${id}`)
        .then(res => {
            loadOrders();
         })

    }

  return (<>
  <div>
    <DataGrid
        rows={orders}
        columns={columns} 
    />
  </div>

  </>
    
  )
}

export default Odev3