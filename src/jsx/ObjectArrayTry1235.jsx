import React from 'react'
import { suppliers } from '../data/suppliers'
import {Link} from "react-router-dom";

function ObjectArrayTry1235() {

    let maxSize=5;

    //24.02.24 update:
    const {favorites, setfavorites} = useContext(SupplierContext)
    const add = (item) =>{
        setfavorites([... favorites, item])
    }
    return (<>
        <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contact Title</th>
            </tr>
        </thead>
        <tbody>
            {
                suppliers.slice(0,maxSize).map(item => <tr>
                   <td><Link to={"/suppliers/"+item.id}>{item.id}</Link></td>
                    {/* <td>{item.id}</td> */}
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.contactTitle}</td>
              </tr>)
            }
        </tbody>
        </>
        )
}

export default ObjectArrayTry1235
/*
var size = 3;
var items = list.slice(0, size).map(i => {
    return <myview item={i} key={i.id} />
});
return (
  <div>{items}</div>*/