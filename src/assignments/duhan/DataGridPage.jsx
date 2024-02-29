import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
//PK: declared but never read //Duhan: import { trTR } from '@mui/material/locale';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import React, { useEffect, useState } from 'react';

function DataGridPage() {

    const localizedTextsMap = {
        columnMenuUnsort: "Sıralama Kaldır",
        columnMenuSortAsc: "Artan Sırala",
        columnMenuSortDesc: "Azalan Sırala",
        columnMenuFilter: "Filtrele",
        columnMenuHideColumn: "Sütunu Gizle",
        columnMenuShowColumns: "Sütunları Göster"
      };

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadDataGrid();
    }, []);

    const loadDataGrid = () => {
        axios.get("https://northwind.vercel.app/api/orders")
            .then(res => {
                setOrders(res.data)
            })
            .catch(err => {
                alert("Beklenmedik Bir Hata Oluştu")
            })
    }

    const columns = [
        {
            field: "id",
            headerName: "Sipariş ID",
            width: 200
        },
        {
            field: "customerId",
            headerName: "Müşteri Id",
            width: 300
        },
        {
            field: "orderDate",
            headerName: "Sipariş Tarihi",
            width: 300,
            renderCell: (params) => {
                return dayjs(params.value).locale('tr').format('DD MMM YYYY dddd')
            }
        },
        {
            field: "shippedDate",
            headerName: "Sevk Tarihi",
            width: 300,
            renderCell: (params) => {
                return dayjs(params.value).locale('tr').format('DD MMM YYYY dddd')
            }
        },
        {
            field: "Delete",
            headerName: "Sil",
            width: 200,
            renderCell: (params) => {
                return <Button onClick={() => deleteOrder(params.row.id)} variant='contained' color='error'>Sil</Button>
            }
        }
    ];

    const deleteOrder = (id) => {
        axios.delete(`https://northwind.vercel.app/api/orders/${id}`)
            .then(res => {
                loadDataGrid();
            });
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={orders}
                columns={columns}
                localeText={localizedTextsMap}
            />
        </div>
    );
}

export default DataGridPage;
