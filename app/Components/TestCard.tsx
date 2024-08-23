"use client";
import React, { useState } from "react";
import ImageBlock from "./ImageBlock";

import { IoPricetagOutline } from "react-icons/io5";
import AppButton from "./AppButton";
import { FaRegHeart, FaThumbsUp } from "react-icons/fa";
import Incrementer from "./Incrementer";
import StatsCounter from "./StatsCounter";
import AppParagraph from "./AppParagraph";
import SnapView from "./SnapView";

const TestCard = () => {
  //Fetch query to get the likes from the database, REGISTER THIS QUERY to tanstack QUERY -- as THUMBQUARY 15
  const [thumbDbValue, setThumbDbValue] = useState(76);

  const [heartDbValue, setHeartDbValue] = useState(95);
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

  const RenderThumb = (increment: number) => {
    return (
      <>
        <FaThumbsUp
          size={20}
          className=" group-hover:text-AppPrimary text-AppPop"
        />

        <p className=" group-hover:text-AppPrimary ">{` ${increment}k`}</p>
      </>
    );
  };

  const [counter, setCounter] = useState(0);
  return (
    <div className=" CENTER p-6 gap-6 bg-white shadow-md w-[650px] h-[300px] rounded-lg">
      <div className=" relative  h-full w-[250px]">
        <ImageBlock label="Nike two" fill src="/assets/img.jpg" />
      </div>

      <div className=" CENTER flex-col  h-full flex-1">
        <SnapView
          description="50% interest"
          heading="R45"
          icon={<IoPricetagOutline color="white" size={50} />}
        />

        <AppParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          printing and typesetting
        </AppParagraph>

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
      </div>
    </div>
  );
};

export default TestCard;
