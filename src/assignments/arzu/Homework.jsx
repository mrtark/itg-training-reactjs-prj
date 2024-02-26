import React from 'react'
import { useState } from "react";

function Homework() {

const [style,setStyle] = useState({width:100,height:100});
const changeStyle = () => {
    setStyle (s =>({
        width: s.width +100,
        height: s.height +100,

    }));

};
  return (
    <button style={style} onClick={changeStyle}>boyut</button> 
  )
}

export default Homework