"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* All content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          <div>
            {/* Logo */}
            <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-1">
              Exclusive
            </h1>
          </div>

          {/* Links - Animated sliding nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/about">About</Link>
              </li>
              <li className="p-4 hover:underline underline-offset-2">
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-6">
            {/* Search Bar with Icon */}
            <div className="relative flex items-center">
              <input
                type="text"
                className="px-4 py-2 bg-zinc-100 rounded-lg placeholder:text-sm sm:w-64 w-56 focus:outline-none"
                placeholder="What are you looking for?"
              />
              <div className="w-6 h-6 sm:w-8 sm:h-8 overflow-hidden absolute top-1/2 -translate-y-1/2 right-2">
                <Image
                  src="/search.png"
                  alt="Search Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Wishlist and Cart Icons */}
            <Link href="/wishlist" className="w-8 h-8">
              <Image
                src="/favorite.png"
                alt="Favorite Icon"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </Link>
            <Link href="/cart" className="w-8 h-8">
              <Image
                src="/cart.png"
                alt="Cart Icon"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
