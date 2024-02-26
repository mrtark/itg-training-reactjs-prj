import React from 'react'
import { categories } from '../data/categories'

function ObjectArraySample() {
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
                <td>{item.description}</td>
          </tr>)
        }
    </tbody>
    </>
    )
}

export default ObjectArraySample
