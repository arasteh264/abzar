import React from "react";

import { ImSearch } from "react-icons/im";
import MenuSection from "./menuSection";
export default function header() {
    
  return (
    <div className="w-full flex flex-col items-center head-section ">
      <section className=" flex items-center text-white pt-3  gap-4 w-[70%]">
        {/* لوگو */}
        <div className="w-[20%]">
          <img src="/svg/head-logo.svg" alt="head-logo" />
        </div>

        {/* {سرچ کردن} */}
        <div className="flex items-center w-[50%] text-right font-main mr-5">
          <form
            action=""
            className="bg-[#5064a2] border border-[1px] border-[#ffffff40] rounded-[50px] flex items-center  w-[98%]  text-right font-main   text-[#5064a2]  px-[30px] pl-[10px] py-[5px]    text-[16px] font-medium"
          >
            <button className="pl-1.5 text-[#d7dbea]">
              <ImSearch />
            </button>
            <input
              placeholder="چیزی تایپ کنید مثلا دریل..."
              className=" h-9 border-0 focus:border-0 focus:outline-none focus:ring-0 w-[100%] placeholder-[#FFFFFF73] text-white"
            />
          </form>
        </div>

        <div className="flex items-center w-[40%] flex justify-end">
          <div className="flex justify-evenly items-center pl-[30px]">
            <div className="flex flex-col items-center">
              <span>02166997788</span>
              <span>نیاز به مشاوره دارید؟</span>
            </div>
            <img src="/svg/phone-volume-1-2.svg" alt="" />
          </div>
          <div className="pr-[30px] pl-0 py-0 border border-r-[1px] border-r-[#FFFFFF38] border-t-0 border-b-0 border-l-0">
            <button className="bg-[#FFFFFF] border-0 rounded-full p-1.5">
              <img
                src="/svg/basket.svg"
                className="bg-[#fed128] rounded-full p-1"
                alt=""
              />
            </button>
          </div>
        </div>
      </section>



   <div className="w-full flex justify-center head-section-part-tow">
            <div className="bg-[#253B8E] pt-9 pb-7 flex items-center justify-center w-full">
              <MenuSection />
            </div>
          </div>

    </div>
  );
}
