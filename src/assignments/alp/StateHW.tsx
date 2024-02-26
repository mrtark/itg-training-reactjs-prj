import React, { useState } from 'react';
import { countries } from '../../data/countries'; //'../data/countries';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
//P.K. compile error on .jsx file so converted to .tsx: Type annotations can only be used in TypeScript files

function StateHW (props: any) {
    const [ currentWidth, setCurrentWidth ] = useState(0);
    const [ currentHeight, setCurrentHeight ] = useState(0);

    const increaseWidth = (event) => {
        event.target.style.width = (event.target.style.width.replace("px", "") * 1) + 100 + "px";
        setCurrentWidth(event.target.style.width);
    };

    const increaseHeight = (event) => {
        event.target.style.height = (event.target.style.height.replace("px", "") * 1) + 100 + "px";
        setCurrentHeight(event.target.style.height);
    };

    let [ countryList, setCountryList ] = useState(countries.sort(() => 0.5 - Math.random()).slice(0, 10));
    const fillCountryList = () => {
        setCountryList(countries.sort(() => 0.5 - Math.random()).slice(0, 10).sort((country1, country2) => country1.id - country2.id));
    };

    const countryReturner = (props: { vendorId: string; }) => {
        return countryList.map(country =>
            <tr key={ uuidv4() }>
                <td><Link to={ "/countries/" + country.id }>{ country.id }</Link></td>
                <td>{ props.vendorId + " - " + country.code }</td>
                <td>{ country.name }</td>
                <td>{ country.capital }</td>
                <td>{ country.population }</td>
            </tr >
        );
    };

    return (
        <>
            <h1>Current width: { currentWidth }</h1>
            <h1>Current height: { currentHeight }</h1>
            <hr />
            <button onClick={ (event) => { increaseWidth(event); increaseHeight(event); } }>Increase Width</button>
            <hr></hr>
            <button onClick={ () => setCountryList(countryList.slice(1)) }>Delete First</button>
            <button onClick={ () => setCountryList([]) }>Clear Countries</button>
            <button onClick={ () => fillCountryList() }>Fill Countries</button>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countryReturner(props)
                    }
                </tbody>
            </table>
        </>
    );
}

export default StateHW;