import React, {useState} from 'react'
import { suppliers} from "../data/suppliers";

function StateArray() {
    const[supplierState, setSupplierState] =useState(suppliers); //[3,5,3]

    const[numbers, setnumbers] =useState([3,5,3]); // private, global state yönetiminde REdux ve Context var gorulecek

    
    return (<>
        <h1>Length: {supplierState.length}</h1>
        <hr/>
        <button onClick={()=> setSupplierState([])}>Clear</button>
        <ul>
            {
                supplierState.map(item =><li>{item.companyName}</li>)
            }
        </ul>
        </>
    )
}

export default StateArray
