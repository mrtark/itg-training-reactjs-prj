//PK declared but never used //import { Button } from '@mui/material'
import { DataGrid , trTR} from '@mui/x-data-grid'
//PK declared but never used //Muhsin:import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../axiosSample/axiosInstance' //Muhsin: '../axiosSample/axiosInstance'
//PK declared but never used //Muhsin:import { Grid } from '@mui/material';
import './loadingCss.css';//Muhsin:  '../cssFile/loadingCss.css'; 

function CategoriesList() {

    const [categories,setCategories] = useState([]) ; 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          //PK: //CategoriesList.jsx:21 Bir hata oluştu Hata sebebi : AxiosError {message: 'Request failed with status code 404'
          const response = await axiosInstance.get("categories"); 
          //OrderDataGrid.jsx:21 Error fetching orders: AxiosError {message: 'Request failed with status code 404'
          setCategories(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Bir hata oluştu Hata sebebi :', error);
        }
      };
      fetchCategories();
    }, []);
    
    
    const columns = [
      { field: 'name', headerName: 'İsim', width: 750 ,
      renderCell: (params) => (
        <span>{params.value && params.value.toLowerCase() === 'null' ? "-" : params.value}</span>
      ),},
      { field: 'description', headerName: 'Açıklama', width: 750 },    
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
            rows={categories}
            columns={columns}
            autoHeight
            localeText={trTR.components.MuiDataGrid.defaultProps.localeText} 
          />
        </div>
      );
      
      
      
      
}



export default CategoriesList
