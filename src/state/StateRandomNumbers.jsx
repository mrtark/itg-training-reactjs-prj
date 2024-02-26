import React, {useState} from 'react'

function StateRandomNumbers() {
    const [numbers,setnumbers] = useState([3,7,22]);

    const addRandomNumber =() => {
        const randomNumber =Math.floor(Math.random() * 30);
        //urettigim randomNumber numbers dizisinde varmi kontrolu
        if(numbers.includes(randomNumber))
            alert("Üretilen sayi dizide mevcut:"+ randomNumber)
        else
            setnumbers([...numbers, randomNumber]);
    }
    return (<>
    <h1>Length: {numbers.length}</h1>
    <button onClick= {() => addRandomNumber()}>Add Random number</button>
    <hr/>
    <ul>
        {
            numbers.map(item=> <li>{item}</li>)
        }
    </ul>
  </>
    )
}

export default StateRandomNumbers
