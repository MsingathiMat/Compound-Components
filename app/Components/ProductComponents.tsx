import React, { useState } from 'react'
import { ProductProvider } from '../Provider/ProductProvider'
import ImageBlock from './ImageBlock'
import { useProductContext } from '../Provider/ProductProvider'
import SnapView from './SnapView'
import { IoPricetagOutline } from 'react-icons/io5'
import AppParagraph from './AppParagraph'
import Incrementer from './Incrementer'
import StatsCounter from './StatsCounter'
import AppButton from './AppButton'
import { FaRegHeart } from 'react-icons/fa'



const Product = ({children}:{children:React.ReactNode}) => {
  return (
  <ProductProvider>

{children}
  </ProductProvider>
  )
}



const ProductImage = ()=>{

  const {products} = useProductContext()
  return (
    
      <div className=" relative  h-full w-[250px]">
      <ImageBlock label={products[1].name} fill src={products[1].imageUrl} />
    </div>
  
  )
}

const ProductDetails = ({children}:{children:React.ReactNode})=>{

 
  return(
      <div className=" CENTER flex-col  h-full flex-1">
      
      {children}
    
    </div>
      
  )
}

const PriceTag = ()=>{
  const {products} = useProductContext()
  return (

      <SnapView
        description={products[0].priceMessage}
        heading={`R${products[0].price.toString()}`}
        icon={<IoPricetagOutline color="white" size={50} />}
      />
  )
}


const ItemAction =()=>{
 
  const {products, handleAddToCart,handleQuantityChange} = useProductContext()
  const [heartDbValue, setHeartDbValue] = useState(95);
  const [counter, setCounter] = useState(0);
  const RenderHeart = (increment: number) => {
    
   
    return (
      <>
        <FaRegHeart
          size={20}
          className=" group-hover:text-AppPrimary text-AppPop"
        />

        <p className=" group-hover:text-AppPrimary ">{` ${increment}k`}</p>
      </>
    );
  };
  return (
      <div className="  h-[60px]  gap-4 CENTER w-full ">
      <AppButton
        OnClick={() => {
          handleAddToCart(products[0].id)
        }}
      >
        {" "}
        Add to cart
      </AppButton >

      <StatsCounter
        databaseStatsValue={products[0].likes}
        render={RenderHeart}
      />

      <Incrementer
        minimum={-5}
        maximum={10}
        counter={products[0].quantity}
        setCounter={setCounter}
      />
    </div>
  )
}

const Description = ()=>{
  const {products} = useProductContext()
  return (
      <AppParagraph>
     {products[0].description}
    </AppParagraph>
  )
}


export  {ItemAction,Product,ProductImage,ProductDetails,PriceTag, Description}
