import React from 'react'
import { useState } from 'react';


function Odev() {

    const [dimension, setDimension] = useState(100);
    

    const changeDimension = () => {
        const newDimension = dimension + 100;
        setDimension(newDimension);
    }


  return (<>
        <button style={{ width: dimension + 'px', height: dimension + 'px' }} onClick={changeDimension}>Change Dimension</button>
  </>
    
  )
}

export default Odev