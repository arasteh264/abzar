import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PiUserCircleBold } from "react-icons/pi";
interface MenuItem {
  title: string;
  href: string;
  description: string;
}

const components: MenuItem[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
// export default function menu() {
//   return (
//    <section className=" flex items-center  pt-3  gap-4 w-[70%]">
//     <p>gffgdgfdgfd</p>
//     </section>
//   )
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default function MenuSection() {
  return (
    <>
      <div className="MenuSection  bg-[#253e8b]   flex items-center w-[70%] justify-between">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="">
            <NavigationMenuItem  className="relative">
              <NavigationMenuTrigger className="flex "><span><img src="/svg/12Home-Smile.svg" alt="" /></span>دسته بندی محصولات</NavigationMenuTrigger>
              <NavigationMenuContent   className="absolute top-full left-0 origin-top-left w-[800px] bg-[#253B8E] rounded-md shadow-lg p-6">
                <ul className="rgid gap-2 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr] product-category">
                  <div>
                    <span>ابزار های برقی</span>
                    <ListItem href="/docs" title=" دریل,پیچ گوشتی,آچار بکس"></ListItem>
                    <ListItem href="/docs" title="مته برقی و دریل بتنی"></ListItem>
                    <ListItem href="/docs" title=" جارو برقی صنعتی و کارواش"></ListItem>
                  </div>
                  <div>
                    <span>ابزار فلزی</span>
                    <ListItem href="/docs" title=" دریل,پیچ گوشتی,آچار بکس"></ListItem>
                    <ListItem href="/docs" title="مته برقی و دریل بتنی"></ListItem>
                    <ListItem href="/docs" title=" جارو برقی صنعتی و کارواش"></ListItem>
                  </div>
                  <div>
                    <span>ابزار های دستی</span>
                    <ListItem href="/docs" title=" دریل,پیچ گوشتی,آچار بکس"></ListItem>
                    <ListItem href="/docs" title="مته برقی و دریل بتنی"></ListItem>
                    <ListItem href="/docs" title=" جارو برقی صنعتی و کارواش"></ListItem>
                  </div>

                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed components built with Tailwind
                          CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger><span><img src="/svg/basket.svg" alt="" /></span>فروشگاه</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
       
              <NavigationMenuTrigger><span><img src="/svg/12Bolt-1.svg" alt="" /></span>پروژه ها</NavigationMenuTrigger>
           
            </NavigationMenuItem>
            <NavigationMenuItem>
          <NavigationMenuTrigger><span><img src="/svg/12Bolt-1.svg" alt="" /></span>برگه ها</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>تماس با ما </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Components</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Documentation</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Blocks</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger> درباره ما</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleHelpIcon />
                        Backlog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleIcon />
                        To Do
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


        <button className="flex items-center gap-2  border border-white text-white p-[10px] rounded-[36px] bg-[#5066a0] cursor-pointer ">
             <PiUserCircleBold />
          <span>ورود | ثبت نام </span>
        </button>
      </div>
    </>
  );
}
