"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowLeft } from "react-icons/go";
import { BsPersonCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const box1Ref = useRef<HTMLDivElement | null>(null);
  const box2Ref = useRef<HTMLDivElement | null>(null);
  const box3Ref = useRef<HTMLDivElement | null>(null);
  const box4Ref = useRef<HTMLDivElement | null>(null);
  const box5Ref = useRef<HTMLDivElement | null>(null);
  const box6Ref = useRef<HTMLDivElement | null>(null);

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);

  const checkActive = (
    ref: React.RefObject<HTMLDivElement | null>,
    setActive: (val: boolean) => void
  ): void => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowCenter = window.innerHeight / 2;

    // فقط وقتی دیو تازه وارد مرکز viewport شد رنگش تغییر کند
    if (rect.top < windowCenter && rect.bottom > 0) {
      setActive(true); // فعال می‌کنیم
    }
    // اگر میخوای رنگ برنگردد وقتی خارج شد، این خط را حذف کن
    else {
      setActive(false); // غیرفعال می‌کنیم
    }
  };
  const triggerAnimation = () => {
    const elements = document.querySelectorAll(".animate-target");
    elements.forEach((el) => {
      el.classList.remove("price-discount-anime");

      void (el as HTMLElement).offsetWidth;
      el.classList.add("price-discount-anime");
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      checkActive(box1Ref, setIsActive1);
      checkActive(box2Ref, setIsActive2);
      checkActive(box3Ref, setIsActive3);
      checkActive(box4Ref, setIsActive4);
      checkActive(box5Ref, setIsActive5);
      checkActive(box6Ref, setIsActive6);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // بررسی اولیه

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans  w-full  flex flex-col items-center  text-black text-2xl">
      <div className="flex   items-start justify-between w-full text-white backgound-homepage h-[80vh] pt-[75px]">
        <div className="w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col items-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="20"
              viewBox="0 0 32 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
              <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
            </svg>
            <span className=" font-peyda-bold text-4xl pt-5">
              بزرگترین تولید کننده قطعات الکتریکی
            </span>
            <p className="text-[16px] pt-6 font-peyda-medium">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است ...
            </p>
            <div className="flex items-center pt-8">
              <button className="text-[16px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] font-peyda-medium bg-[#1a3175] hover:bg-white hover:text-[#1a3175] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out">
                مشاهده فروشگاه
              </button>
              <span className="bg-white rounded-[50px] p-2.5 text-[#1a2e77] leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0303 6.46967C9.73744 6.17678 9.26256 6.17678 8.96967 6.46967L3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L8.96967 17.5303C9.26256 17.8232 9.73744 17.8232 10.0303 17.5303C10.3232 17.2374 10.3232 16.7626 10.0303 16.4697L5.56066 12L10.0303 7.53033C10.3232 7.23744 10.3232 6.76256 10.0303 6.46967Z"
                    fill="#1C274C"
                  ></path>
                  <g opacity="0.5">
                    <path
                      d="M6.31066 11.25H14.5C15.4534 11.25 16.8667 11.5298 18.0632 12.3914C19.298 13.2804 20.25 14.7556 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75C19.0858 17.75 18.75 17.4142 18.75 17C18.75 15.2444 18.0353 14.2196 17.1868 13.6087C16.3 12.9702 15.2133 12.75 14.5 12.75L6.31066 12.75L5.56066 12L6.31066 11.25Z"
                      fill="#1C274C"
                    ></path>
                    <path
                      d="M3.80691 11.7129C3.77024 11.8013 3.75 11.8983 3.75 12C3.75 11.9023 3.76897 11.8046 3.80691 11.7129Z"
                      fill="#1C274C"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center pt-7 mainSlider">
            <div className="at-image-container-b">
              <div className="at-ring"></div>
              <div className="at-ring"></div>
              <div className="at-ring"></div>
            </div>
            <Swiper
              className="w-[500px] h-[440px]"
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={triggerAnimation}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className="flex flex-row items-center  content-center relative right-[385px] gap-[10px] bg-[#50689e] w-[23%] p-1.5 rounded-[50px] font-peyda-medium text-lg animate-target">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M6.30464 21.5159C4.24392 19.4551 3.21357 18.4248 2.83017 17.088C2.44678 15.7512 2.77443 14.3313 3.42974 11.4917L3.80764 9.8541C4.35895 7.46508 4.63461 6.27057 5.45258 5.4526C6.27055 4.63463 7.46506 4.35897 9.85408 3.80766L11.4917 3.42976C14.3313 2.77445 15.7511 2.4468 17.088 2.83019C18.4248 3.21358 19.4551 4.24394 21.5158 6.30465L23.9554 8.74416C27.5407 12.3295 29.3333 14.1221 29.3333 16.3498C29.3333 18.5774 27.5407 20.37 23.9554 23.9553L23.9554 23.9554L23.9553 23.9554C20.37 27.5407 18.5774 29.3333 16.3497 29.3333C14.1221 29.3333 12.3295 27.5407 8.74415 23.9554L6.30464 21.5159Z"
                      fill="white"
                    ></path>
                    <path
                      d="M13.4979 9.69513C14.5481 10.7452 14.5481 12.4478 13.4979 13.4979C12.4478 14.548 10.7453 14.548 9.69515 13.4979C8.64503 12.4478 8.64503 10.7452 9.69515 9.69513C10.7453 8.64502 12.4478 8.64502 13.4979 9.69513Z"
                      fill="white"
                    ></path>
                    <path
                      d="M25.4015 16.0686L16.0962 25.3743C15.7057 25.7648 15.0725 25.7648 14.682 25.3743C14.2915 24.9838 14.2915 24.3506 14.682 23.9601L23.9873 14.6544C24.3778 14.2639 25.011 14.2639 25.4015 14.6544C25.7921 15.0449 25.7921 15.6781 25.4015 16.0686Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>20%</span>
                </div>
                <div className="flex flex-row items-center content-center relative top-[350px] gap-[10px] bg-[#50689e] w-[35%] p-1.5 rounded-[50px] font-peyda-medium text-lg animate-target">
                  <span>400,000 تومان</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.6362 29.3333 2.66666 23.3638 2.66666 16C2.66666 8.63621 8.6362 2.66667 16 2.66667C23.3638 2.66667 29.3333 8.63621 29.3333 16Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 7C16.5523 7 17 7.44772 17 8V8.42231C19.1739 8.81156 21 10.4448 21 12.6667C21 13.219 20.5523 13.6667 20 13.6667C19.4477 13.6667 19 13.219 19 12.6667C19 11.7621 18.2479 10.8045 17 10.4633V15.089C19.1739 15.4782 21 17.1115 21 19.3333C21 21.5552 19.1739 23.1884 17 23.5777V24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24V23.5777C12.8261 23.1884 11 21.5552 11 19.3333C11 18.781 11.4477 18.3333 12 18.3333C12.5523 18.3333 13 18.781 13 19.3333C13 20.2379 13.7521 21.1955 15 21.5367V16.911C12.8261 16.5218 11 14.8885 11 12.6667C11 10.4448 12.8261 8.81156 15 8.42231V8C15 7.44772 15.4477 7 16 7ZM15 10.4633C13.7521 10.8045 13 11.7621 13 12.6667C13 13.5713 13.7521 14.5288 15 14.87V10.4633ZM19 19.3333C19 18.4287 18.2479 17.4712 17 17.13V21.5367C18.2479 21.1955 19 20.2379 19 19.3333Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="bottom-[70px] relative animate-target">
                  <img
                    src="/image/drile1.png"
                    className="w-[5%] w-[80px] h-[80px] opacity-80   "
                    alt=""
                  />
                </span>
                <span className="relative top-[168px] right-[420px] animate-target">
                  <img
                    src="/image/drile1.png"
                    className="w-[5%] w-[80px] h-[80px] opacity-80  "
                    alt=""
                  />
                </span>
                <span className="relative bottom-[252px] right-[30px]">
                  <img
                    src="/image/drile1.png"
                    className="w-[85%] mainDrille"
                    alt=""
                  />
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-row items-center content-center relative right-[385px] gap-[10px] bg-[#50689e] w-[23%] p-1.5 rounded-[50px] font-peyda-medium text-lg animate-target">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      d="M6.30464 21.5159C4.24392 19.4551 3.21357 18.4248 2.83017 17.088C2.44678 15.7512 2.77443 14.3313 3.42974 11.4917L3.80764 9.8541C4.35895 7.46508 4.63461 6.27057 5.45258 5.4526C6.27055 4.63463 7.46506 4.35897 9.85408 3.80766L11.4917 3.42976C14.3313 2.77445 15.7511 2.4468 17.088 2.83019C18.4248 3.21358 19.4551 4.24394 21.5158 6.30465L23.9554 8.74416C27.5407 12.3295 29.3333 14.1221 29.3333 16.3498C29.3333 18.5774 27.5407 20.37 23.9554 23.9553L23.9554 23.9554L23.9553 23.9554C20.37 27.5407 18.5774 29.3333 16.3497 29.3333C14.1221 29.3333 12.3295 27.5407 8.74415 23.9554L6.30464 21.5159Z"
                      fill="white"
                    ></path>
                    <path
                      d="M13.4979 9.69513C14.5481 10.7452 14.5481 12.4478 13.4979 13.4979C12.4478 14.548 10.7453 14.548 9.69515 13.4979C8.64503 12.4478 8.64503 10.7452 9.69515 9.69513C10.7453 8.64502 12.4478 8.64502 13.4979 9.69513Z"
                      fill="white"
                    ></path>
                    <path
                      d="M25.4015 16.0686L16.0962 25.3743C15.7057 25.7648 15.0725 25.7648 14.682 25.3743C14.2915 24.9838 14.2915 24.3506 14.682 23.9601L23.9873 14.6544C24.3778 14.2639 25.011 14.2639 25.4015 14.6544C25.7921 15.0449 25.7921 15.6781 25.4015 16.0686Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>20%</span>
                </div>
                <div className="flex flex-row items-center content-center relative top-[350px] gap-[10px] bg-[#50689e] w-[35%] p-1.5 rounded-[50px] font-peyda-medium text-lg  animate-target">
                  <span>400,000 تومان</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333C8.6362 29.3333 2.66666 23.3638 2.66666 16C2.66666 8.63621 8.6362 2.66667 16 2.66667C23.3638 2.66667 29.3333 8.63621 29.3333 16Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 7C16.5523 7 17 7.44772 17 8V8.42231C19.1739 8.81156 21 10.4448 21 12.6667C21 13.219 20.5523 13.6667 20 13.6667C19.4477 13.6667 19 13.219 19 12.6667C19 11.7621 18.2479 10.8045 17 10.4633V15.089C19.1739 15.4782 21 17.1115 21 19.3333C21 21.5552 19.1739 23.1884 17 23.5777V24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24V23.5777C12.8261 23.1884 11 21.5552 11 19.3333C11 18.781 11.4477 18.3333 12 18.3333C12.5523 18.3333 13 18.781 13 19.3333C13 20.2379 13.7521 21.1955 15 21.5367V16.911C12.8261 16.5218 11 14.8885 11 12.6667C11 10.4448 12.8261 8.81156 15 8.42231V8C15 7.44772 15.4477 7 16 7ZM15 10.4633C13.7521 10.8045 13 11.7621 13 12.6667C13 13.5713 13.7521 14.5288 15 14.87V10.4633ZM19 19.3333C19 18.4287 18.2479 17.4712 17 17.13V21.5367C18.2479 21.1955 19 20.2379 19 19.3333Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <span className="bottom-[70px] relative animate-target">
                  <img
                    src="/image/drile2.png"
                    className="w-[5%] w-[80px] h-[80px] opacity-80   "
                    alt=""
                  />
                </span>
                <span className="relative top-[168px] right-[420px]  animate-target">
                  <img
                    src="/image/drile2.png"
                    className="w-[5%] w-[80px] h-[80px] opacity-80  "
                    alt=""
                  />
                </span>
                <span className="relative bottom-[252px] right-[30px]">
                  <img
                    src="/image/drile2.png"
                    className="w-[85%] mainDrille"
                    alt=""
                  />
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-20 pb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
          <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
        </svg>
        <h1 className="text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
          خدماتی که به شما ارائه میدهیم
        </h1>
        <p className="text-[16px] pt-6 font-peyda-medium text-gray-500">
          لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ است ...
        </p>
      </div>

      <div className="w-[70%] flex items-center justify-between pb-20">
        <div
          className="group flex flex-col items-center w-[20%] border-2 border-white rounded-[31px] shadow-[0_16px_32px_0_#2B37421A] p-8 ml-6 
                hover:bg-gradient-to-b hover:from-[#666666] hover:to-[#222222]"
        >
          <div
            className="bg-[#253b8e] p-[17px] rounded-[50px] 
                  group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M43.999 25.635L43.182 24.818C41.4246 23.0607 38.5754 23.0607 36.818 24.818L35.2151 26.4209C34.5756 24.7146 32.9296 23.5 31 23.5C28.5147 23.5 26.5 25.5147 26.5 28V31.5277C25.5202 31.6366 24.5693 32.0667 23.818 32.818C22.0607 34.5754 22.0607 37.4246 23.818 39.182L24.636 40H20C12.4575 40 8.68629 40 6.34315 37.6569C4 35.3137 4 31.5425 4 24C4 23.1161 4.00377 20.7841 4.00754 20H44C44.0038 20.7841 44 23.1161 44 24C44 24.5659 44 25.1106 43.999 25.635Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M10.5 32C10.5 31.1716 11.1716 30.5 12 30.5H20C20.8284 30.5 21.5 31.1716 21.5 32C21.5 32.8284 20.8284 33.5 20 33.5H12C11.1716 33.5 10.5 32.8284 10.5 32Z"
                fill="white"
              ></path>
              <path
                d="M19.9897 8H28.0103C35.5722 8 39.3532 8 41.7024 10.2316C43.3938 11.8383 43.8674 14.1501 44 18V20H4V18C4.1326 14.1501 4.60619 11.8383 6.29762 10.2316C8.64681 8 12.4278 8 19.9897 8Z"
                fill="white"
              ></path>
              <path
                d="M38.9393 26.9393C39.5251 26.3536 40.4749 26.3536 41.0607 26.9393L45.0607 30.9393C45.6465 31.5251 45.6465 32.4749 45.0607 33.0607C44.4749 33.6464 43.5251 33.6464 42.9393 33.0607L41.5 31.6213V40C41.5 40.8284 40.8284 41.5 40 41.5C39.1716 41.5 38.5 40.8284 38.5 40V31.6213L37.0607 33.0607C36.4749 33.6464 35.5251 33.6464 34.9393 33.0607C34.3536 32.4749 34.3536 31.5251 34.9393 30.9393L38.9393 26.9393Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 26.5C31.8284 26.5 32.5 27.1716 32.5 28V36.3787L33.9393 34.9393C34.5251 34.3536 35.4749 34.3536 36.0607 34.9393C36.6464 35.5251 36.6464 36.4749 36.0607 37.0607L32.0607 41.0607C31.4749 41.6464 30.5251 41.6464 29.9393 41.0607L25.9393 37.0607C25.3536 36.4749 25.3536 35.5251 25.9393 34.9393C26.5251 34.3536 27.4749 34.3536 28.0607 34.9393L29.5 36.3787V28C29.5 27.1716 30.1716 26.5 31 26.5Z"
                fill="white"
              ></path>
            </svg>
          </div>

          <span className="text-[16px] pt-6 font-peyda-bold text-[#253B8E] group-hover:text-white transition-colors duration-300 ease-in-out">
            30 روز بازگشت وجه
          </span>

          <button
            className="bg-[#efefef] p-[10px] leading-none rounded-[8px] mt-7 
                     group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <GoArrowLeft
              className="bg-[#253e8b] text-[#ffffff] rounded-[5px] w-[20px] h-[20px] 
                 group-hover:bg-white group-hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          </button>
        </div>
        <div
          className="group flex flex-col items-center w-[20%] border-2 border-white rounded-[31px] shadow-[0_16px_32px_0_#2B37421A] p-8 ml-6 
                hover:bg-gradient-to-b hover:from-[#666666] hover:to-[#222222]"
        >
          <div
            className="bg-[#253b8e] p-[17px] rounded-[50px] 
                  group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M43.999 25.635L43.182 24.818C41.4246 23.0607 38.5754 23.0607 36.818 24.818L35.2151 26.4209C34.5756 24.7146 32.9296 23.5 31 23.5C28.5147 23.5 26.5 25.5147 26.5 28V31.5277C25.5202 31.6366 24.5693 32.0667 23.818 32.818C22.0607 34.5754 22.0607 37.4246 23.818 39.182L24.636 40H20C12.4575 40 8.68629 40 6.34315 37.6569C4 35.3137 4 31.5425 4 24C4 23.1161 4.00377 20.7841 4.00754 20H44C44.0038 20.7841 44 23.1161 44 24C44 24.5659 44 25.1106 43.999 25.635Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M10.5 32C10.5 31.1716 11.1716 30.5 12 30.5H20C20.8284 30.5 21.5 31.1716 21.5 32C21.5 32.8284 20.8284 33.5 20 33.5H12C11.1716 33.5 10.5 32.8284 10.5 32Z"
                fill="white"
              ></path>
              <path
                d="M19.9897 8H28.0103C35.5722 8 39.3532 8 41.7024 10.2316C43.3938 11.8383 43.8674 14.1501 44 18V20H4V18C4.1326 14.1501 4.60619 11.8383 6.29762 10.2316C8.64681 8 12.4278 8 19.9897 8Z"
                fill="white"
              ></path>
              <path
                d="M38.9393 26.9393C39.5251 26.3536 40.4749 26.3536 41.0607 26.9393L45.0607 30.9393C45.6465 31.5251 45.6465 32.4749 45.0607 33.0607C44.4749 33.6464 43.5251 33.6464 42.9393 33.0607L41.5 31.6213V40C41.5 40.8284 40.8284 41.5 40 41.5C39.1716 41.5 38.5 40.8284 38.5 40V31.6213L37.0607 33.0607C36.4749 33.6464 35.5251 33.6464 34.9393 33.0607C34.3536 32.4749 34.3536 31.5251 34.9393 30.9393L38.9393 26.9393Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 26.5C31.8284 26.5 32.5 27.1716 32.5 28V36.3787L33.9393 34.9393C34.5251 34.3536 35.4749 34.3536 36.0607 34.9393C36.6464 35.5251 36.6464 36.4749 36.0607 37.0607L32.0607 41.0607C31.4749 41.6464 30.5251 41.6464 29.9393 41.0607L25.9393 37.0607C25.3536 36.4749 25.3536 35.5251 25.9393 34.9393C26.5251 34.3536 27.4749 34.3536 28.0607 34.9393L29.5 36.3787V28C29.5 27.1716 30.1716 26.5 31 26.5Z"
                fill="white"
              ></path>
            </svg>
          </div>

          <span className="text-[16px] pt-6 font-peyda-bold text-[#253B8E] group-hover:text-white transition-colors duration-300 ease-in-out">
            30 روز بازگشت وجه
          </span>

          <button
            className="bg-[#efefef] p-[10px] leading-none rounded-[8px] mt-7 
                     group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <GoArrowLeft
              className="bg-[#253e8b] text-[#ffffff] rounded-[5px] w-[20px] h-[20px] 
                 group-hover:bg-white group-hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          </button>
        </div>
        <div
          className="group flex flex-col items-center w-[20%] border-2 border-white rounded-[31px] shadow-[0_16px_32px_0_#2B37421A] p-8 ml-6 
                hover:bg-gradient-to-b hover:from-[#666666] hover:to-[#222222]"
        >
          <div
            className="bg-[#253b8e] p-[17px] rounded-[50px] 
                  group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M43.999 25.635L43.182 24.818C41.4246 23.0607 38.5754 23.0607 36.818 24.818L35.2151 26.4209C34.5756 24.7146 32.9296 23.5 31 23.5C28.5147 23.5 26.5 25.5147 26.5 28V31.5277C25.5202 31.6366 24.5693 32.0667 23.818 32.818C22.0607 34.5754 22.0607 37.4246 23.818 39.182L24.636 40H20C12.4575 40 8.68629 40 6.34315 37.6569C4 35.3137 4 31.5425 4 24C4 23.1161 4.00377 20.7841 4.00754 20H44C44.0038 20.7841 44 23.1161 44 24C44 24.5659 44 25.1106 43.999 25.635Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M10.5 32C10.5 31.1716 11.1716 30.5 12 30.5H20C20.8284 30.5 21.5 31.1716 21.5 32C21.5 32.8284 20.8284 33.5 20 33.5H12C11.1716 33.5 10.5 32.8284 10.5 32Z"
                fill="white"
              ></path>
              <path
                d="M19.9897 8H28.0103C35.5722 8 39.3532 8 41.7024 10.2316C43.3938 11.8383 43.8674 14.1501 44 18V20H4V18C4.1326 14.1501 4.60619 11.8383 6.29762 10.2316C8.64681 8 12.4278 8 19.9897 8Z"
                fill="white"
              ></path>
              <path
                d="M38.9393 26.9393C39.5251 26.3536 40.4749 26.3536 41.0607 26.9393L45.0607 30.9393C45.6465 31.5251 45.6465 32.4749 45.0607 33.0607C44.4749 33.6464 43.5251 33.6464 42.9393 33.0607L41.5 31.6213V40C41.5 40.8284 40.8284 41.5 40 41.5C39.1716 41.5 38.5 40.8284 38.5 40V31.6213L37.0607 33.0607C36.4749 33.6464 35.5251 33.6464 34.9393 33.0607C34.3536 32.4749 34.3536 31.5251 34.9393 30.9393L38.9393 26.9393Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 26.5C31.8284 26.5 32.5 27.1716 32.5 28V36.3787L33.9393 34.9393C34.5251 34.3536 35.4749 34.3536 36.0607 34.9393C36.6464 35.5251 36.6464 36.4749 36.0607 37.0607L32.0607 41.0607C31.4749 41.6464 30.5251 41.6464 29.9393 41.0607L25.9393 37.0607C25.3536 36.4749 25.3536 35.5251 25.9393 34.9393C26.5251 34.3536 27.4749 34.3536 28.0607 34.9393L29.5 36.3787V28C29.5 27.1716 30.1716 26.5 31 26.5Z"
                fill="white"
              ></path>
            </svg>
          </div>

          <span className="text-[16px] pt-6 font-peyda-bold text-[#253B8E] group-hover:text-white transition-colors duration-300 ease-in-out">
            30 روز بازگشت وجه
          </span>

          <button
            className="bg-[#efefef] p-[10px] leading-none rounded-[8px] mt-7 
                     group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <GoArrowLeft
              className="bg-[#253e8b] text-[#ffffff] rounded-[5px] w-[20px] h-[20px] 
                 group-hover:bg-white group-hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          </button>
        </div>
        <div
          className="group flex flex-col items-center w-[20%] border-2 border-white rounded-[31px] shadow-[0_16px_32px_0_#2B37421A] p-8 ml-6 
                hover:bg-gradient-to-b hover:from-[#666666] hover:to-[#222222]"
        >
          <div
            className="bg-[#253b8e] p-[17px] rounded-[50px] 
                  group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M43.999 25.635L43.182 24.818C41.4246 23.0607 38.5754 23.0607 36.818 24.818L35.2151 26.4209C34.5756 24.7146 32.9296 23.5 31 23.5C28.5147 23.5 26.5 25.5147 26.5 28V31.5277C25.5202 31.6366 24.5693 32.0667 23.818 32.818C22.0607 34.5754 22.0607 37.4246 23.818 39.182L24.636 40H20C12.4575 40 8.68629 40 6.34315 37.6569C4 35.3137 4 31.5425 4 24C4 23.1161 4.00377 20.7841 4.00754 20H44C44.0038 20.7841 44 23.1161 44 24C44 24.5659 44 25.1106 43.999 25.635Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M10.5 32C10.5 31.1716 11.1716 30.5 12 30.5H20C20.8284 30.5 21.5 31.1716 21.5 32C21.5 32.8284 20.8284 33.5 20 33.5H12C11.1716 33.5 10.5 32.8284 10.5 32Z"
                fill="white"
              ></path>
              <path
                d="M19.9897 8H28.0103C35.5722 8 39.3532 8 41.7024 10.2316C43.3938 11.8383 43.8674 14.1501 44 18V20H4V18C4.1326 14.1501 4.60619 11.8383 6.29762 10.2316C8.64681 8 12.4278 8 19.9897 8Z"
                fill="white"
              ></path>
              <path
                d="M38.9393 26.9393C39.5251 26.3536 40.4749 26.3536 41.0607 26.9393L45.0607 30.9393C45.6465 31.5251 45.6465 32.4749 45.0607 33.0607C44.4749 33.6464 43.5251 33.6464 42.9393 33.0607L41.5 31.6213V40C41.5 40.8284 40.8284 41.5 40 41.5C39.1716 41.5 38.5 40.8284 38.5 40V31.6213L37.0607 33.0607C36.4749 33.6464 35.5251 33.6464 34.9393 33.0607C34.3536 32.4749 34.3536 31.5251 34.9393 30.9393L38.9393 26.9393Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 26.5C31.8284 26.5 32.5 27.1716 32.5 28V36.3787L33.9393 34.9393C34.5251 34.3536 35.4749 34.3536 36.0607 34.9393C36.6464 35.5251 36.6464 36.4749 36.0607 37.0607L32.0607 41.0607C31.4749 41.6464 30.5251 41.6464 29.9393 41.0607L25.9393 37.0607C25.3536 36.4749 25.3536 35.5251 25.9393 34.9393C26.5251 34.3536 27.4749 34.3536 28.0607 34.9393L29.5 36.3787V28C29.5 27.1716 30.1716 26.5 31 26.5Z"
                fill="white"
              ></path>
            </svg>
          </div>

          <span className="text-[16px] pt-6 font-peyda-bold text-[#253B8E] group-hover:text-white transition-colors duration-300 ease-in-out">
            30 روز بازگشت وجه
          </span>

          <button
            className="bg-[#efefef] p-[10px] leading-none rounded-[8px] mt-7 
                     group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <GoArrowLeft
              className="bg-[#253e8b] text-[#ffffff] rounded-[5px] w-[20px] h-[20px] 
                 group-hover:bg-white group-hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          </button>
        </div>
        <div
          className="group flex flex-col items-center w-[20%] border-2 border-white rounded-[31px] shadow-[0_16px_32px_0_#2B37421A] p-8 ml-6 
                hover:bg-gradient-to-b hover:from-[#666666] hover:to-[#222222]"
        >
          <div
            className="bg-[#253b8e] p-[17px] rounded-[50px] 
                  group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M43.999 25.635L43.182 24.818C41.4246 23.0607 38.5754 23.0607 36.818 24.818L35.2151 26.4209C34.5756 24.7146 32.9296 23.5 31 23.5C28.5147 23.5 26.5 25.5147 26.5 28V31.5277C25.5202 31.6366 24.5693 32.0667 23.818 32.818C22.0607 34.5754 22.0607 37.4246 23.818 39.182L24.636 40H20C12.4575 40 8.68629 40 6.34315 37.6569C4 35.3137 4 31.5425 4 24C4 23.1161 4.00377 20.7841 4.00754 20H44C44.0038 20.7841 44 23.1161 44 24C44 24.5659 44 25.1106 43.999 25.635Z"
                  fill="white"
                ></path>
              </g>
              <path
                d="M10.5 32C10.5 31.1716 11.1716 30.5 12 30.5H20C20.8284 30.5 21.5 31.1716 21.5 32C21.5 32.8284 20.8284 33.5 20 33.5H12C11.1716 33.5 10.5 32.8284 10.5 32Z"
                fill="white"
              ></path>
              <path
                d="M19.9897 8H28.0103C35.5722 8 39.3532 8 41.7024 10.2316C43.3938 11.8383 43.8674 14.1501 44 18V20H4V18C4.1326 14.1501 4.60619 11.8383 6.29762 10.2316C8.64681 8 12.4278 8 19.9897 8Z"
                fill="white"
              ></path>
              <path
                d="M38.9393 26.9393C39.5251 26.3536 40.4749 26.3536 41.0607 26.9393L45.0607 30.9393C45.6465 31.5251 45.6465 32.4749 45.0607 33.0607C44.4749 33.6464 43.5251 33.6464 42.9393 33.0607L41.5 31.6213V40C41.5 40.8284 40.8284 41.5 40 41.5C39.1716 41.5 38.5 40.8284 38.5 40V31.6213L37.0607 33.0607C36.4749 33.6464 35.5251 33.6464 34.9393 33.0607C34.3536 32.4749 34.3536 31.5251 34.9393 30.9393L38.9393 26.9393Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 26.5C31.8284 26.5 32.5 27.1716 32.5 28V36.3787L33.9393 34.9393C34.5251 34.3536 35.4749 34.3536 36.0607 34.9393C36.6464 35.5251 36.6464 36.4749 36.0607 37.0607L32.0607 41.0607C31.4749 41.6464 30.5251 41.6464 29.9393 41.0607L25.9393 37.0607C25.3536 36.4749 25.3536 35.5251 25.9393 34.9393C26.5251 34.3536 27.4749 34.3536 28.0607 34.9393L29.5 36.3787V28C29.5 27.1716 30.1716 26.5 31 26.5Z"
                fill="white"
              ></path>
            </svg>
          </div>

          <span className="text-[16px] pt-6 font-peyda-bold text-[#253B8E] group-hover:text-white transition-colors duration-300 ease-in-out">
            30 روز بازگشت وجه
          </span>

          <button
            className="bg-[#efefef] p-[10px] leading-none rounded-[8px] mt-7 
                     group-hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
          >
            <GoArrowLeft
              className="bg-[#253e8b] text-[#ffffff] rounded-[5px] w-[20px] h-[20px] 
                 group-hover:bg-white group-hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          </button>
        </div>
      </div>

      <div className="w-[70%] flex items-center justify-between pb-20">
        <div className="w-[50%]">
          <img src="/image/main-image1.png" alt="" />
          <div
            className=" modal-image absolute bottom-[-138%] left-[51%] flex items-center justify-center "
            onClick={() => setIsOpen(true)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="52"
                viewBox="0 0 51 52"
                fill="none"
              >
                <rect
                  width="51"
                  height="52"
                  rx="25.5"
                  transform="matrix(-1 0 0 1 51 0)"
                  fill="#FED128"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 26C16 24.9648 16.5305 23.9295 17.5914 23.3526L30.4034 16.3855C32.4656 15.264 35 16.7237 35 19.0329L35 26H16Z"
                  fill="white"
                ></path>
                <path
                  opacity="0.5"
                  d="M30.4034 35.6145L17.5914 28.6474C16.5305 28.0705 16 27.0352 16 26H35L35 32.9671C35 35.2763 32.4656 36.736 30.4034 35.6145Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="w-[50%] flex flex-col ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
            <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
          </svg>
          <h1 className="text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
            درباره شرکت آریا بیشتر بدانید
          </h1>
          <span className="text-justify leading-[40px] text-[16px] pt-4 font-peyda-medium text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد.
          </span>

          <div className="flex w-[100%] flex-col pt-8">
            <div className="flex justify-between w-[100%]">
              <div className="flex">
                <span className=" pl-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#FED128"
                    ></path>
                  </svg>{" "}
                </span>
                <div className="flex flex-col width-[33%]">
                  <h1 className="text-[16px] font-extrabold font-peyda-bold text-[#324db1]">
                    تجهیزات و فناوری
                  </h1>
                  <span className="text-justify  text-[14px] pt-4 font-peyda-medium text-gray-500">
                    کاهش هزینه‌ها و افزایش
                  </span>
                  <span className="text-justify  text-[14px] pt-4 font-peyda-medium text-gray-500">
                    سرعت تولید.
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className=" pl-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#FED128"
                    ></path>
                  </svg>{" "}
                </span>
                <div className="flex flex-col width-[33%]">
                  <h1 className="text-[16px] font-extrabold font-peyda-bold text-[#324db1]">
                    تجهیزات و فناوری
                  </h1>
                  <span className="text-justify  text-[14px] pt-4 font-peyda-medium text-gray-500">
                    کاهش هزینه‌ها و افزایش
                  </span>
                  <span className="text-justify  text-[14px] pt-4 font-peyda-medium text-gray-500">
                    سرعت تولید.
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className=" pl-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#FED128"
                    ></path>
                  </svg>{" "}
                </span>
                <div className="flex flex-col width-[33%]">
                  <h1 className="text-[16px] font-extrabold font-peyda-bold text-[#324db1]">
                    تجهیزات و فناوری
                  </h1>
                  <span className="text-justify  text-[14px] pt-4 font-peyda-medium text-gray-500">
                    کاهش هزینه‌ها و افزایش
                  </span>
                  <span className="text-justify  text-[14px] pt-4 font-peyda-medium text-gray-500">
                    سرعت تولید.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-7 border-t border-t-[#253B8E1A] border-b border-b-[#253B8E1A] pt-4 pb-4">
              <div className="flex items-center">
                <button className="text-[15px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] text-white font-peyda-medium bg-[#1a3175] hover:bg-[#FED128] hover:text-[#1a3175] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out">
                  بیشتر بدانید
                </button>
                <span className="bg-[#FED128] text-white rounded-[50px] p-2.5  leading-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0303 6.46967C9.73744 6.17678 9.26256 6.17678 8.96967 6.46967L3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L8.96967 17.5303C9.26256 17.8232 9.73744 17.8232 10.0303 17.5303C10.3232 17.2374 10.3232 16.7626 10.0303 16.4697L5.56066 12L10.0303 7.53033C10.3232 7.23744 10.3232 6.76256 10.0303 6.46967Z"
                      fill="#1C274C"
                    ></path>
                    <g opacity="0.5">
                      <path
                        d="M6.31066 11.25H14.5C15.4534 11.25 16.8667 11.5298 18.0632 12.3914C19.298 13.2804 20.25 14.7556 20.25 17C20.25 17.4142 19.9142 17.75 19.5 17.75C19.0858 17.75 18.75 17.4142 18.75 17C18.75 15.2444 18.0353 14.2196 17.1868 13.6087C16.3 12.9702 15.2133 12.75 14.5 12.75L6.31066 12.75L5.56066 12L6.31066 11.25Z"
                        fill="#1C274C"
                      ></path>
                      <path
                        d="M3.80691 11.7129C3.77024 11.8013 3.75 11.8983 3.75 12C3.75 11.9023 3.76897 11.8046 3.80691 11.7129Z"
                        fill="#1C274C"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="flex items-center w-[45%] justify-between">
                <div className="flex flex-col items-center border-l border-l-[#253B8E1A] pl-8">
                  <span className="text-[14px] text-[#253B8E7D] font-peyda-medium ">
                    مدیر عامل شرکت آریا تجارت:
                  </span>
                  <span className="text-[16px] text-[#1a2e77] font-peyda-medium pt-3">
                    مهنـدس محمدرضا برزگر
                  </span>
                </div>

                <div>
                  <img src="/image/emza.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-20 pb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
          <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
        </svg>
        <h1 className=" text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
          پروژه های موفق ما
        </h1>
        <p className="text-[16px] pt-6 font-peyda-medium text-gray-500">
          لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ است ...
        </p>
      </div>

      <div className="w-[70%]">
        <Swiper
          className="w-full h-[440px]"
          slidesPerView={3.8} // نمایش ۳ اسلاید در یک بار
          spaceBetween={20} // فاصله بین اسلایدها
          centeredSlides={true} // اسلاید وسط کامل نمایش داده شود
          grabCursor={true} // فعال‌سازی قابلیت کشیدن اسلاید
          loop={true}
          pagination={{
            clickable: true, // فعال کردن کلیک روی نقاط
          }}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1, // در موبایل فقط ۱ اسلاید نمایش داده می‌شود
          //   },
          //   768: {
          //     slidesPerView: 2, // در تبلت ۲ اسلاید نمایش داده می‌شود
          //   },
          //   1024: {
          //     slidesPerView: 3, // در دسکتاپ ۳ اسلاید نمایش داده می‌شود
          //   },
          // }}
          onSlideChange={triggerAnimation}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-[315px] h-[380px] overflow-hidden rounded-xl group cursor-pointer mx-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-[rgb(37,59,142,0.6)] z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-white">
                <h6 className="text-lg font-peyda-bold mb-2 ">
                  پروژه ساخت دریل بتنی
                </h6>

                <div className="text-sm space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute bottom-[88px] right-[270px] bg-[#FED128] text-white rounded-[50px] p-1.5  leading-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z"
                        fill="white"
                      ></path>
                      <path
                        d="M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مدت انجام:</span>
                    <span className="font-peyda-bold">7 ماه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">موضوع:</span>
                    <span className="font-peyda-bold">ساخت و تولید</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-peyda-bold">مقدار سفارشی:</span>
                    <span className="font-peyda-bold">سفارشی دوم</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="text-[15px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] text-[#464646] font-peyda-medium bg-gradient-to-b from-[#F5F6F7] to-[#FFFFFF] shadow-[0_16px_32px_0_rgba(43,55,66,.1)] hover:bg-white bg-opacity-0 bg-gradient-radial hover:text-[#464646] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out">
        مشاهده همه پروژه ها
      </button>

      <div className="w-[70%] h-[148px] bg-[#253B8E] bg-opacity-0 flex justify-between rounded-[20px] pr-7  mt-30">
        <div className="flex items-center">
          <div>
            <h1 className="font-peyda-medium text-[25px] text-white">
              کاتالوگ انواع محصولات شرکت آریا
            </h1>
            <span className="font-peyda-medium text-[15px] text-white">
              لیست کامل محصولات آریا تجارت به صورت کاتالوگ
            </span>
          </div>
          <div className="flex flex-col gap-5 pr-20">
            <button className="text-[15px]  pt-[14px] pr-[30px] pb-[14px] pl-[30px] text-[#464646] font-peyda-medium bg-[#fed128] shadow-[0_16px_32px_0_rgba(43,55,66,.1)] hover:bg-white bg-opacity-0 bg-gradient-radial hover:text-[#464646] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out">
              مشاهده محصولات
            </button>
            <button className="text-[15px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] text-[#464646] font-peyda-medium bg-gradient-to-b from-[#F5F6F7] to-[#FFFFFF] shadow-[0_16px_32px_0_rgba(43,55,66,.1)] hover: bg-[#fed128]  hover:text-[#464646] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out">
              دانلود نسخه PDF
            </button>
          </div>
        </div>
        <div className="flex">
          <img
            src="/image/majale.png"
            className="w-[93%] h-[135%] relative top-[-35px] right-[-60px] z-10"
            alt=""
          />
          <div className="at-image-container-b-slide">
            <div className="at-ring"></div>
            <div className="at-ring"></div>
            <div className="at-ring"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-30 pb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
          <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
        </svg>
        <h1 className=" text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
          محصولات پرفروش ما
        </h1>
        <p className="text-[16px] pt-6 font-peyda-medium text-gray-500">
          لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ است ...
        </p>
      </div>

      <div className=" w-[70%]  flex  relative mt-10 h-full mb-10">
        <button
          className="swiper-button-prev absolute !left-[-50px]  -translate-y-1/2 z-10 p-2  text-white rounded-full
          rounded-[50px] border border-white 
         bg-gradient-to-b from-[#f5f6f7] to-[#ffffff] 
         transition ease-in-out duration-300 
         pt-[10px] pr-[7px] pb-[7px] pl-[7px]
        "
        >
          <GrFormPrevious />
        </button>
        <button className="swiper-button-next  absolute !right-[-50px] -translate-y-1/2 z-10 p-2  text-white rounded-full   bg-gradient-to-b from-[#f5f6f7] to-[#ffffff]">
          <GrFormNext />
        </button>
        <Swiper
          className="w-full "
          slidesPerView={4.9} // نمایش ۳ اسلاید در یک بار
          spaceBetween={0} // فاصله بین اسلایدها
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          grabCursor={true} // فعال‌سازی قابلیت کشیدن اسلاید
          loop={true}
          // pagination={{
          //   clickable: true, // فعال کردن کلیک روی نقاط
          // }}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1, // در موبایل فقط ۱ اسلاید نمایش داده می‌شود
          //   },
          //   768: {
          //     slidesPerView: 2, // در تبلت ۲ اسلاید نمایش داده می‌شود
          //   },
          //   1024: {
          //     slidesPerView: 3, // در دسکتاپ ۳ اسلاید نمایش داده می‌شود
          //   },
          // }}
          onSlideChange={triggerAnimation}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        className="text-[15px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] mt-10
             text-[#464646] font-peyda-medium bg-gradient-to-b from-[#F5F6F7] to-[#FFFFFF] shadow-[0_16px_32px_0_rgba(43,55,66,.1)] hover:bg-white bg-opacity-0 bg-gradient-radial hover:text-[#464646] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out"
      >
        مشاهده همه محصولات
      </button>

      <div className="flex flex-col items-center justify-center pt-30 pb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
          <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
        </svg>
        <h1 className=" text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
          جدید ترین محصولات
        </h1>
        <p className="text-[16px] pt-6 font-peyda-medium text-gray-500">
          لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ است ...
        </p>
      </div>

      <div className=" w-[70%]  flex  relative mt-10 h-full mb-10">
        <button
          className="swiper-button-prev absolute !left-[-50px]  -translate-y-1/2 z-10 p-2  text-white rounded-full
          rounded-[50px] border border-white 
         bg-gradient-to-b from-[#f5f6f7] to-[#ffffff] 
         transition ease-in-out duration-300 
         pt-[10px] pr-[7px] pb-[7px] pl-[7px]
        "
        >
          <GrFormPrevious />
        </button>
        <button className="swiper-button-next  absolute !right-[-50px] -translate-y-1/2 z-10 p-2  text-white rounded-full   bg-gradient-to-b from-[#f5f6f7] to-[#ffffff]">
          <GrFormNext />
        </button>
        <Swiper
          className="w-full "
          slidesPerView={4.9} // نمایش ۳ اسلاید در یک بار
          spaceBetween={0} // فاصله بین اسلایدها
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          grabCursor={true} // فعال‌سازی قابلیت کشیدن اسلاید
          loop={true}
          // pagination={{
          //   clickable: true, // فعال کردن کلیک روی نقاط
          // }}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1, // در موبایل فقط ۱ اسلاید نمایش داده می‌شود
          //   },
          //   768: {
          //     slidesPerView: 2, // در تبلت ۲ اسلاید نمایش داده می‌شود
          //   },
          //   1024: {
          //     slidesPerView: 3, // در دسکتاپ ۳ اسلاید نمایش داده می‌شود
          //   },
          // }}
          onSlideChange={triggerAnimation}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center w-[236px] rounded-[24px] p-3 border border-[#ededed]  bg-[#ffffff] min-h-[330px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden  p-[20px] bg-[#f6f6f6] relative bottom-[46px]">
                <span className="text-center block rounded-[60px]">
                  <img
                    src="https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg"
                    alt="دستگاه برش cwa5qa"
                    className="rounded-[20px]"
                  />
                </span>
              </div>

              <span className="text-gray-800 font-peyda-medium">
                دستگاه برش cwa5qa
              </span>

              <div className="text-xs text-gray-500 mt-1 font-peyda-medium">
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  ابزار صنعتی
                </span>
                <span className="pl-2 pr-2 text-[#ccc3]">|</span>
                <span className="text-[10px] pt-6 font-peyda-medium text-[#848484]">
                  بتن شکن
                </span>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-800  w-full flex  items-center justify-between">
                <button
                  className="bg-[#253e8b] p-[10px] leading-none rounded-[60px]  
             group hover:bg-yellow-400 transition-colors duration-300 ease-in-out"
                >
                  <RiShoppingCart2Line
                    className="text-white rounded-[5px] w-[15px] h-[15px] 
               group-hover:text-[#253e8b] transition-colors duration-300 ease-in-out"
                  />
                </button>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    2,000,000 تومان
                  </span>
                  {/* <span>اگر تخفیف داشت</span> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        className="text-[15px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] mt-10
             text-[#464646] font-peyda-medium bg-gradient-to-b from-[#F5F6F7] to-[#FFFFFF] shadow-[0_16px_32px_0_rgba(43,55,66,.1)] hover:bg-white bg-opacity-0 bg-gradient-radial hover:text-[#464646] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out"
      >
        مشاهده همه محصولات
      </button>

      <div className="flex flex-col items-center justify-center pt-30 pb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
          <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
        </svg>
        <h1 className=" text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
          مراحل ثبت سفارش پروژه
        </h1>
        <p className="text-[16px] pt-6 font-peyda-medium text-gray-500">
          لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ است ...
        </p>
      </div>

      <div className="w-[88%] flex flex-col items-center">
        <div className="w-[62%] ">
          <div className="inlineSection-part w-full flex flex-col justify-between gap-[2rem] items-center ">
            <div className="flex items-center justify-self-end mr-auto min-w-[770px] max-w-[770px] relative -left-[77px]">
              <span className="border-2 border-white rounded-tr-[31px] rounded-br-[31px] shadow-[0_16px_32px_0_#2B37421A] h-[115px] w-[15%] flex items-center justify-center">
                <img src="/image/telephone.svg" className="" alt="h-[400]" />
              </span>

              <div
                ref={box1Ref}
                className={`p-12 rounded-[15px] h-[135px] font-peyda-medium w-[125px] transition-all duration-500 ease-in-out
    ${isActive1 ? "bg-[#253b8e] text-white" : "bg-[#dee2ec] text-[#253B8E]"}`}
              >
                <span className="text-[40px] font-extrabold font-peyda-bold">
                  01
                </span>
              </div>

              <div className="h-[600] border-2 border-white rounded-tl-[31px] rounded-bl-[31px] shadow-[0_16px_32px_0_#2B37421A] p-2 w-[50%]  pr-6">
                <span className="font-extrabold font-peyda-bold text-[17px] ">
                  ارتباط با تیم پشتیبانی
                </span>
                <br />
                <span className="text-[14px] bg-red h-[115px] font-peyda-medium text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </span>
              </div>
            </div>

            <div className="flex items-center  justify-self-center ml-auto min-w-[770px]  max-w-[770px] relative right-[75px]">
              <div className="h-[600] border-2 border-white rounded-tr-[31px] rounded-br-[31px] shadow-[0_16px_32px_0_#2B37421A] p-2 w-[50%]  pr-6">
                <span className="font-extrabold font-peyda-bold text-[17px] ">
                  استعلام قیمت
                </span>
                <br />
                <span className="text-[14px] bg-red h-[115px] font-peyda-medium text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </span>
              </div>

              <div
                ref={box2Ref}
                className={`p-12 rounded-[15px] h-[135px] font-peyda-medium w-[125px] transition-all duration-500 ease-in-out
    ${isActive2 ? "bg-[#253b8e] text-white" : "bg-[#dee2ec] text-[#253B8E]"}`}
              >
                <span className="h-[800]  text-[40px] font-extrabold font-peyda-bold">
                  02
                </span>
              </div>
              <span className="border-2 border-white rounded-tl-[31px] rounded-bl-[31px] shadow-[0_16px_32px_0_#2B37421A] h-[115px] w-[15%] flex items-center justify-center">
                <img src="/image/alpha.png" className="" alt="h-[400]" />
              </span>
            </div>

            <div className="flex items-center justify-self-end mr-auto min-w-[770px]  max-w-[770px] relative -left-[77px]">
              <span className="border-2 border-white rounded-tr-[31px] rounded-br-[31px] shadow-[0_16px_32px_0_#2B37421A] h-[115px] w-[15%] flex items-center justify-center">
                <img src="/image/kia.png" className="" alt="h-[400]" />
              </span>

              <div
                ref={box3Ref}
                className={`p-12 rounded-[15px] h-[135px] font-peyda-medium w-[125px] transition-all duration-500 ease-in-out
    ${isActive3 ? "bg-[#253b8e] text-white" : "bg-[#dee2ec] text-[#253B8E]"}`}
              >
                <span className="h-[800]  text-[40px] font-extrabold font-peyda-bold">
                  03
                </span>
              </div>

              <div className="h-[600] border-2 border-white rounded-tl-[31px] rounded-bl-[31px] shadow-[0_16px_32px_0_#2B37421A] p-2 w-[48%]  pr-6">
                <span className="font-extrabold font-peyda-bold text-[17px] ">
                  دریافت قرار داد
                </span>
                <br />
                <span className="text-[14px] bg-red h-[115px] font-peyda-medium text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </span>
              </div>
            </div>

            <div className="flex items-center  justify-self-center ml-auto min-w-[770px]  max-w-[770px] relative right-[75px]">
              <div className="h-[600] border-2 border-white rounded-tr-[31px] rounded-br-[31px] shadow-[0_16px_32px_0_#2B37421A] p-2 w-[50%]  pr-6">
                <span className="font-extrabold font-peyda-bold text-[17px] ">
                  استعلام قیمت
                </span>
                <br />
                <span className="text-[14px] bg-red h-[115px] font-peyda-medium text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </span>
              </div>

              <div
                ref={box4Ref}
                className={`p-12 rounded-[15px] h-[135px] font-peyda-medium w-[125px] transition-all duration-500 ease-in-out
    ${isActive4 ? "bg-[#253b8e] text-white" : "bg-[#dee2ec] text-[#253B8E]"}`}
              >
                <span className="h-[800]  text-[40px] font-extrabold font-peyda-bold">
                  04
                </span>
              </div>
              <span className="border-2 border-white rounded-tl-[31px] rounded-bl-[31px] shadow-[0_16px_32px_0_#2B37421A] h-[115px] w-[15%] flex items-center justify-center">
                <img src="/image/alpha.png" className="" alt="h-[400]" />
              </span>
            </div>

            <div className="flex items-center justify-self-end mr-auto min-w-[770px]  max-w-[770px] relative -left-[77px]">
              <span className="border-2 border-white rounded-tr-[31px] rounded-br-[31px] shadow-[0_16px_32px_0_#2B37421A] h-[115px] w-[15%] flex items-center justify-center">
                <img src="/image/telephone.svg" className="" alt="h-[400]" />
              </span>

              <div
                ref={box5Ref}
                className={`p-12 rounded-[15px] h-[135px] font-peyda-medium w-[125px] transition-all duration-500 ease-in-out
    ${isActive5 ? "bg-[#253b8e] text-white" : "bg-[#dee2ec] text-[#253B8E]"}`}
              >
                <span className="h-[800]  text-[40px] font-extrabold font-peyda-bold">
                  05
                </span>
              </div>

              <div className="h-[600] border-2 border-white rounded-tl-[31px] rounded-bl-[31px] shadow-[0_16px_32px_0_#2B37421A] p-2 w-[50%]  pr-6">
                <span className="font-extrabold font-peyda-bold text-[17px] ">
                  دریافت گواهینامه
                </span>
                <br />
                <span className="text-[14px] bg-red h-[115px] font-peyda-medium text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </span>
              </div>
            </div>

            <div className="flex items-center  justify-self-center ml-auto min-w-[770px]  max-w-[770px] relative right-[75px]">
              <div className="h-[600] border-2 border-white rounded-tr-[31px] rounded-br-[31px] shadow-[0_16px_32px_0_#2B37421A] p-2 w-[50%]  pr-6">
                <span className="font-extrabold font-peyda-bold text-[17px] ">
                  ارتباط با تیم پشتیبانی
                </span>
                <br />
                <span className="text-[14px] bg-red h-[115px] font-peyda-medium text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </span>
              </div>

              <div
                ref={box6Ref}
                className={`p-12 rounded-[15px] h-[135px] font-peyda-medium w-[125px] transition-all duration-500 ease-in-out
    ${isActive6 ? "bg-[#253b8e] text-white " : "bg-[#dee2ec] text-[#253B8E]"}`}
              >
                <span className="h-[800]  text-[40px] font-extrabold font-peyda-bold">
                  06
                </span>
              </div>
              <span className="border-2 border-white rounded-tl-[31px] rounded-bl-[31px] shadow-[0_16px_32px_0_#2B37421A] h-[115px] w-[15%] flex items-center justify-center">
                <img src="/svg/package.svg" className="" alt="h-[400]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-30 pb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="10" fill="#7E6AF0"></circle>
          <circle cx="22" cy="10" r="10" fill="#FED128"></circle>
        </svg>
        <h1 className=" text-[32px] font-extrabold font-peyda-bold text-[#253B8E] pt-6">
          جدیدترین مقالات
        </h1>
        <p className="text-[16px] pt-6 font-peyda-medium text-gray-500">
          لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ است ...
        </p>
      </div>

      <div className="w-[70%] flex relative mt-10 h-full mb-10">
        <button
          className="swiper-button-prev absolute !left-[-50px]  -translate-y-1/2 z-10 p-2  text-white rounded-full
          rounded-[50px] border border-white 
         bg-gradient-to-b from-[#f5f6f7] to-[#ffffff] 
         transition ease-in-out duration-300 
         pt-[10px] pr-[7px] pb-[7px] pl-[7px]
        "
        >
          <GrFormPrevious />
        </button>
        <button className="swiper-button-next  absolute !right-[-50px] -translate-y-1/2 z-10 p-2  text-white rounded-full   bg-gradient-to-b from-[#f5f6f7] to-[#ffffff]">
          <GrFormNext />
        </button>
        <Swiper
          className="w-full h-[500px]"
          slidesPerView={4} // نمایش ۳ اسلاید در یک بار
          spaceBetween={25} // فاصله بین اسلایدها
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          grabCursor={true} // فعال‌سازی قابلیت کشیدن اسلاید
          loop={true}
          onSlideChange={triggerAnimation}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center bg-white   rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
              <div className="w-full flex justify-around pt-4">
                <img
                  src="/image/slider-section3-1.jpg"
                  className="rounded-2xl w-[85%]"
                  alt=""
                />
                <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[12px] font-normal not-italic">
                    ابزار برقی
                  </span>
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[12px] font-normal not-italic">
                    ابزار دستی
                  </span>

                  <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[12px] font-normal not-italic">
                    ابزار صنعتی
                  </span>
                </div>
              </div>
              <div className="pr-5 pl-4 pt-3">
                <span className="font-peyda-bold text-[15px] text-gray-500">
                  مقایسه دریل شارژی در سال 2025
                </span>
                <br />
                <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                  چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب
                  یکی از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
                </span>
              </div>

              <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
                <LuMessageSquareText className="text-[20px]" />
                <span className="text-[13px] pr-1">0 نظر</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center bg-white rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
              <div className="w-full flex justify-around pt-4">
                <img
                  src="/image/slider-section3-2.jpg"
                  className="rounded-2xl w-[85%]"
                  alt=""
                />
                <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار برقی
                  </span>
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic">
                    ابزار دستی
                  </span>

                  <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic">
                    ابزار صنعتی
                  </span>
                </div>
              </div>
              <div className="pr-5 pl-4 pt-3">
                <span className="font-peyda-bold text-[15px] text-gray-500">
                  راهنمای خرید ابزار برای مبتدیان
                </span>
                <br />
                <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                  چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب
                  یکی از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
                </span>
              </div>

              <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
                <LuMessageSquareText className="text-[20px]" />
                <span className="text-[13px] pr-1">0 نظر</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center bg-white rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
              <div className="w-full flex justify-around pt-4">
                <img
                  src="/image/slider-section3-3.jpg"
                  className="rounded-2xl w-[85%]"
                  alt=""
                />
                <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار برقی
                  </span>
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار دستی
                  </span>

                  <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار صنعتی
                  </span>
                </div>
              </div>
              <div className="pr-5 pl-4 pt-3">
                <span className="font-peyda-bold text-[15px] text-gray-500">
                  ابزار ضروری که هر کارگاه باید داشت
                </span>
                <br />
                <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                  چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب
                  یکی از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
                </span>
              </div>

              <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
                <LuMessageSquareText className="text-[20px]" />
                <span className="text-[13px] pr-1">0 نظر</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center bg-white rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
              <div className="w-full flex justify-around pt-4">
                <img
                  src="/image/slider-section3-1.jpg"
                  className="rounded-2xl w-[85%]"
                  alt=""
                />
                <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار برقی
                  </span>
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار دستی
                  </span>

                  <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic">
                    ابزار صنعتی
                  </span>
                </div>
              </div>
              <div className="pr-5 pl-4 pt-3">
                <span className="font-peyda-bold text-[15px] text-gray-500">
                  مقایسه دریل شارژی در سال 2025
                </span>
                <br />
                <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                  چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب
                  یکی از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
                </span>
              </div>

              <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
                <LuMessageSquareText className="text-[20px]" />
                <span className="text-[13px] pr-1">0 نظر</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center bg-white rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
              <div className="w-full flex justify-around pt-4">
                <img
                  src="/image/slider-section3-2.jpg"
                  className="rounded-2xl w-[85%]"
                  alt=""
                />
                <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار برقی
                  </span>
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار دستی
                  </span>

                  <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار صنعتی
                  </span>
                </div>
              </div>
              <div className="pr-5 pl-4 pt-3">
                <span className="font-peyda-bold text-[15px] text-gray-500">
                  راهنمای خرید ابزار برای مبتدیان
                </span>
                <br />
                <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                  چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب
                  یکی از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
                </span>
              </div>

              <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
                <LuMessageSquareText className="text-[20px]" />
                <span className="text-[13px] pr-1">0 نظر</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center bg-white rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
              <div className="w-full flex justify-around pt-4">
                <img
                  src="/image/slider-section3-3.jpg"
                  className="rounded-2xl w-[85%]"
                  alt=""
                />
                <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار برقی
                  </span>
                  <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار دستی
                  </span>

                  <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                    ابزار صنعتی
                  </span>
                </div>
              </div>
              <div className="pr-5 pl-4 pt-3">
                <span className="font-peyda-bold text-[15px] text-gray-500">
                  ابزار ضروری که هر کارگاه باید داشت
                </span>
                <br />
                <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                  چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب
                  یکی از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
                </span>
              </div>

              <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
                <LuMessageSquareText className="text-[20px]" />
                <span className="text-[13px] pr-1">0 نظر</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[70%] flex flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className=" text-[25px] font-extrabold font-peyda-medium text-[#253B8E]">
            مجله خبری آریا
          </h1>
          <button
            className="text-[15px] pt-[14px] pr-[30px] pb-[14px] pl-[30px] 
             text-[#464646] font-peyda-medium bg-gradient-to-b from-[#F5F6F7] to-[#FFFFFF] shadow-[0_16px_32px_0_rgba(43,55,66,.1)] hover:bg-white bg-opacity-0 bg-gradient-radial hover:text-[#464646] p-[17px] rounded-[60px] transition-colors duration-300 ease-in-out"
          >
            مشاهده همه محصولات
          </button>
        </div>

        <div className="flex  pt-7">
          <div className="w-[40%] rounded-2xl flex flex-col justify-between bg-[linear-gradient(183deg,rgba(28,48,121,0.21)_17.39%,rgba(23,41,105,0.48)_69.29%),url('https://aria-code.ir/aria/wp-content/uploads/2025/02/single-post-image.jpg')] bg-cover bg-center bg-no-repeat">
            <span className="w-[19%] m-5 self-end p-0.5 font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic">
              دسته بندی نشده
            </span>
            <div className="p-6">
              <span className="text-white font-peyda-medium text-[20px]">
                سلام دنیا!
              </span>
              <br />
              <span className="text-white font-peyda-medium text-[13px]">
                به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا
                حذف کنید، سپس...
              </span>
            </div>
          </div>
          <div className="w-[25%]  flex flex-col items-center bg-white rounded-[24px] border-2 border-white bg-white shadow-[0_25px_34px_0_rgba(43,55,66,0.1)] transition-all duration-300 ease-in">
            <div className="w-full flex justify-around pt-4">
              <img
                src="/image/slider-section3-3.jpg"
                className="rounded-2xl w-[85%]"
                alt=""
              />
              <div className="flex absolute p-[10px] pr-[85px]  gap-2">
                <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                  ابزار برقی
                </span>
                <span className="font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                  ابزار دستی
                </span>

                <span className=" font-peyda-medium rounded bg-[#fed128] shadow-[0_4px_8px_0_rgba(254,209,40,0.17)] text-[#253b8e] text-center text-[13px] font-normal not-italic ">
                  ابزار صنعتی
                </span>
              </div>
            </div>
            <div className="pr-5 pl-4 pt-3">
              <span className="font-peyda-bold text-[15px] text-gray-500">
                ابزار ضروری که هر کارگاه باید داشت
              </span>
              <br />
              <span className="font-peyda-bold text-[12px] text-gray-500 leading-7 text-justify">
                چگونه ابزار مناسب کار خود را انتخاب کنیم؟ انتخاب ابزار مناسب یکی
                از مهم‌ترین عوامل برای بهبود کارایی و دقت در هر...
              </span>
            </div>

            <div className="flex items-center justify-end font-peyda-bold  text-gray-500 w-full pl-4 pb-2">
              <LuMessageSquareText className="text-[20px]" />
              <span className="text-[13px] pr-1">0 نظر</span>
            </div>
          </div>

          <div className="flex w-[35%] flex-col gap-4 ">
            <div className="flex flex-col rounded-[24px] bg-[#f9f9f9] p-[10px]">
              <div className="flex items-center">
                <img
                  src="/image/slider-section3-3.jpg"
                  className="rounded-2xl w-[25%] h-[113px]"
                  alt=""
                />
                <div className="flex flex-col justify-between w-[75%] h-full ">
                  <span className="font-peyda-medium text-[14px] text-gray-600 pt-[45px] pr-[14px]">
                    راهنمای هنگام کار با ابزارهای برقی
                  </span>
                  <div className="flex justify-end items-center">
                    <div className="flex items-center justify-end font-peyda-bold  text-gray-400  pl-1 pb-2">
                      <LuMessageSquareText className="text-[20px]" />
                      <span className="text-[13px] pr-1">0 نظر</span>
                    </div>
                    <div className="flex items-center justify-end font-peyda-bold  text-gray-400  pl-1 pb-2">
                      <BsPersonCheck className="text-[19px]" />
                      <span className="text-[13px] pr-1">محمد مهدی عزیزی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-[24px] bg-[#f9f9f9] p-[10px]">
              <div className="flex items-center">
                <img
                  src="/image/slider-section3-1.jpg"
                  className="rounded-2xl w-[25%] h-[113px]"
                  alt=""
                />
                <div className="flex flex-col justify-between w-[75%] h-full ">
                  <span className="font-peyda-medium text-[14px] text-gray-600 pt-[45px] pr-[14px]">
                    راهنمای هنگام کار با ابزارهای برقی
                  </span>
                  <div className="flex justify-end items-center">
                    <div className="flex items-center justify-end font-peyda-bold  text-gray-400  pl-1 pb-2">
                      <LuMessageSquareText className="text-[20px]" />
                      <span className="text-[13px] pr-1">0 نظر</span>
                    </div>
                    <div className="flex items-center justify-end font-peyda-bold  text-gray-400  pl-1 pb-2">
                      <BsPersonCheck className="text-[19px]" />
                      <span className="text-[13px] pr-1">محمد مهدی عزیزی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-[24px] bg-[#f9f9f9] p-[10px]">
              <div className="flex items-center">
                <img
                  src="/image/slider-section3-3.jpg"
                  className="rounded-2xl w-[25%] h-[113px]"
                  alt=""
                />
                <div className="flex flex-col justify-between w-[75%] h-full ">
                  <span className="font-peyda-medium text-[14px] text-gray-600 pt-[45px] pr-[14px]">
                    راهنمای هنگام کار با ابزارهای برقی
                  </span>
                  <div className="flex justify-end items-center">
                    <div className="flex items-center justify-end font-peyda-bold  text-gray-400  pl-1 pb-2">
                      <LuMessageSquareText className="text-[20px]" />
                      <span className="text-[13px] pr-1">0 نظر</span>
                    </div>
                    <div className="flex items-center justify-end font-peyda-bold  text-gray-400  pl-1 pb-2">
                      <BsPersonCheck className="text-[19px]" />
                      <span className="text-[13px] pr-1">محمد مهدی عزیزی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md text-center relative flex flex-col font-peyda-medium">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                سلام من عنوان هستم
              </h2>
              <RxCross2 onClick={() => setIsOpen(false)} />
            </div>

            <span>میدونستی اینجا میتونی هرچیزی یذاری ؟؟ </span>
            <span>حتی کد کوتاه المنتور ؟؟؟ </span>
            <span>حتی کد کوتاه المنتور ؟؟؟ </span>
            <span>هر المان یا قالب که میخوایییی؟؟</span>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              منو ببند
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
