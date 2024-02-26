import React, { useState } from 'react';
import { countries } from '../../data/countries' //İsmail: '../data/countries';

function CountryList() {
    const [countryList, setCountryList] = useState(countries);

    const removeCountryFromTop = () => {
        const updatedList = [...countryList];
        updatedList.shift(); 
        setCountryList(updatedList);
    };

    const removeCountryAll = () => {
        setCountryList([]);
    };

    return (
        <div>
             <button onClick={removeCountryFromTop}>Delete First Country</button>
            <button onClick={removeCountryAll}>Delete All Country</button>
            <table>
                <thead>
                    <tr>
                        <th>Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {countryList.map((item, index) => (
                         <tr key={index}>
                         <td>{item.name}</td>
                     </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CountryList;