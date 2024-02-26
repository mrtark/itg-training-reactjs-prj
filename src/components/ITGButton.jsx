import { Button } from '@mui/material'
import React from 'react'
//17.02.24 Ogleden sonra [14:36-] oturumu

function ITGButton(props) {
  return (
    <Button size="large" color='error'>{props.children}</Button>
  )
}

export default ITGButton