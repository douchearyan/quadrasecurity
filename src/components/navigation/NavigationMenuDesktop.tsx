import React, { FC } from "react";
import OrangeButton from "@/components/buttons/OrangeButton";

import Link from "next/link";
import Image from "next/image";

const NavigationMenuDesktop: FC = () => {
  return (
    <div>
      {/* Navigation bar desktop */}
      <nav className="hidden md:block font-themeFont text-xs fixed z-50 top-0 w-full">
        <div className="flex justify-between items-center w-full h-auto px-5 border-white/20 shadow-xl backdrop-blur-md bg-[#08156B]/10">
          {/* Logo */}
          <div className="relative w-50 h-auto aspect-[4/1]">
            <Link href="/">
              <Image
                src="https://www.quadrasecurity.com/logo_white.svg"
                alt="Quadra Security Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <ul className="flex items-center gap-3 text-white [&>li>svg]:text-[6px] [&>li>a]:p-1.5">
              <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <Link href="/">Home</Link>
              </li>

              <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <Link href="/services">Services</Link>
              </li>

              <li className="relative group  transition-transform duration-300 ease-in-out">
                <Link
                  href="/solutions"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block"
                >
                  Solutions
                </Link>

                {/* Dropdown Menu */}
                <ul className="absolute hidden group-hover:flex flex-col gap-1 bg-white text-black top-full left-0 mt-1 p-2 rounded-lg shadow-lg min-w-[180px] z-50">
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      Placeholder 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      Placeholder 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      Placeholder 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      Placeholder 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-3 py-1 hover:bg-gray-100 rounded"
                    >
                      Placeholder 5
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <Link href="/blog">Blogs</Link>
              </li>

              <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <Link href="/about">About Us</Link>
              </li>

              <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <OrangeButton text="Get Your Quotation Today" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenuDesktop;
