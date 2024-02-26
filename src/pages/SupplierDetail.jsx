import React from 'react'
import {useParams} from "react-router-dom";
function SupplierDetail() {
{/* http://localhost:3000/suppliers/2*/}
    const {id} = useParams();  {/*useparams hook */}
    return ( <>
    <h1>Detail</h1>
    <h1>{id}</h1>
        {/* <div>Supplier Detail</div> */}
    </>
    )
}

export default SupplierDetail
