import React from 'react'
import { countries } from '../../data/countries' //'../data/countries';
import { useState } from 'react';

function Odev2() {
    const [countryList, setCountryList] = useState(countries);

    const deleteCountry = () => {
        if (countryList.length > 0) {
            const updatedList = countryList.slice(1);
            setCountryList(updatedList);
        }
    };

    const clear = () => {
        setCountryList([]);
    }
 
  return (<>

    <button onClick={deleteCountry} >Delete</button>
    <button onClick={clear}>Clear</button>
    <table>
        <thead>
            <tr>
                <th> İd </th>
                <th> Country Name </th>
                <th> Country Code </th>
                <th> Population </th>
                <th> Capital </th>
                <th> Currency </th>

            </tr>
        </thead>
        <tbody>
            {
                countryList.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>{item.population}</td>
                    <td>{item.capital}</td>
                    <td>{item.currency}</td>
                </tr> )
            }
        
        </tbody>
    </table>


  </>
    
  )
}

export default Odev2