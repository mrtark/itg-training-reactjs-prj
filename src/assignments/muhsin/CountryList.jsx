import React, { useState } from 'react';
import { countries } from '../../data/countries';
import './countryList.css'; //'../cssFile/countryList.css';

function CountryList() {
    const [countryList, setCountryList] = useState(countries);

    const removeCountryShift = () => {
        const updatedList = [...countryList];
        updatedList.shift(); 
        setCountryList(updatedList);
    };

    const removeCountryAll = () => {
        const updatedList = [...countryList]; //P.K. Warning: 'updatedList' is assigned a value but never used
        setCountryList([]);
    };

    const handleCheckboxChange = (index) => {
        const updatedList = [...countryList];
        updatedList[index].checked = !updatedList[index].checked;
        setCountryList(updatedList);
    };

    const selectAll = (event) => {
        const checked = event.target.checked;
        const updatedList = countryList.map(item => {
            return {
                ...item,
                checked: checked
            };
        });
        setCountryList(updatedList);
    };

    const removeSelectedCountries = () => {
        const updatedList = countryList.filter(item => !item.checked);
        setCountryList(updatedList);
    };

    return (
        <div className="country-list-container">
             <button onClick={removeCountryShift}>İlk Ülkeyi Sil</button>
            <button onClick={removeCountryAll}>Tüm Ülkeleri Sil</button>
            <button onClick={removeSelectedCountries}>Seçili Ülkeleri Sil</button>
            <table className="country-table">
                <thead>
                    <tr>
                        <th><input type="checkbox" onChange={selectAll} /></th>
                        <th>Ülke Adı</th>
                    </tr>
                </thead>
                <tbody>
                    {countryList.map((item, index) => (
                         <tr key={index}>
                         <td><input type="checkbox" checked={item.checked || false} onChange={() => handleCheckboxChange(index)} /></td>
                         <td>{item.name}</td>
                     </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CountryList;
