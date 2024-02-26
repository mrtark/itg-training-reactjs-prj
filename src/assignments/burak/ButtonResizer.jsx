import React, {useState} from 'react'

function ButtonResizer() {

  const [btnHeight, setheight] = useState(20);
  const [btnWidth, setwidth] = useState(150);

  const increase = (size) => {
    setheight(btnHeight + size);
    setwidth(btnWidth + size);
  }

  return (<>
    <p/>
    <button onClick={() => increase(100)}>+</button>
    &nbsp;
    <button onClick={() => increase(-100)}>-</button>
    <p/>
    <div><button style={{width: btnWidth + 'px',height: btnHeight + 'px'}}>Benjamin Button</button></div>
    <p/>
    
    </>
  )
}

export default ButtonResizer