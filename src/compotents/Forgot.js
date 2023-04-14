import React from 'react'
import { useEffect } from 'react'

const Forgot = ({setProgress})=> {
  useEffect(() => {
    setProgress(30)
    setProgress(70)
    setProgress(100)
  }, [setProgress])
  
  return (
    <div>Forgot</div>
  )
}

export default Forgot