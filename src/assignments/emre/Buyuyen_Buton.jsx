import React from 'react'
import { useState } from 'react'

function VariableButton() {

    const [width, setWidth] = useState(100)
    const [height, setheight] = useState(100)

    const becomeGreater = () => {
        setWidth(width + 100)
        setheight(height + 100)
    }

    return (
        <button style={{ width: width, height: height }} onClick={becomeGreater}>Get Bigger</button>
    )
}

export default VariableButton



