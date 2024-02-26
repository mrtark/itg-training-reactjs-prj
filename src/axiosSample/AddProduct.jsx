import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import { axiosInstance } from './axiosInstance';

//17.02.24 Ogleoncesi oturumu

function AddProduct() {

    const[name,setname]=useState("");
    const[unitPrice,setunitPrice] = useState(0);
    //Yukarıdaki şekilde sayfaya konan her input için state tanımlamak fazla sayıda input içeren formları çok olan uygulamalarda uygun değil
    //Formik,react-hook-form, Kendoo-form vs. gibi kütüphaneler kullanılarak input başına useState manuel koyma gereği kalkıyor
    
    //Bu tip fonk. cagiran butonlara çoklu tıklamayı engelle
    const add=()=>{
        let newProduct ={
            name:name,
            untPrice: unitPrice
        }
        ////burdaki newPRoduct default olan: raw cinsinden gönderim, form-data , binary,vs de oabilir, 
        //contentType: application/json
        // axios.post("https://northwind.vercel.app/api/products",newProduct) 
        // .then(res=>{
        //     alert("Success");
        // });

        //axios kütüphanesinin önemli özelliklerinde: instance kavramı
        axiosInstance.post("products",newProduct)
            .then(res=>{
                alert("Success");
            })
            .catch(err=> {
                console.log('Error',err);
            });
    }
    return (
       <>
       <div>
           <label htmlFor="">Name:</label>
           <input type="text" onChange={(e)=> setname(e.target.value)}/>
       </div>
       <div>
           <label htmlFor="">Unit Price:</label>
           <input type="text" onChange={(e)=> setunitPrice(e.target.value)} />
       </div>
        <div>
            <button onClick={()=>add()}>Add</button>
            {/* <button onClick={add}>Add</button> */}
        </div>
       </>
    )
}

export default AddProduct
//NVSRMdeki Validator alternatifleri- buton bidaha basamama, güvenlik vs. saglayan kütüphanler:
//react-hook-form(banka büyük kurumsal kullanılan form kütüphanesi,dezevantajı biraz fazla kod yazılıyor ama sağlıklı kütüphane),
//Formik, 
//yup validation