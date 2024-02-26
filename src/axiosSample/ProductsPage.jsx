import axios from 'axios';
import React, {useEffect, useState,useContext} from 'react'
//17.02.24 Ogleoncesi oturumu, kendindene kodlaması
import {FavoritesContext} from '../context/FavoritesContext';
function ProductsPage() {

    const [products, setproducts] =useState([]);

    const {addToFavorites} = useContext(FavoritesContext);

    //asenkron calisir, sadece bir kere calisir eşleniği onLoad
    useEffect(() =>{
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => { //handles url get success case : status, data; 2 ile başlayan status codelu herşey
                //then: JSe ozgu: bir metod promise ise(asenkron) sonucu then ile yakalanır 
                //if(res.status == 200){ }         
                console.log(res);
                console.log(res.data);
                setproducts(res.data);
            })
            .catch(err => { //handles url get error case
                console.log(err);
            })
    }, [])
    return (<>
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>UnitPrice</td>
                <td>Add To Fav</td>
            </tr>
        </thead>
        <tbody>
            {
                products.map(item => (
                    <tr key= {item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td><button onClick={() => addToFavorites(item)}>Add To Fav</button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
        {/* <ul>
            {
                products.map(item => <li>{item.name}- {item.unitPrice}</li>)
            }
        </ul> */}
        </>
    )
}

export default ProductsPage
