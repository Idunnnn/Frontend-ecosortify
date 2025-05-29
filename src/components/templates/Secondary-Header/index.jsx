import clsx from "clsx";
import Button from "@/components/Button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
export default function SecondaryHeader({ className, ...props }) {
  const [show, setShow] = useState(false);

  const navbarHander = () => {
    setShow(!show);
  };
  return (
    <>
      <header className="hidden xl:block">
        <div className="flex justify-between px-[100px] relative py-5 shadow-[0_1px_2px_rgba(0,0,0,0.1)] items-center">
          <Link href="/" className="flex items-start max-w-[188px]">
            <img src="/images/logo.png" alt="logo" />
          </Link>

          <ul className="flex gap-8 body-6">
            <li className="group relative inline-block cursor-pointer">
              <Link href="/" className="text-black">
                Home
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/scan" className="text-black">
                Scan
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/guide" className="text-black">
                Guide
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/chatbot" className="text-black">
                Chatbot
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
            <li className="group relative inline-block cursor-pointer">
              <Link href="/about" className="text-black">
                About
              </Link>
              <span className="absolute left-0  bottom-[-4px] h-px w-0 bg-black transition-all duration-200 group-hover:w-full"></span>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link href="/register">
              <Button variant="rounded_secondary_lg" className="text-black border-black">
                Register
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="rounded_primary_lg">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <header className="block xl:hidden relative">
        <div className="flex justify-between px-5 relative py-5 shadow-[0_1px_2px_rgba(0,0,0,0.1)] items-center">
          <Link href="/" className="flex items-start max-w-[150px]">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          {show && (
            <ul className="transition duration-100 flex flex-col body-6 absolute top-full bg-white w-full z-1 left-0 right-0  shadow">
              {}
              <li className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center">
                <Link href="/">Home</Link>
                <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
              </li>
              <li className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center">
                <Link href="/">Scan</Link>
                <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
              </li>
              <li className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center">
                <Link href="/">Guide</Link>
                <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
              </li>
              <li className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center">
                <Link href="/">Chatbot</Link>
                <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
              </li>
              <li className="p-5 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition duration-75 flex justify-between items-center">
                <Link href="/">About Us</Link>
                <Icon icon="mdi:arrow-top-right" className="w-4 h-4"></Icon>
              </li>
              <li className="p-5 flex gap-2 lg:hidden">
                <Link href="/login">
                  <Button variant="primary_sm">Login</Button>
                </Link>
                <Link href="/register">
                  <Button variant="secondary_sm">Register</Button>
                </Link>
              </li>
            </ul>
          )}

          <div className="flex gap-4 items-center">
            {/* <div className="overflow-hidden rounded-full w-9 h-9 hover:cursor-pointer">
              <img src="/images/pexels-ollivves-931018.jpg" alt="user-profile" className="w-full h-full object-cover" />
            </div> */}
            <Link href="/login" className="hidden lg:block">
              <Button variant="primary_sm">Login</Button>
            </Link>
            <Icon icon="icon-park-outline:hamburger-button" className="h-10 w-10 hover:cursor-pointer" onClick={navbarHander} />
          </div>
        </div>
      </header>
    </>
  );
}
