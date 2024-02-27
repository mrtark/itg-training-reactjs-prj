import { Button, ThemeProvider, createTheme } from '@mui/material';//PK:'Button' is declared but its value is never read.ts(6133)
import { DataGrid, trTR } from '@mui/x-data-grid';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../axiosSample/axiosInstance'; //Alp: '../api/axiosInstance';

function CategoriesHWDataGrid () {
    const [categories, setcategories] = useState([]);
    const [disableAdd, setdisableAdd] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const add = (values: any) => {
        if (disableAdd) {
            console.log("disableAdd:" + disableAdd);
            return false;
        }

        setdisableAdd(true);

        axiosInstance.post("categories", values)
            .then(res => {
                alert("Success!");
                console.log(res);
                fillCategories();
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setdisableAdd(false);
            });
    };

    const fillCategories = () => {
        axiosInstance.get("categories")
            .then(res => setcategories(res.data))
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        fillCategories();
    }, []);

    return (<>
        <div style={ { height: 400 } }>
            <form onSubmit={ handleSubmit(add) }>
                <div>
                    <label htmlFor="">İsim:</label>
                    <input type="text" { ...register("name", { required: true }) } />
                    { errors.name && <span>İsim alanı boş olamaz</span> }
                </div>
                <div>
                    <label htmlFor="">Açıklama:</label>
                    <input type="text" { ...register("description") } />
                </div>
                <div>
                    { <input type='submit' value='Ekle' /> }
                </div>
            </form>
            <hr />
            {/* //PK: Argument of type 'Localization' is not assignable to parameter of type 'ThemeOptions'.
            //Types of property 'components' are incompatible */}
            <ThemeProvider theme={ createTheme(
                trTR, 
            ) }>
                <DataGrid rows={ categories } columns={ [
                    {
                        field: "id",
                        headerName: "Kategori Id",
                        width: 200
                    },
                    {
                        field: "name",
                        headerName: "İsim",
                        width: 300
                    },
                    {
                        field: "description",
                        headerName: "Açıklama",
                        width: 600,
                    }
                ] }></DataGrid>
            </ThemeProvider>;
        </div>
    </>
    );
}

export default CategoriesHWDataGrid;