"use client"
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { NavbarArray, Navbaritems } from "../../utills/Navbar-items";
import { useState } from "react";


const MobileNavbar = () => {
  const [Expended, setExpended] = useState<Boolean>(false);
  
  return (
    <div>
      {
        <div className=" lg:hidden w-auto py-4 px-6 bg-slate-200">
          {NavbarArray.map((item: Navbaritems, index: number) => {
            return (
              <ul key={index}>
                <li className="duration-300">
                  <div
                    onClick={() => setExpended(!Expended)}
                    className="flex py-2 px-5 rounded-2xl duration-300
                     hover:bg-orange-400 justify-between items-center
                      text-lg font-semibold"
                  >
                    <div >{item.label}</div>
                    {item.isDropDown ? <MdArrowDropDown size={25} /> : ""}
                  </div>
                  <div className=" px-7  hover:bg-teal-300 rounded-2xl duration-300 ">
                    {Expended &&
                      item.dropDownData?.map(
                        (subitem: Navbaritems, index: number) => (
                          <Link href={subitem.href} key={index}>
                            <li className="hover:scale-110 hover:px-9">
                              {subitem.label}
                            </li>
                          </Link>
                        )
                      )}
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      }
    </div>
  );
};

export default MobileNavbar;
