"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { PiUserCircleBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
}
interface Product {
  name: string;
  link: string;
  img: string;
  regularPrice: number;
  salePrice: number;
  discount: number;
}
const shopItems: MenuItem[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "یک دیالوگ مهم برای کاربر",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "نمایش محتوا هنگام هاور",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "نمایش میزان پیشرفت کار",
  },
];
const products: Product[] = [
  {
    name: "دریل مدل Ac10",
    link: "/product/ronix-ac10",
    img: "https://aria-code.ir/aria/wp-content/uploads/2025/02/121735238product1-min.png",
    regularPrice: 3200000,
    salePrice: 3000000,
    discount: 6,
  },
  {
    name: "دریل دوتزی",
    link: "/product/roni48op8py-copy-copy-copy",
    img: "https://aria-code.ir/aria/wp-content/uploads/2025/02/isolated-drill-transparent-background_1315237-13738881-1-1-min.png",
    regularPrice: 800000,
    salePrice: 500000,
    discount: 38,
  }
  ,
  {
    name: "دریل دوتزی",
    link: "/product/roni48op8py-copy-copy-copy",
    img: "https://aria-code.ir/aria/wp-content/uploads/2025/02/isolated-drill-transparent-background_1315237-13731-1-1-min.png",
    regularPrice: 800000,
    salePrice: 500000,
    discount: 38,
  }
  ,
  {
    name: "دریل دوتزی",
    link: "/product/roni48op8py-copy-copy-copy",
    img: "https://aria-code.ir/aria/wp-content/uploads/2025/02/isolated-drill-transparent-background_1315237-13738881-1-1-min.png",
    regularPrice: 800000,
    salePrice: 500000,
    discount: 38,
  }
  // می‌تونی بقیه محصولات رو اضافه کنی
];
function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-2 rounded hover:bg-[#1c2a5e]">
          <div className="font-medium">{title}</div>
          {children && <p className="text-sm text-[#cbd5f1]">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function MenuSection() {
  const targetDate = new Date("2025-12-01T12:00:00").getTime();
  const [activeIndex, setActiveIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="MenuSection bg-[#253e8b] flex items-center w-[70%] justify-between font-peyda-medium ">
      <NavigationMenu viewport={false} className="flex-1 ">
        <NavigationMenuList className="flex items-center gap-4">
          {/* دسته بندی محصولات */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="flex items-center gap-1 text-white font-medium">
              <img src="/svg/12Home-Smile.svg" alt="" /> دسته بندی محصولات
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute w-full lg:w-[1300px] top-full right-0 origin-top-right w-[800px] bg-white p-5 rounded-[14px] shadow-md">
              <ul className="flex ">
                <div className="w-[25%] menu-items">
                  <span className="text-[#253e8b]  mb-2 block">
                    ابزارهای برقی
                  </span>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      مته برقی و دریل بتنی
                    </span>
                  </ListItem>
                    <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      مته برقی و دریل بتنی
                    </span>
                  </ListItem>
                    <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg >
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                </div>
                <div className="w-[25%] menu-items">
                  <span className="text-[#253e8b]  mb-2 block">
                    ابزارهای برقی
                  </span>
                         <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      مته برقی و دریل بتنی
                    </span>
                  </ListItem>
                    <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      مته برقی و دریل بتنی
                    </span>
                  </ListItem>
                    <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                </div>
                <div className="w-[25%] menu-items">
                  <span className="text-[#253e8b]  mb-2 block">
                    ابزارهای دستی
                  </span>
                        <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      مته برقی و دریل بتنی
                    </span>
                  </ListItem>
                    <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      مته برقی و دریل بتنی
                    </span>
                  </ListItem>
                    <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      دریل، پیچ گوشتی، آچار بکس
                    </span>
                  </ListItem>

                  <ListItem href="/docs" title="">
                    <span className="text-gray-400 transition-colors duration-300 pl-2">
                      <svg
                        aria-hidden="true"
                        className="e-font-icon-svg fill-[#D9D9D9] transition-colors duration-300"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                      >
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 transition-colors duration-300">
                      جارو برقی صنعتی و کارواش
                    </span>
                  </ListItem>

                </div>

                 <div className="w-[25%] font-peyda-medium">
      <div className="w-full bg-[#253e8b] text-white rounded-[20px] relative">
        {/* تایمر */}
        <div className="text-center pt-3">
          <h2 className="text-xl pb-[15px]">تخفیف شگفت انگیز</h2>
          <span className="text-lg">
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </span>
        </div>

        {/* اسلایدر */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          loop
          dir="rtl"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // realIndex برای لوپ
        >
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center pt-[15px] mb-[30px]">
                <a href={product.link}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-35 object-contain mb-2"
                  />
                  <div className="font-medium">{product.name}</div>
                </a>
                <div className="mt-1">
                  <div className="text-sm text-white line-through">
                    <span>{product.regularPrice.toLocaleString()} تومان</span>
                    <span className="text-sm text-red-500">
                      ٪{product.discount}
                    </span>
                  </div>
                  <div className="text-sm text-white">
                    {product.salePrice.toLocaleString()} تومان
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* دکمه قبلی */}
        <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 bg-[#253e8b] opacity-60">
          {products[(activeIndex - 1 + products.length) % products.length] && (
            <img
              src={
                products[(activeIndex - 1 + products.length) % products.length].img
              }
              alt="قبلی"
              className="h-20 rounded-lg  mb-2  p-1 "
            />
          )}
   
        </div>

        {/* دکمه بعدی */}
        <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 bg-[#253e8b] opacity-60">
          {products[(activeIndex + 1) % products.length] && (
            <img
              src={products[(activeIndex + 1) % products.length].img}
              alt="بعدی"
              className="rounded-lg  mb-2  p-1 h-20"
            />
          )}
  
        </div>



      </div>
    </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* فروشگاه */}
           <NavigationMenuItem>
          <NavigationMenuTrigger>فروشگاه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-5 right-0 ">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">پروفایل کاربر</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">فروشگاه</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">انواع محصمل</Link>
                </NavigationMenuLink>
                       <NavigationMenuLink asChild>
                  <Link href="#">تسویه حساب</Link>
                </NavigationMenuLink>
                       <NavigationMenuLink asChild>
                  <Link href="#">سبد خرید</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

          {/* سایر آیتم‌ها */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium">
              پروژه‌ها
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium">
              برگه‌ها
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium">
              تماس با ما
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium">
              درباره ما
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* دکمه ورود */}
      <button className="flex items-center gap-2 border border-white text-white p-2 rounded-full bg-[#5066a0]">
        <PiUserCircleBold />
        <span>ورود | ثبت نام</span>
      </button>
    </div>
  );
}
