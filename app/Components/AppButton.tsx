"use client"
import React from 'react'

const AppButton = ({children, OnClick}:{children:React.ReactNode, OnClick:()=>void}) => {
  return (
    <div onClick={()=>{OnClick()}} className=' CENTER bg-AppPrimary w-fit text-white hover:cursor-pointer hover:bg-[#0ea77a]  h-[45px] px-6 rounded-lg'>
      
      {children}
    </div>
  )
}

export default AppButton
