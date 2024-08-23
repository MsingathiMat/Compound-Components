"use client"
import React, { useState } from 'react'
import BoxContainer from './BoxContainer'




const Incrementer = ({minimum,maximum,counter,setCounter}:{counter:number,setCounter:React.Dispatch<React.SetStateAction<number>>,minimum?:number,maximum?:number}) => {

  

    
    const Increment = ()=>{

     if (maximum){

        if ( counter ===maximum){

            alert("You have reached the Maximum unit")
                    }else{
            
                        setCounter((prevCounter)=>prevCounter+1)
                    }

     }else{

        setCounter((prevCounter)=>prevCounter+1)
     }
      

    }

    const Decrement = ()=>{

       

    

                    if (minimum){

                        if ( counter ===minimum){

                            alert("You have reached the Minimum unit")
                                    }else{
                            
                                        setCounter((prevCounter)=>prevCounter-1)
                                    }
                
                     }else{
                
                        setCounter((prevCounter)=>prevCounter-1)
                     }

        
    }
  return (
    <div className=' CENTER gap-1'>


<div onClick={()=>{Decrement()}}>

<BoxContainer variant='LIGHT' className=' hover:bg-[#0ea77a] hover:cursor-pointer w-[30px] h-[30px] rounded-sm'> <p className=' text-white font-bold text-[18px]'>-</p></BoxContainer>

</div>
   
    <BoxContainer variant='DARK' className=' hover:bg-AppPrimary hover:cursor-pointer w-[40px] h-[40px] rounded-sm'> <p className=' text-white font-bold text-[22px]'>{counter}</p></BoxContainer>
    
      
  
  

<div onClick={()=>{Increment()}}>

<BoxContainer  variant='LIGHT' className=' hover:bg-[#0ea77a] hover:cursor-pointer w-[30px] h-[30px] rounded-sm'> <p className=' text-white font-bold text-[18px]'>+</p></BoxContainer>
    
</div>
</div>
  )
}

export default Incrementer
