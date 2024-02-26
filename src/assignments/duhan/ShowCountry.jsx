import React, { useState } from 'react'
import { countries } from '../../data/countries' //Duhan's: '../data/Country'

function ShowCountry() {


    const [country, setCountry] = useState(countries);

    const deleteFirst = () => {

       
        const updatedCountries = [...country];

        if(updatedCountries.length == 0){  //P.K. Warning: Expected '===' and instead saw '=='  eqeqeq
            alert("Eleman Kalmadı")
        }

        updatedCountries.shift();
        setCountry(updatedCountries);

    };

    const deleteAll = () => {

            setCountry([]);

        
    };

    const getList = () => {

        setCountry(countries);

    
};



  return <>
  
  <table>
    <thead>

    <tr>
        
        <td>  <button onClick={deleteFirst}> Delete first element </button>  </td>
        <td>  <button onClick={deleteAll}> Delete All </button>   </td>
        <td>  <button onClick={getList}> Get All </button>   </td>

       
         
         </tr>

        <tr>
            <th>   Country </th>
            <th>   Contry code  </th>
        </tr>
    </thead>
    <tbody>

    {

    country.map(item => <tr>
            <td>{item.name}</td>
            <td>{item.code}</td>


        </tr>)
    }
    </tbody>

  </table>
  
  </>
}

export default ShowCountry