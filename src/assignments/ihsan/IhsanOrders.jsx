import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import 'dayjs/locale/tr'; 
import advancedFormat from 'dayjs-ext/plugin/advancedFormat'; 
import { Button, TextField } from '@mui/material';

dayjs.extend(advancedFormat);

function IhsanOrders() {
    const [orders, setOrders] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handlePost = async () => {
      try {
        const response = await axios.post('https://northwind.vercel.app/api/categories', {
          name,
          description,
        });
        console.log('Post response:', response.data);
      } catch (error) {
        console.error('Error posting new category:', error);
      }
    };

  const handleDelete = (id) => {
    console.log('Delete order with ID:', id);
    setOrders(orders.filter(order => order.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'customerId', headerName: 'Customer ID', width: 150 },
    {
      field: 'orderDate',
      headerName: 'Order Date',
      width: 250,
      valueGetter: (params) => formatDate(params.row.orderDate),
    },
    {
      field: 'shippedDate',
      headerName: 'Shipped Date',
      width: 250,
      valueGetter: (params) => formatDate(params.row.shippedDate),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(params.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const formatDate = (dateString) => {
    return dateString ? dayjs(dateString).locale('tr').format('DD MMMM YYYY dddd') : '';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://northwind.vercel.app/api/orders');
        const ordersData = response.data.map(order => ({
          ...order,
          orderDate: order.orderDate, 
          shippedDate: order.shippedDate || '', 
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: 20 }}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handlePost} style={{ marginLeft: 10 }}>
          Add Category
        </Button>
      </div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={orders}
          columns={columns}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default IhsanOrders;