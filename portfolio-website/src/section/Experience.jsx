import React from 'react'
import { experiences } from '../constants'
import { Timeline } from '../components/Timeline'
const Experience = () => {
  return (
    <div className='w-full'>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experience