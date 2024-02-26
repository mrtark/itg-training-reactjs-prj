import React, {useEffect, useState} from 'react'

function EffectSample() {

    const [number,setnumber]=useState(0)

    //var randomNumber=Math.random()*1000;
    //setnumber(randomNumber); //ERROR: Too many re-renders. React limits the number of renders to prevent infinite loop

    //asenkron calisir, sadece bir kere calisir eşleniği onLoad
    useEffect(()=> {
        var randomNumber=Math.random()*1000;
        setnumber(randomNumber);
    });

    return (
        <>
        <h1>{number}</h1>
        </>
    )
}

export default EffectSample
//props, state, effect
//effect: component ilk ayaga kalktiginda bir kez