import ImageJob1 from "../assets/image-hero.png"
import Image from "next/image";
import {BiMap,BiSearchAlt } from "react-icons/bi";

export default function HeroSection(){
    return (
<> 
<div className="md:flex-row flex flex-col-reverse pb-9   bg-orange-100"> 
    <div className="lg:pl-40 px-9 md:pt-32 w-full  md:w-2/3"> 
    <h1 className="text-5xl py-4 font-bold"> 
    Find the job of your <span className="text-orange-400">Dreams</span>
    </h1>
    <p className="py-3"> 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Mollitia nobis corporis possimus aperiam harum at quas nisi, enim sed?
    </p>
    <h4 className="text-xl pt-6 font-semibold"> Trending Jobs keyword :</h4>
    <h5 className="text-orange-400 py-3 "> Web Designer  UI/UX Designer  Frontend</h5>
   <div className="bg-white  w-full py-2 px-5  rounded-full"> 
   <BiSearchAlt className="text-3xl inline-flex m-2 text-orange-400"/>
    <input type="text" placeholder="Job title or keyword" className="focus:outline-none" />
   
    <BiMap className="text-3xl hidden md:inline-flex m-2 text-orange-400"/>
    <input type="text" placeholder="Bandung, Indonesia" className="hidden md:inline-flex focus:outline-none"/>
    <button className="rounded-full bg-orange-400 text-white px-9  py-3 font-semibold"> Search</button>
   </div>
    </div>

    <div className="w-full  py-9 z-0 md:w-1/3 "> 
    <Image
        src={ImageJob1}
        alt="Any Text"
        layout="responsive"
       
      />
      
    </div>
</div>
</>
    ) ; 
}