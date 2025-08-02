"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OrangeButton from "../buttons/OrangeButton";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  path: string;
}

export const NavigationMenuMobile: React.FC = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [showMobileSolutions, setShowMobileSolutions] =
    useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const solutionItems: NavItem[] = [
    {
      name: "Solutions for Apartment and Real Estate",
      path: "/solutions/apartment-real-estate",
    },
    { name: "Solutions for Retail", path: "/solutions/retail" },
    { name: "Solutions for Campus", path: "/solutions/campus" },
    { name: "Solutions for Hotels/Resorts", path: "/solutions/hotels-resorts" },
    { name: "Solutions for Bank", path: "/solutions/bank" },
  ];

  return (
    <div>
      <div className="w-screen flex justify-center items-center relative p-2 bg-theme-white h-auto">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="absolute left-3"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {/* Center Logo */}
        <div className="aspect-auto h-10">
          <Link href="/">
            <Image
              src="https://www.quadrasecurity.com/logo_color.svg"
              alt="logo"
              width={210}
              height={5}
              className="h-full object-cover"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isNavOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-full h-full bg-theme-white z-40 shadow-lg p-4 flex flex-col"
        >
          {/* Logo and Close Button inside the Drawer */}
          <div className="flex justify-between items-center mb-4">
            <Image
              src="https://www.quadrasecurity.com/logo_color.svg"
              width={200}
              height={52}
              alt="Quadra Security Logo"
              className="mt-3"
            />
            <button onClick={() => setIsNavOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                    pathname === item.path
                      ? "text-[#2b1ca0]"
                      : "hover:bg-gray-200 text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Solutions Toggle */}
            <li>
              <button
                onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                className="flex justify-between items-center w-full px-3 py-2 rounded-xl text-left hover:bg-gray-200 text-black"
              >
                <span className="font-medium">Solutions</span>
                {showMobileSolutions ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {showMobileSolutions && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 mt-2 flex flex-col gap-2"
                >
                  {solutionItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={`block px-3 py-2 rounded-md text-sm ${
                          pathname === item.path
                            ? "text-[#2e1dae] font-semibold"
                            : "hover:bg-white text-black"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>

            {/* CTA Button */}
            <li>
              <div className="w-full py-2 px-3 text-sm rounded-sm">
                <OrangeButton text="Get your Quotation Today" />
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};
