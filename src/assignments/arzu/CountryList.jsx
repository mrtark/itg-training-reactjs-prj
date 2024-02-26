import React from 'react'
import { countries } from '../../data/countries' //Arzu: '../data/countries'
//import {Link} from 'react-router-dom' ; //P.K.:'Link' is defined but never used 
import { useState } from "react";

function CountryList() {
    const [countryList, setCountryList] = useState(countries);
    const removeShift = () => {
        const updatedList = [...countryList];
        updatedList.shift(); 
        setCountryList(updatedList);
    
    };
    const removeCountryAll = () => {
        //const updatedList = [...countryList];//P.K.:'Link' is defined but never used 
        setCountryList([]);
    };
    return (<>
     <button onClick={removeShift}>EnÜsttekiniSil</button>
     <button onClick={removeCountryAll}>HepsiniSil</button>
        <table>
           
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
    {countryList.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
            </tr>
        );
    })}
</tbody>

        </table>

    </>
    )
}

export default CountryList;