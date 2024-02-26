import React, {useEffect, useState} from 'react';
import axios from 'axios';
//17.02.24 Ogleoncesi oturumu
//Browserda Network sekmesi fetch tarafında gidenleri izleme, sayfanın yavaşlık neden tespiti için önemli
function Categories() {
    const [categories, setcategories] =useState([]);

    //component ilk ayaga kalktiginda bir kez,asenkron calisir,  eşleniği page onLoad
    useEffect(() =>{
        //ajax benzeri, Reacttaki : Axios ve Fetch kütüphanleri alternatif kütüphanler 
        //restful olmayan servisler için wsf vs. başkaca kütüphaneler var

        //Public bir URLe  get request atıyoruz!:
        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => { //handles url get success case : status, data; 2 ile başlayan status codelu herşey
                //then: JSe ozgu: bir metod promise ise(asenkron) sonucu then ile yakalanır 
                if(res.status == 200){

                }         
                //console.log(res);
                console.log(res.data);
                setcategories(res.data);
            })
            .catch(err => { //handles url get error case; 4lü status kodlar catche düşüyor, fetch de 4ler catche düşmüyor
                alert(err); //console.log(err);
            })
        return() =>{ //useEffect clean function ~serve as  Form/Page close/dispose action
            //abortController.abort(); //cancels the request when component unmounts
        }
    }, [])
    return (<>
    <ul>
        {
            categories.map(item => <li>{item.name}</li>)
        }
    </ul>
    </>
    )
}

export default Categories
//props, state, effect