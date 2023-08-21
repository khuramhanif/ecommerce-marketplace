import Image from "next/image";
import { HeroImg } from "@/app/componants/assets/exports";
import { BsCart } from "react-icons/bs";
import bazaar from "@/app/componants/assets/bazaar.webp"
import bustle from "@/app/componants/assets/bustle.webp"
import versace from "@/app/componants/assets/versace.webp"
import instyle from "@/app/componants/assets/instyle.webp"

const Hero = () => {
  const btn = "Start\n Shopping";
  return (
    <div className="py-5 flex justify-between items-center">
      <div className="max-w-xs">
        <button className="bg-blue-100 text-blue-600 py-2 px-4 font-semibold rounded-xl">
          Sale 70%
        </button>
        <h1 className="text-5xl py-6 text-gray-800 font-extrabold">An Industrial Take on Streetwear</h1>
        <p className="text-slate-600 py-6 text-lg font-medium">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        <button className=" flex gap-1 items-center bg-gray-900 ring-1 ring-slate-800 rounded-sm hover:scale-110 text-white py-2 px-6 font-semibold">
         <BsCart size={25}/>
          <p className="whitespace-pre leading-5">
            {btn}
          </p>
        </button>
        <div className="flex py-6 mt-4 gap-4">
          <Image src={bazaar} alt="Bazaar"/>
          <Image src={bustle} alt="Bustle"/>
          <Image src={versace} alt="Versac"/>
          <Image src={instyle} alt="InStyle"/>
        </div>
      </div>
      <div className="hidden md:flex rounded-full bg-pink-100">
        <Image src={HeroImg} alt="Hero image"></Image>
      </div>
      
    </div>
    
  );
};

export default Hero;
