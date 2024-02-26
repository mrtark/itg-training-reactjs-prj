import React, { useState } from 'react'

function BigButton() {

const [width, setWidth] = useState(50);
const [height, setHeigt] = useState(50);

const changeSize = () => {

  setWidth(width + 100);
  setHeigt(height + 100);

}

  return <>
  <button style={ {width:width , height:height}} onClick={changeSize}>Big Boy</button>
  
  </>
}

export default BigButton