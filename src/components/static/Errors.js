import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@mui/material'

const Errors = () => {
  const errors = useSelector(state => state.errors);

  const errorMessages = errors.map((error, index) => <Alert severity="error"  variant="filled" key={index}>{error}</Alert>)

  return (
    <div>
      {errorMessages}
    </div>
  )
}

export default Errors
