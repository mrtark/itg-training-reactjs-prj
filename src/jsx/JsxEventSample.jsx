import React from 'react'

function JsxEventSample() {
//fonskiyon dışardan parametre alıyorsa bu şekilde yaz
    const hello=()=>{ 
        //arrow functions:
        alert("Hello reactjs!")
    }
    return (<>
    <button onClick={hello}>Hello</button>
    <button onClick={() => hello()}>Hello-2</button> 
     </>)
}

export default JsxEventSample
