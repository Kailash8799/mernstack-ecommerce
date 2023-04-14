import React from 'react'
import { useEffect } from 'react'

const Contact = ({setProgress})=>{
  useEffect(() => {
    setProgress(30)
    setProgress(70)
    setProgress(100)
  }, [setProgress])
  
  return (
    <div>Contact</div>
  )
}

export default Contact