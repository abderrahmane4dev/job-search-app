import img from "../assets/logo.png"
import { useState } from "react";
import {AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
export default function Navbar(){
  const navbar = [
    {name:"Home" , path:"#"}, 
    {name:"Employer" , path:"#"}, 
    {name:"Candidate" , path:"#"}, 

  ]
  const [open,setOpen]=useState(false);
  const [color,setColor]=useState(false);

  const changeColor= ()=>{
        if(window.scrollY>=90){
          setColor(true)
        }else{
          setColor(false)
        }
  }
  globalThis.window?.addEventListener("scroll",changeColor)
 
    return (
<> 
<div className={`flex fixed ${color ? 'bg-white text-orange-400 ' : 'bg-orange-100'} px-5 lg:px-16 py-3 z-20 items-center justify-between w-full`}> 

   <div className="text-left w-1/2 md:w-1/3"> 
    <img className="w-1/3"src={img.src}/> 
   </div>
 
   <div className={`flex md:bg-transparent md:static bg-white font-semibold w-full transition-all duration-500 ease-in absolute ${open ? 'top-20 left-0 ':'left-[-990px] top-20  '} md:w-1/3`}> 
   
   <ul className="flex md:flex-row items-center justify-center  flex-col w-full"> 
    {navbar.map((nav,index)=> 
  <li className="md:px-5  md:py-0 py-5 " key={index}> 
      <Link  href={`${nav.path}`}> 
      {nav.name}
      </Link>
  </li>
    )
    }
  
  
   </ul>

   </div>
   <div className={`flex md:flex-row flex-col items-center md:py-0 py-5 font-semibold md:bg-transparent bg-white md:justify-end md:w-1/2 w-full md:static transition-all duration-500 ease-in absolute  ${open ? 'top-80  left-0 ':'left-[-990px] top-80'}`}> 
  <a className=" py-2"> Login </a>
  <button className="bg-orange-400 md:ml-3 text-white px-7 rounded-full py-2"> Sign up</button>
   </div>
   <div onClick={()=>setOpen(!open)} className={`text-3xl   cursor-pointer z-20 md:hidden`}>
    
    <AiOutlineMenu className="text-black"/>
     </div>
</div>
</>
    );
};