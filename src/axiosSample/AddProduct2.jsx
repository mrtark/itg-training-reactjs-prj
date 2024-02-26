import React from 'react'
import {useForm} from 'react-hook-form'
import { axiosInstance } from './axiosInstance';
//17.02.24 Ogleoncesi oturumu

function AddProduct2() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    //register: fieldları valuelara bağlar
    //formState: formla ilgili değişken yapıları yakala, submitCount, isSubmit,isLoading,isDirty vs. //react-hook-form.com/docs/useform/formstate
    const add = (values) => {
        //console.log(values);
        axiosInstance.post("products", values)
        .then(res => {
            alert("Success!")
        })
        .catch(err =>{
            console.log('error',err);
        })
    }

    console.log('errors:',errors);//required vs. tum validation errorlar formState in errors nesnesi içine toplanıyor
    //react-hook-form validation anahtarları: required, min, max, minLength, maxLength, pattern, validate
    //özelleştirilmiş validasyonlar içeren en  çok kulanılan kütüphane: yup (npmjs.com/package/yup)
    //butun form kütüphaneleri de yupu kullanır, örn.: react-hook-form.com/get-started#SchemaValidation 
    //NVSRMde kullanılan: npmjs.com/package/validator kütüphanesi
    return (<>
        <form onSubmit={handleSubmit(add)}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' {...register("name", {required: true})}/>
                {errors.name && <span>Name alanı boş bırakılamaz</span>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text' {...register("unitPrice")}/>
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type='text' {...register("stock")}/>
            </div>
            <div>
                {/* type submit koymadan formları submit edemezsin */}
                <button type='submit'>Add</button>
                {/* <input type='submit' value="Add"/> */}
            </div>
        </form>
    </>
    )
}

export default AddProduct2