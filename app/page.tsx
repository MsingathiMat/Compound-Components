"use client";
import React from "react";
import {
  Description,
  ItemAction,
  PriceTag,
  Product,
  ProductDetails,
  ProductImage,
} from "./Components/ProductComponents";
import ItemCard from "./Components/TestCard2";

const Page = () => {
  return (
    <main className=" flex-col gap-4 w-screen h-screen CENTER bg-[#e9e9e9]">
      <ItemCard>
        <ItemCard.ItemImage />
        <ItemCard.ItemDetails>
          <ItemCard.ItemDetails.PriceTag />
          <ItemCard.ItemDetails.ItemAction />
          <ItemCard.ItemDetails.ItemDescription />
        </ItemCard.ItemDetails>
      </ItemCard>

      <Product>
        <ProductImage />
        <ProductDetails>
        <ItemAction />
          <Description />
          <PriceTag />
          
        </ProductDetails>
      </Product>
    </main>
  );
};

export default Page;
