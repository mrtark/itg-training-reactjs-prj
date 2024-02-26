import React, {useState} from 'react'

function StateIntro() {
    console.log('HELLO');
    const [counter,setcounter] = useState(0);//with hook
    //let counter =0; //without hook
    
    const increase =() => {
        //  setcounter(20); //counter=20
        setcounter(counter+1);

    }
    // const increase =() => {
    //     counter = counter+1;
    //     console.log("counter ",counter);
    // }
    return (<>
        <h1>Counter: {counter}</h1>
        <hr/>
        <button onClick={increase}>Increase</button>
        <button onClick={()=>increase()}>Increase-2</button>
        <button onClick={()=>setcounter(counter+1)}>Increase-3</button>
        </>
    )
}

export default StateIntro

