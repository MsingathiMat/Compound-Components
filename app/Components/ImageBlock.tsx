import Image from 'next/image'
import React from 'react'

const ImageBlock = ({src, width,height,fill, label}:{src:string, width?:number,height?:number,fill?:boolean,label?:string}) => {
  return (
  <>
  {

fill?

<div className=' relative w-full h-full rounded-md overflow-hidden'>

  <Image fill src={src} alt='' className=' -z-0 '/>

  <div className='  bg-gradient-to-t from-[rgba(0,0,0,0.6)] from-20% via-transparent via-40% to-transparent CENTER z-10 absolute  w-full h-full'> 
    
    <p className='  m-l-auto m-r-auto absolute bottom-4 text-lg font-bold text-white '>
      {label}
      </p></div>
</div>


: <Image  width={width?width:120} height={height?height:120} src={src} alt='' className=' rounded-md'/>
  }
  </>
  
  )
}

export default ImageBlock
