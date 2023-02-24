import React from 'react'
import Backend from './Backend'
import Hosting from './Hosting'
import Skills from './Skills'

const AllSkills = () => {
  return (
    <div>
       <div Container id='skills' data-aos='flip-right'>
       <h1 style={{color:"teal"}}>SKILLS</h1>
          <Skills/>
          <Backend/>
          <Hosting/>

       </div>

         
    </div>
  )
}

export default AllSkills