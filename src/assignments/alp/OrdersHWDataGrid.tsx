import { Button, ThemeProvider, createTheme } from '@mui/material';
import { DataGrid, trTR } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../axiosSample/axiosInstance'; //Alp: '../api/axiosInstance';
import Moment from 'moment';
import 'moment/locale/tr';
//PK: .jsx converted to as .tsx // Type annotations can only be used in TypeScript files.ts(8010)


function OrdersHWDataGrid () {
    const [orders, setorders] = useState([]);

    const deleteOrder = (id: any) => {
        axiosInstance.delete(`orders/${ id }`)
            .then(() => fillOrders())
            .catch(err => {
                console.log(err);
            });
    };

    const fillOrders = () => {
        axiosInstance.get("orders")
            .then(res => setorders(res.data))
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        fillOrders();
    }, []);

    return (<>
        <div style={ { height: 400 } }>
            <ThemeProvider theme={ createTheme(
                trTR,
            ) }>
                <DataGrid rows={ orders } columns={ [
                    {
                        field: "id",
                        headerName: "Ürün Id",
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
                            return Moment(params.row?.orderDate).format("DD MMMM yyyy dddd");
                        }
                    },
                    {
                        field: "shippedDate",
                        headerName: "Sevkiyat Tarihi",
                        width: 300,
                        renderCell: (params) => {
                            return Moment(params.row?.shippedDate).format("DD MMMM yyyy dddd");
                        }

                    },
                    {
                        field: "delete",
                        headerName: "Sil",
                        width: 200,
                        renderCell: (params) => {
                            return <Button onClick={ () => deleteOrder(params.row.id) } variant='contained' color='error'>Sil</Button>;
                        }
                    }
                ] }></DataGrid>
            </ThemeProvider>;
        </div>
    </>
    );
}

export default OrdersHWDataGrid;