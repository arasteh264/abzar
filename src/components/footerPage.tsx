import React from "react";
import { FaTwitter } from "react-icons/fa";
import { LiaShareAltSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
export default function footerPage() {
  return (
    <section className="flex flex-col text-black   gap-4 w-[80%] flex justify-between ">
      <div className="flex items-center text-black pt-3  gap-4 w-full flex justify-between bg-gradient-to-b from-[#F5F6F7] to-white shadow-2xl rounded-[28px]">
        <div className="flex items-center text-black pt-3  ">
          <p className=" text-[#1c3377]  text-[20px] leading-[30px] pr-7">
            هفت روز هفته از ساعت <span className="text-white bg-[#FED128] rounded-[4px] px-[3px]">8</span> الی <span className="text-white bg-[#FED128] rounded-[4px] px-[3px]">20</span> در خدمت شما
            هستیم …
          </p>
        </div>
        <div className="flex items-center text-black flex justify-end">
          <span className="text-[#1c3377]  text-[20px] leading-[30px] pr-7 font-bold">369 32 56 - <span>021</span></span>
          <img
            src="/image/ring-footer.png"
            className="relative bottom-13"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[32%] pt-[14px]">
          <div className="flex items-center justify-between w-full pt-2">
            <span className="text-[17px] text-[#1c3377] font-bold">
              درباره شرکت آریا تجارت
            </span>
            <div className="flex w-[50%] flex justify-end gap-3">
              <FaTwitter className="w-[12%] h-[25px] fill-[#9A9A9A]" />
              <LiaShareAltSolid className="w-[12%] h-[25px] fill-[#9A9A9A]" />
              <FaInstagram className="w-[12%] h-[25px] fill-[#9A9A9A]" />
            </div>
          </div>
          <p className="text-justify leading-[32px] tracking-[2px] text-[#555] pt-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد.
          </p>
        </div>
        <div className="w-[16%] pt-[14px] pr-[44px] pb-0 pl-0">
          <span className="text-[17px] text-[#1c3377] font-bold">
            دسترسی سریع
          </span>
          <div className="grid gap-y-[25px] gap-2 pt-2 text-[#555]  ">
            <span>محصولات</span>
            <span>فروشگاه</span>
            <span>سبد خرید</span>
            <span>محصولات پر فروش</span>
            <span>درباره ما</span>
            <span>تماس با ما</span>
          </div>
        </div>
        <div className="w-[16%] pt-[14px] pr-[44px] pb-0 pl-0">
          <span className="text-[17px] text-[#1c3377] font-bold">
            موفق ترین پروژه ها
          </span>
          <div className="grid gap-y-[25px] gap-2 pt-2 text-[#555]">
            <span>محصولات</span>
            <span>فروشگاه</span>
            <span>سبد خرید</span>
            <span>محصولات پر فروش</span>
            <span>درباره ما</span>
            <span>تماس با ما</span>
          </div>
        </div>
        <div className="w-[36%] pt-[14px]">
          <div className="footer-image-background-part-one text-white p-5 mb-4">
            <div className="flex items-center gap-2">
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
              <span>دفتر تهران</span>
            </div>
            <br />
            <span className="mt-5">تلفن : 9123456789 ایمیل : adw@qax.com</span>
            <br />
            <br />
            <span>
              آدرس : تهران ، خیابان پاسداران کوچه 15 سختمان آریا تجارت
            </span>
          </div>
          <div
            className="footer-image-background-part-two text-white p-5"
            dir="ltr"
          >
            <div className="flex items-center gap-2">
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
              <span>Dubai Office</span>
            </div>

            <br />
            <span className="mt-5">
              clall :+98 2154562 email : qwqw@adm.com
            </span>
            <br />
            <br />
            <span>
              address : Dubai,jumeirah public beach 02 – walking broad
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-[40px] pb-[40px]">
        <img src="/image/skoda.png" alt="" />
        <img src="/image/tikaso.png" alt="" />
        <img src="/image/chevrolet.png" alt="" />
        <img src="/image/bamilo.png" alt="" />
        <img src="/image/sipa.png" alt="" />
        <img src="/image/kia.png" alt="" />
        <img src="/image/skoda.png" alt="" />
        <img src="/image/skoda.png" alt="" />
      </div>
    </section>
  );
}
