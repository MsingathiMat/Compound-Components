import classNames from "classnames";
import React from "react";

const BoxContainer = ({
  children,
 
  variant,
  className
}: {
  children: React.ReactNode;
 
  variant?: "GRADIENT" | "LIGHT" | "DARK";
  className?:string;
}) => {
  const base = ` CENTER size-[90px] rounded-2xl `;
  const gradient = " bg-gradient-to-t from-AppGradientStart from-10% via-AppGradiantEnd via-30% to-AppGradiantEnd to-90% ";
  const light = " bg-AppPrimary  ";
  const dark = " bg-[#0ea77a]  ";

  const FinalClass = classNames(base + ( variant==="DARK"?dark:variant==="LIGHT"? light:gradient ),className)

  return <div className={FinalClass}>
{children}


  </div>;
};

export default BoxContainer;
