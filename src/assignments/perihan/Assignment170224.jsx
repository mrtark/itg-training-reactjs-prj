import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../axiosSample/axiosInstance'
import { DataGrid , trTR } from '@mui/x-data-grid';//
//import trTR from '@mui/x-data-grid/locale/trTR'; // Import Turkish locale

import { Button, Grid } from '@mui/material'
import dayjs from 'dayjs';
//require('dayjs/locale/tr')
//dayjs().locale('tr').format() // use loaded locale locally
//27.02.24
 /************ASSIGNMENT-2**************/
/* Aşağıda belirtilen url den datalar çekilip ( id, customerId, orderDate ve shippedDate kolonları ) datagrid içerisinde gösterilecek
  * Tarih kolonlarında format "02 Mayıs 2023 Perşembe" olmalıdır
  * En sağ kolonda bir silme butonu olup, silme işlemi gerçekleşmelidir.
  * Datagrid Türkçe olmalıdır
  URL: https://northwind.vercel.app/api/orders
  Ekranda name ve description adında iki input ve bir button olmalı. Butona tıkladığınızda aşağıda belirtilen url e data POST edilmelidir.
  URL: https://northwind.vercel.app/api/categories */
function Assignment170224() {

    const [orders, setorders]= useState([]);
    const [categories, setcategories]= useState([]);

    const[name,setname]=useState("");
    const[description,setdescription] = useState("");
 
    useEffect(() => {
        loadOrders();
        loadCategories();
    }, [])

    const loadOrders = () => {
        axiosInstance.get("orders") // axios.get("https://northwind.vercel.app/api/orders")  
        .then( res => {
            setorders(res.data);
        }).catch(err => {
            alert(err);
        })
    }
    const loadCategories = () => {
        axiosInstance.get("categories")   
        .then( res => {
            setcategories(res.data);
        }).catch(err => {
            alert(err);
        })
    }
    //field da yazan data olmalı yoksa renderCell icinde de manipule edilebilir
    const ocolumns = [
        // id, customerId, orderDate ve shippedDate
        {field:"id",headerName:"Order ID",width:80},
        {field:"customerId",headerName:"Customer Id",width:80},
        {field:"orderDate",headerName:"Order Date",width:190,
        renderCell:(params)=>{return dayjs(params.row.orderDate).format("DD MMMM YYYY dddd")}},
        {field:"shippedDate",headerName:"Shipped Date",width:190,
        renderCell:(params)=>{return dayjs(params.row.shippedDate).format("DD MMMM YYYY dddd")}},
        // renderCell:(params)=>{return new Date(params.row.shippedDate).format("DD MMMM YYYY dddd").toLocaleString()}},
        {field:"Delete",headerName:"Delete",width:100, 
        renderCell:(params)=>{return <Button onClick={() => deleteOrder(params.row.id)}>Delete</Button>}}
    ]
    const ccolumns = [
        // id, customerId, orderDate ve shippedDate
        {field:"id",headerName:"Category ID",width:100},
        {field:"name",headerName:"Name",width:170},
        {field:"description",headerName:"Description",width:300}
    ]
    const deleteOrder = (id) => {
        console.error('id:', id); 
        axiosInstance.delete(`orders/${id}`) 
        .then(res => {
            loadOrders();
        })
    }
     //Yukarıdaki şekilde sayfaya konan her input için state tanımlamak fazla sayıda input içeren formları çok olan uygulamalarda uygun değil
    //Formik,react-hook-form, Kendoo-form vs. gibi kütüphaneler kullanılarak input başına useState manuel koyma gereği kalkıyor
    //Bu tip fonk. cagiran butonlara çoklu tıklamayı engelle
    const addCategory=()=>{
        let newCategory ={
            name:name,
            description: description
        }
        axiosInstance.post("categories",newCategory)
            .then(res => {
                alert("Success");
                loadCategories();
            })
            .catch(err=> {
                alert(err);//console.log('Error',err);
            });
    }
    return (<>
    <Grid container>
        <Grid item sm={4}>
            <h3>Order List</h3>
            <div style= {{height:400}}>
                <DataGrid rows ={orders} columns={ocolumns}  localeText={trTR.components.MuiDataGrid.defaultProps.localeText} />
            </div>
        </Grid>
        <Grid item sm={4}>
            <h3>Category Definition</h3>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" onChange={(e)=> setname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Description:</label>
                <input type="text" onChange={(e)=> setdescription(e.target.value)} />
            </div>
            <div>
                <button onClick={()=>addCategory()}>Add</button>
                {/* <button onClick={add}>Add</button> */}
            </div>
    </Grid>
        <Grid item sm={4}>
            <h3>Category LIST</h3>
            <div style= {{height:400}}>
                <DataGrid rows ={categories} columns={ccolumns} localeText={trTR.components.MuiDataGrid.defaultProps.localeText} />
            </div>
        </Grid>
    </Grid>
    {/* spacing={2} columnSpacing={{xs:1,sm:2,md:3}}*/}
    </>
    )
}

export default Assignment170224