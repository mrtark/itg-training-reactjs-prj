import React, {useState} from 'react'

function StateRandomColor() {

    const [color, setcolor]=useState("red");

    const randomColors= ["red","green","blue","white","purple"];
    const changeColor = () =>{
        let randomNumber = Math.floor(Math.random() +randomColors.length);
        const randomColor= randomColors[randomNumber];
        setcolor(randomColor);
    }
    return (<>
    <hr/>
    <button onClick ={()=>changeColor()}>Change Color</button>
    <div style= {{width: 200, weight: 200, backgroundColor: color} }></div>

    </>
    )
}

export default StateRandomColor
