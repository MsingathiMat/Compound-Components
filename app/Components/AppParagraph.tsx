import React from 'react'

const AppParagraph = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' flex-1 CENTER w-full '>

<p className=' text-AppBody line-clamp-2'>

{children}
</p>
</div>
  )
}

export default AppParagraph
