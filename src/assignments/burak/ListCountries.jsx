import React, {useState} from 'react'
import {countries} from '../../data/countries' 
//P.K. export 'default' (imported as 'countries') was not found in '../../data/countries' (possible exports: countries)
//Burak: import countries from '../data/countries'

function ListCountries() {

    const [cList, setlist] = useState(countries);

    const splitCountry = (idx) => {
      setlist(cList.slice(idx));
    }

  return (
    <>
    <button onClick={() => splitCountry(1)}>Delete Country</button>
    &nbsp;
    <button onClick={() => splitCountry(cList.length)}>Clear List</button>
    <table>
        <thead>
            <tr>
                <th>Country</th>
                <th>Code</th>
            </tr>
        </thead>
        <tbody>
            {
                cList.map(item => <tr>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                </tr>)
            }
        </tbody>
    </table>
    </>
  )
}

export default ListCountries