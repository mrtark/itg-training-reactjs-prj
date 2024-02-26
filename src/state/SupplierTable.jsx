import React, {useState} from 'react'
import {suppliers} from '../data/suppliers'

function SupplierTable() {
    const [supplierList, setsupplierList]=useState(suppliers);
  
    const deleteSupplier= (id) => {
        const confirm= window.confirm("Are you sure?");
        if(!confirm) return;

        let filteredSuppliers=supplierList.filter(q=> q.id!=id);
        setsupplierList(filteredSuppliers);
    }
  return (<>

  <h1>Length: {supplierList.length}</h1>
  <hr/>
  <button onClick={()=>setsupplierList([])}>Clear All</button>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Contact</th>
                <th>City</th>
                <th>Delete</th>

            </tr>
        </thead>
        <tbody>
            {supplierList.map(item => <>
            <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.address?.city}</td>
                <td><button onClick={() => deleteSupplier(item.id)}></button></td>
            </tr>
            </>)}
        </tbody>
    </table>
        </>
    )
}

export default SupplierTable
