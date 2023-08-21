"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import React from "react";
import { NavbarArray, Navbaritems } from "../../utills/Navbar-items";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "../subComponant/DropDown";
import MobileNavbar from "../subComponant/MobileNavbar";
const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<Boolean>(false);
  const [CartItemNumber , setCartItemNumber] = useState<number>(0)
  return (
    <section  className="sticky top-0">
      <div>
        <div className="bg-white flex items-center justify-between ">
          <div className="py-6 flex-shrink-0  ">
            <div className="w-36 flex space-x-12 font-medium text-lg items-center ">
              <Image width={500} height={500} src={"/logo.webp"} alt="logo" />
              <div className="hidden lg:flex space-x-16 font-medium text-lg items-center ">
                {NavbarArray.map((item: Navbaritems, index: number) => (
                  <ul key={index} className="cursor-pointer group">
                    <li className="flex items-center relative">
                      <div
                        className="hover:underline bg-slate-100"
                        
                      >
                        {item.label}
                      </div>
                      {item.isDropDown ? <MdArrowDropDown /> : ""}
                      <div className="invisible group-hover:visible absolute left-0 top-10 p-2 bg-gray-100 ">
                        {<DropDown item={item} />}
                      </div>
                    </li>
                  </ul>
                ))}
                <div className="border items-center flex px-3 rounded-md">
                  <BiSearch fill="blue" />
                  <input
                    type="text"
                    className="py-1 pr-5 pl-1 w-72"
                    placeholder="Search In Our Store"
                  />
                </div>
                <div className=" relative w-14 h-14 px-3 items-center py-3 rounded-full bg-zinc-200 ">
                  <BsCart size={30} />
                  <div className="absolute top-0 text-xs right-1 text-white  flex w-5 h-5 justify-center items-center rounded-full bg-red-600">
                    {CartItemNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <div className="flex lg:hidden">
                <RxCross1 size={45} />
              </div>
            ) : (
              <div className="flex lg:hidden">
                <RxHamburgerMenu size={45} />
              </div>
            )}
          </div>
        </div>
        {isNavbarOpen && <MobileNavbar />}
      </div>
    </section>
  );
};

export default Navbar;
