import React from 'react'
import BoxContainer from './BoxContainer'

const SnapView = ({icon, heading, description}:{icon:React.ReactNode, heading?:string, description?:string}) => {
  return (
    <div className=' CENTER gap-2 h-[100px] CENTER w-full '>
    
    <BoxContainer >

   {icon}
    </BoxContainer>
    <div className=' CENTER flex-col w-full items-start flex-1'>

        {
            heading?<h1 className=' -mb-4 text-AppHeading  text-[50px] font-bold'>{heading}</h1>:null
        }

{
    description? <p className=' mb-4 text-gray-700 text-[20px] '>{description}</p>:null
}
       
    </div>

</div>
  )
}

export default SnapView
