import React, {useState} from 'react'
import { countries } from '../../data/countries' //Furkan: '../countries/countries'

function StateCountries() {
  
    const [countriesState, setCountriesState] = useState(countries)
  
    const deleteRow = () => {
        if (countriesState.length > 0) {
            const updatedCountries = [...countriesState.slice(1)]; // Remove the first element
            console.log(updatedCountries);
            setCountriesState(updatedCountries);
        }
    };

    const clearAll = () => {
        if (countriesState.length > 0) {
            const updatedCountries = [];
            console.log(updatedCountries);
            setCountriesState(updatedCountries);
        }
            
    }
  
  
  return (<>
  
  <table>
        <tr>
            <td>
                <button onClick={deleteRow}>Delete Row</button>
            </td>
            <td>
                <button onClick={clearAll}>Clear All</button>
            </td>           
        </tr>
  </table>
<hr />
<hr />
  <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
                <th>Population</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
                {
                    countriesState.map(item => <tr style={{color:"yellow", background:"blue"}}>
                        <td>{item.id}</td> 
                        <td>{item.name}</td>
                        <td>{item.code}</td> 
                        <td>{item.population}</td> 
                        <td>{item.currency}</td> 
                    </tr>
                    )                
                }
        </tbody>
    </table>
  
  </>    
  )
}

export default StateCountries