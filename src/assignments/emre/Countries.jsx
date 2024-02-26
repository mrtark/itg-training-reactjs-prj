import React, { useState } from 'react'
import { countries } from '../../data/countries'

function Countries() {
    let size = 10;
    const [contryState, setCountryState] = useState(countries.slice(0,size))
   
    const deleteFirstRow = () => {
        setCountryState(firstRow => firstRow.slice(1))
    }

    const deleteAllRows = () =>  {
        setCountryState([{}])
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <td>
                        <button onClick = {deleteAllRows}>Clear</button>
                        <button onClick = {deleteFirstRow}>En üsttekini Sil</button>
                    </td>

                </tr>
                <tr>
                    <th>Country Name</th>
                    <th>Country Code</th>
                    <th>Country Population</th>
                </tr>
            </thead>
            <tbody>
                {
                    contryState.map(item => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.population}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Countries