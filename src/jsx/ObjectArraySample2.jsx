import React from 'react'

function ObjectArraySample2() {
    return (<>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {
                categories.map(item=> <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice?.toFixed(2)}</td>
                    <td>{item.unitsInStock}</td>
              </tr>)
            }
        </tbody>
        </>
        )
        //cannot read properties of undefined xxx  onene bak undefined gelmistir
}

export default ObjectArraySample2
