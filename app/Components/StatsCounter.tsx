"use client"

import React, { useState } from 'react'


const StatsCounter = ({render,databaseStatsValue}:{render:(increment:number)=>React.ReactNode,databaseStatsValue:number}) => {

   
    const [increment, setIncrement] = useState(databaseStatsValue)

const IncrementCounter= ()=>{

    //update the database, and update the UI on DB success
    setIncrement(increment+1)
}

  return (
    <div onClick={()=>{IncrementCounter()}} className=' group CENTER gap-1 hover:cursor-pointer  h-10'>

    {render(increment)}
</div>
  )
}

export default StatsCounter
