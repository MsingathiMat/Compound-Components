"use client"
import React, { useState } from 'react'
import ImageBlock from './ImageBlock'
import SnapView from './SnapView'
import { IoPricetagOutline } from 'react-icons/io5'
import AppParagraph from './AppParagraph'
import AppButton from './AppButton'
import StatsCounter from './StatsCounter'
import Incrementer from './Incrementer'
import { FaRegHeart } from 'react-icons/fa'

const ItemCard = ({children}:{children:React.ReactNode}) => {


   

  return (
    <div className=" CENTER p-6 gap-6 bg-white shadow-md w-[650px] h-[300px] rounded-lg">
        
      {children}

  
    </div>
  )
}

const ItemImage = ()=>{

    return (
      
        <div className=" relative  h-full w-[250px]">
        <ImageBlock label="Nike" fill src="/assets/img.jpg" />
      </div>
    
    )
}

const PriceTag = ()=>{

    return (

        <SnapView
          description="50% interest"
          heading="R45"
          icon={<IoPricetagOutline color="white" size={50} />}
        />
    )
}

const ItemDescription = ()=>{

    return (
        <AppParagraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        printing and typesetting
      </AppParagraph>
    )
}

const ItemAction =()=>{

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
            alert("Please subscribe");
          }}
        >
          {" "}
          Add to cart
        </AppButton>

        <StatsCounter
          databaseStatsValue={heartDbValue}
          render={RenderHeart}
        />

        <Incrementer
          minimum={-5}
          maximum={10}
          counter={counter}
          setCounter={setCounter}
        />
      </div>
    )
}

const ItemDetails = ({children}:{children:React.ReactNode})=>{

   
    return(
        <div className=" CENTER flex-col  h-full flex-1">
        
        {children}
      
      </div>
        
    )
}

//Assigning Components to Item card
ItemCard.ItemImage = ItemImage
ItemCard.ItemDetails = ItemDetails

ItemDetails.PriceTag = PriceTag
ItemDetails.ItemDescription = ItemDescription
ItemDetails.ItemAction = ItemAction



export default ItemCard
