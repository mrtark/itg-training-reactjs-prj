import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axiosSample/axiosInstance'
import { DataGrid } from '@mui/x-data-grid';
import ITGButton from './ITGButton';
//import axios from 'axios';
//import {DataGridPro} from '@mui/x-data-grid-pro'; //NVSRM de kullanılan mui pro satın alınmış durumda
//17.02.24 Ogleden sonra [14:36-] oturumu kayıt <5:40:00
//MAterial UI:DataGrid: Türkiye Finans Katılım, Sağlık bakanlığı e-nabız vs. kullanıyor, 
//50-100bin kayıtlık veri de getirsen scroll ettikçe html-render eder, performansı en büyük avantajı
function ProductsDataGrid() {
    const [products, setproducts]= useState([]);
    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = () => {
        axiosInstance.get("products") // axios.get("https://northwind.vercel.app/api/products")  
        .then( res => {
            setproducts(res.data);
        })
    }
    //field da yazan data olmalı yoksa renderCell icinde de manipule edilebilir
    const columns = [
        {field:"id",headerName:"Product ID",width:200},
        {field:"name",headerName:"Product Name",width:400},
        {field:"unitPrice",headerName:"Price",width:300},
        {field:"kdvPrice",headerName:"KDV",width:200, 
           renderCell:(params)=>{return <span>{(params.row.unitPrice * 0.2).toFixed(2)}</span>}},
        {field:"Delete",headerName:"Delete",width:200, 
           renderCell:(params)=>{return <ITGButton onClick={() => deleteProduct(params.row.id)}>Delete</ITGButton>}}
    ]

    const deleteProduct = (id) => {
        //axios.delete("https://northwind.vercel.app/api/products/"+id)
        //axios.delete('https://northwind.vercel.app/api/products/${id}') //string-literal
        console.error('id:', id); //yazmiyor yapmiyor
        axiosInstance.delete(`products/${id}`) 
        .then(res => {
            loadProducts();
        })
    }
    return (<>
        <div style= {{height:400}}>
            <DataGrid rows ={products} columns={columns}/>
        </div>
     </>
    )
}

export default ProductsDataGrid