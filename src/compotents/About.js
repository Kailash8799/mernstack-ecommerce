import React from 'react'
import { useEffect } from 'react'

const About = ({setProgress})=> {
  useEffect(() => {
    setProgress(30)
    setProgress(70)
    setProgress(100)
  }, [setProgress])
  
  return (
    <div className='container'>
      About
    </div>
  )
}

export default About