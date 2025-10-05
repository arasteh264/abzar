import { ReactNode } from "react";
import { GoArrowLeft } from "react-icons/go";


export interface SuccessfulProject {
  title: string;
  link: string;
  image:string;
//   icon: ReactNode;
    features: {
    duration: string,
    subject: string,
    customQuantity:string,
    }
};

  export interface Feature  {
    id?:   number | null;
    title: string;
    // icon: ReactNode;
    link: string;
  };


   export interface discountedProducts  {
    id:number;
    image: string;
    price: ReactNode;
    discount: string;
  };
  
  export interface Product{
    id:number;
    title:string;
    image:string;
    category:string;
    subCategory:string;
    price:string;
  }
export  const discountedProduct :discountedProducts[]= [
  {
    id: 1,
    image: "/image/drile1.png",
    price: "400,000 تومان",
    discount: "20%",
  },
  {
    id: 2,
    image: "/image/drile2.png",
    price: "400,000 تومان",
    discount: "20%",
  },
  {
    id: 1,
    image: "/image/drile1.png",
    price: "400,000 تومان",
    discount: "20%",
  },
  {
    id: 2,
    image: "/image/drile2.png",
    price: "400,000 تومان",
    discount: "20%",
  },
];
export  const successfulProjects: SuccessfulProject[] = [
  {
    title: "پروژه ساخت دریل بتنی",
    link: "https://aria-code.ir/aria/projects/xsd/",
    // icon: <GoArrowLeft />,
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg",
    features: {
      duration: "7 ماه",
      subject: "ساخت و تولید",
      customQuantity: "سفارشی دوم",
    },
  },
  {
    title: "پروژه طراحی خط تولید",
    link: "https://aria-code.ir/aria/projects/xsd-copy/",
    // icon: <GoArrowLeft />,
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/tooling-services-main-2023.jpg",
    features: {
      duration: "2 سال",
      subject: "خط تولید",
      customQuantity: "سفارشی دوم",
    },
  },
   {
    title: "پروژه طراحی خط تولید",
    link: "https://aria-code.ir/aria/projects/xsd-copy/",
    // icon: <GoArrowLeft />,
    image: "/image/slider-section3-4.jpg",
    features: {
      duration: "2 سال",
      subject: "خط تولید",
      customQuantity: "سفارشی دوم",
    },
  },
  {
    title: "پروژه ساخت دریل بتنی",
    link: "https://aria-code.ir/aria/projects/xsd/",
    // icon: <GoArrowLeft />,
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/Screenshot_28.jpg",
    features: {
      duration: "7 ماه",
      subject: "ساخت و تولید",
      customQuantity: "سفارشی دوم",
    },
  },
  {
    title: "همکاری با شرکت برفاب",
    link: "https://aria-code.ir/aria/projects/xsd-copy/",
    // icon: <GoArrowLeft />,
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/tooling-services-main-2023.jpg",
    features: {
      duration: "2 سال",
      subject: "خط تولید",
      customQuantity: "سفارشی دوم",
    },
  },
   {
    title: "همکاری با شرکت بنز",
    link: "https://aria-code.ir/aria/projects/xsd-copy/",
    // icon: <GoArrowLeft />,
    image: "/image/slider-section3-4.jpg",
    features: {
      duration: "2 سال",
      subject: "خط تولید",
      customQuantity: "سفارشی دوم",
    },
  },
  {
    title: "پروژه طراحی خط تولید",
    link: "https://aria-code.ir/aria/projects/xsd-copy/",
    // icon: <GoArrowLeft />,
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/tooling-services-main-2023.jpg",
    features: {
      duration: "2 سال",
      subject: "خط تولید",
      customQuantity: "سفارشی دوم",
    },
  },
    {
    title: "همکاری با شرکت برفاب",
    link: "https://aria-code.ir/aria/projects/xsd-copy/",
    // icon: <GoArrowLeft />,
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/tooling-services-main-2023.jpg",
    features: {
      duration: "2 سال",
      subject: "خط تولید",
      customQuantity: "سفارشی دوم",
    },
  },
]

 export  const features: Feature[] = [
    {
      title: "تولید انبوه محصولات",
      link: "#",
    },
    {
      title: "پشتیبانی دائمی",
      link: "#",
    },
    {
      title: "گارانتی ویژه محصولات",
      link: "#",
    },
       {
      title: "محصولاتی با کیفیت بالا",
      link: "#",
    },
      {
      title: "30 روز بازگشت وجه",
      link: "#",
    },
  ];


 export const ProductsSlider : Product[] = [
  {
    id: 1,
    title: "دستگاه برش cwa5qa",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg",
    category: "ابزار صنعتی",
    subCategory: "بتن شکن",
    price: "2,000,000 تومان",
  },
  {
    id: 2,
    title: "دستگاه تراش miniX",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp",
    category: "ابزار صنعتی",
    subCategory: "تراش‌کاری",
    price: "3,400,000 تومان",
  },
  {
    id: 3,
    title: "دستگاه سوراخ‌کاری PMX",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg",
    category: "ابزار صنعتی",
    subCategory: "دریل",
    price: "1,750,000 تومان",
  },
  {
    id: 4,
    title: "برش لیزری مدل L400",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp",
    category: "ابزار صنعتی",
    subCategory: "لیزر کاتر",
    price: "5,800,000 تومان",
  },
  {
    id: 5,
    title: "دستگاه برش cwa5qa",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg",
    category: "ابزار صنعتی",
    subCategory: "بتن شکن",
    price: "2,000,000 تومان",
  },
  {
    id: 6,
    title: "دستگاه تراش miniX",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp",
    category: "ابزار صنعتی",
    subCategory: "تراش‌کاری",
    price: "3,400,000 تومان",
  },
  {
    id: 7,
    title: "دستگاه سوراخ‌کاری PMX",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/TR001R-A-300x300.jpg",
    category: "ابزار صنعتی",
    subCategory: "دریل",
    price: "1,750,000 تومان",
  },
  {
    id: 8,
    title: "برش لیزری مدل L400",
    image: "https://aria-code.ir/aria/wp-content/uploads/2025/02/Frame-10856-min.webp",
    category: "ابزار صنعتی",
    subCategory: "لیزر کاتر",
    price: "5,800,000 تومان",
  },
];