import React from 'react'
import {useForm} from "react-hook-form";
import { axiosInstance } from './axiosInstance';
//17.02.24 Ogleoncesi oturumu

function AddProductHookForm() {
//register inputları valueya baglar
    const {register, handleSubmit, formState:{errors, isLoading}}= useForm()
    console.log("errors",errors);

    const add= (values) =>{
        axiosInstance.post("products",values)
        .then(res=>{
            alert("Success");
        })
        .catch(err=> {
            console.log('Error',err);
        });
    }

    return (<>
        <form onSubmit={handleSubmit(add)}>
            <div>
                <label htmlFor="">Name</label>
                {/* validationlar: required, min,max,pattern, vs. özelleride yazılabili: yup reacttan bağımsız validation ve default özellik şemada vereyi sağlayan */}
                {/* bizim projedeki validator kütüphanesi is kütüphanesi oalark geçiyor */}
                <input type="text" {...register("name", {required:true})}></input>
                {errors.name && <span>Name alanı boş bırakılamaz</span>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type="text" {...register("unitPrice")}></input>
                {errors.name && <span>Name alanı boş bırakılamaz</span>}
            </div>           
            <div>
                <label htmlFor="">Units In Stock</label>
                <input type="text" {...register("unitsInStock")}></input>
            </div>             
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </>
    )
}

export default AddProductHookForm
