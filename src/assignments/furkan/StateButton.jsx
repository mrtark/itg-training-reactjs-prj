import React, {useState} from 'react'

function StateButton() {
    const [width, setWidth] = useState(10); 
    const [height, setHeight] = useState(10); 
  
    const increase = () => {
        setWidth(width * 100); 
        setHeight(height * 100); 
    }
  
  return (<>
  
    <p>
        <tr>
            <td>
                <h1>Increase</h1>
            </td>
            <td>
                <button style={{width: width, height: height}} onClick={increase}></button>
            </td>
        </tr>
    </p>
   
  
  
  </>
  )
}

export default StateButton