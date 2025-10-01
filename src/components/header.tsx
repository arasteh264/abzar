import React from "react";

import { ImSearch } from "react-icons/im";
import MenuSection from "./menuSection";
export default function header() {
    
  return (
<div className="w-full flex flex-col items-center head-section">
  {/* هدر بالا */}
  <section className="w-full sm:w-[80%]  text-white h-auto md:h-20 flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-4">
    
    {/* لوگو */}

    {/* display: flex
;
    justify-content: space-between;
    width: 100%; */}

    <div className="w-[100%] sm:w-[30%]  flex justify-between sm:justify-center sm:justify-start">
      <img src="/svg/head-logo.svg" alt="head-logo" className="h-12 md:h-auto" />
       <div className="flex sm:hidden    pr-4">
        <button className="bg-white rounded-full p-1.5">
          <img
            src="/svg/basket.svg"
            className="bg-[#fed128] rounded-full p-2 h-9 w-9"
            alt="basket"
          />
        </button>
      </div>
    </div>

    {/* فرم جستجو */}
    <div className="w-full sm:w-[50%] sm:flex sm:justify-center sm:justify-start font-main">
      <form className="bg-[#5064a2] border border-[#ffffff40] rounded-[50px] flex items-center w-full w-[98%] sm:px-4 sm:py-2 px-2  text-sm text-[16px] font-medium">
        <button className="pl-2 text-[#d7dbea]">
          <ImSearch />
        </button>
        <input
          placeholder="چیزی تایپ کنید مثلا دریل..."
          className="h-9 border-0 focus:outline-none w-full placeholder-[#FFFFFF73] text-white bg-transparent"
        />
      </form>
    </div>

    {/* تماس و سبد */}
    <div className="hidden sm:w-full md:w-[30%] sm:flex sm:justify-between sm:justify-end sm:items-center gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <img src="/svg/phone-volume-1-2.svg" alt="phone" className="h-8 w-8" />
        <div className="flex flex-col text-xs md:text-sm text-center md:text-right">
          <span>02166997788</span>
          <span className="text-gray-300">نیاز به مشاوره دارید؟</span>
        </div>
      </div>
      <div className="border-r border-[#FFFFFF38] pr-4">
        <button className="bg-white rounded-full p-1.5">
          <img
            src="/svg/basket.svg"
            className="bg-[#fed128] rounded-full p-1 h-10 w-10"
            alt="basket"
          />
        </button>
      </div>
    </div>
  </section>

  {/* منو (اگر می‌خوای sticky و ریسپانسیو باشد، می‌توانیم بعداً اضافه کنیم) */}
</div>

  );
}
