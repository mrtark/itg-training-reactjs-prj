import React, {useState} from 'react';
import { countries } from '../../data/countries'
import {Link} from "react-router-dom";
   //const [counter,setcounter] = useState(0);//with hook
    //let counter =0; //without hook
        // setcounter(counter+100);

function Assignment100224() {
    const [maxSize,setmaxsize]= useState(10); //let maxSize=10;
    const initialButtonSize = { width: 70, height: 30 };
    const [buttonSize, setButtonSize] = useState(initialButtonSize); //useState({ width: 50, height: 20 });
    const [countriesList, setCountries] = useState(countries);

    console.log('Assignment-1 10.02.24');
     
    const enlarge =() => {
        console.log('enlarges with&height of the button to: (w:'+(buttonSize.width+100)+' h:'+(buttonSize.height+100));
        setButtonSize({
            width: buttonSize.width + 100,
            height: buttonSize.height + 100
        });   
    }
    const tabledeleteTop =() => {
        setmaxsize(maxSize-1);//maxSize=maxSize-1;
        console.log('delete first record of the cocuntries table:'+maxSize);
        // Create a copy of the countries array excluding the first element
        const updatedCountries = countriesList.slice(1);
        setCountries(updatedCountries);
    }
    const tableclear =() => {
        console.log('Cleared all data of countries table');
        // Clear the countries array to its original state
        setmaxsize(0);//countriesList.slice(0, maxSize)
        setCountries(countries);
    }
    const tablereset =() => {
        console.log('Reset(Reload) all data of countries table');
        // Reset the countries array to its original state
        setmaxsize(10);
        setCountries(countries);
    }
    const resetButton = () => {
        console.log('Button size reset to default:', initialButtonSize);
        setButtonSize(initialButtonSize);
    };
    return (
    <>
        <h1>Length: {countries.length}</h1>
        <hr/>
        {/* <button onClick={enlarge}>Enlarge Button</button> */}
        <button onClick={enlarge} style={{ width: `${buttonSize.width}px`, height: `${buttonSize.height}px` }}>Enlarge Button</button>
        <button onClick={resetButton}>Reset Button Size</button>
        <button onClick={()=> tabledeleteTop()}>Table Delete First</button>
        <button onClick={()=> tableclear()}>Table Clear</button>
        <button onClick={()=> tablereset()}>Table Reload</button>
       <thead>
            <tr>
                <th>Id</th>
                <th>Country Name</th>
                <th>Country Code</th>
                <th>Population</th>
                <th>Capital</th>
                <th>Currency</th>
           </tr>
        </thead>
        <tbody>
            {countriesList.slice(0, maxSize).map((item) => (
            <tr key={item.id}>
                <td><Link to={`/countries/${item.id}`}>{item.id}</Link></td>
            {/* {countries.slice(0,maxSize).map(item => 
             <tr>
                <td><Link to={"/countries/"+item.id}>{item.id}</Link></td> */}
                {/* <td>{item.id}</td> */}
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.population}</td>
                <td>{item.capital}</td>
                <td>{item.currency}</td>
             </tr>
             ))}
            {/* )} */}
        </tbody>
        </>
        )
}
export default Assignment100224
