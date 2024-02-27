import React, { useState } from 'react'
import axios from 'axios'

function Odev4() {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")

    const add = () => {
        let newRecord ={
            name : name,
            description : description
        }

        axios.post("https://northwind.vercel.app/api/categories", newRecord)
        .then(res => {
            alert("Success!")
        }).catch(err => {
           console.log('Error',err);
       })

    }

  return (<>
    <div>
    <label htmlFor=''>Name:</label>
    <input type='text' onChange ={(e) => setname(e.target.value)} ></input>
   </div>
   <div>
    <label htmlFor=''>Description:</label>
    <input type='text' onChange ={(e) => setdescription(e.target.value)}  ></input>
   </div>
   <div>
    <button onClick={add}>Add</button>
   </div>
  </>
    
  )
}

export default Odev4