import React, {useState} from 'react'
import {products} from '../data/products';

//each child in alist must have 
function ProductsTable() {
    const [productList, setproductList] = useState(products);

    const[isSorted, setisSorted]=useState(false);
    const [tax,settax]=useState(20);

    const sortByUnitPrice = () => {
        if(isSorted==false){
            let sortedProducts =productList.sort((a,b) => a.unitPrice-b.unitPrice);
            setproductList([...sortedProducts]);
            setisSorted(true);
        } else{
            let sortedProducts =productList.sort((b,a) => a.unitPrice-b.unitPrice);
            //AlternativeWay://let sortedProducts =productList.reverse();
            setproductList([...sortedProducts]);
            setisSorted(false);
        }

        let sortedProducts =productList.sort((a,b) => a.unitPrice-b.unitPrice);
        setproductList([...sortedProducts]);
        //setproductList(sortedProducts);//bos array versen geliyor siraladigin data consola yansimasina ragmen ekrana yansimiyor
        //primitive vs. reference type (e.g. array) in js
        console.log(sortedProducts);//consoleloga dogru sirada yaziyor yukaridaki onyuze ise yaramiyor
        //State referans tipli datalarda yeni bir referasn almazsa ASLA degismez, filterladik calisti siraladik calismadi
        //BKZ. reactjs state array
    }

    const filter1 =() =>{
        //use original data:products instead productList of state, since change is keep and prevent further filtering operate correctly
        let filteredProducts = products.filter(q => q.unitPrice <30) //productList
        setproductList(filteredProducts);
    }
    const filter2 =() =>{
        //use original data:products instead productList of state, since change is keep and prevent further filtering operate correctly
        let filteredProducts = products.filter(q => q.unitPrice >30 && q.unitPrice <100) //productList
        setproductList(filteredProducts);
    }
    const filter3 =() =>{
        //use original data:products instead productList of state, since change is keep and prevent further filtering operate correctly
        let filteredProducts = products.filter(q => q.unitPrice >100) //productList
        setproductList(filteredProducts);
    } 
     const refresh =() =>{
        setproductList(products);
    }
    const taxChange = () => {
        settax(10);
    }
    const taxChange2 = () => {
        settax(20);
    }
    return (<>

   <div>
       <button onClick={() => filter1()}>0-30 $</button>
       <button onClick={() => filter2()}>30-100 $</button>
       <button onClick={() => filter3()}>100 $ +</button>
       <button onClick={() => refresh()}>Refresh</button>
       <button onClick={() => taxChange()}>Tax - %10</button>
       <button onClick={() => taxChange2()}>Tax - %20</button>
   </div> 
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            {/* <td>Unit Price</td> */}
            <th style ={{cursor:'pointer'}} onClick={()=> sortByUnitPrice()}>Unit Price</th>
            <th>Stock</th>
            <th>Tax Price %20</th>
        </tr>
    </thead>
    <tbody>
        {
            productList.map((item) => {
                let bgColor = "";
                if(item.unitsInStock == 0)
                     bgColor ="tomato";
                return <tr style={{backgroundColor:bgColor}}>
                    <td>{item.id}</td>
                    <td>{item.name?.toUpperCase()}</td>
                    <td>{item.unitPrice?.toFixed(2)}</td>
                    <td>{item.unitsInStock}</td>
                    <td>{(item.unitPrice * 0.2).toFixed(2)}</td>
                </tr>
            })
            // productList.map((item) => <>
            // <tr>
            //     <td>{item.id}</td>
            //     <td>{item.name?.toUpperCase()}</td>
            //     <td>{item.unitPrice?.toFixed(2)}</td>
            //     <td>item.unitsInStock</td>
            // </tr>
            //</>)
        }
    </tbody>
</table>

      </>
    )
}

export default ProductsTable
