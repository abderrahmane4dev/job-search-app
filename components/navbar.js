import img from "../assets/logo.png"

import Link from "next/link";
export default function Navbar(){
  const navbar = [
    {name:"Home" , path:"#"}, 
    {name:"Employer" , path:"#"}, 
    {name:"Candidate" , path:"#"}, 

  ]

    return (
<> 
<div className="flex bg-orange-100 md:px-16 py-3 items-center justify-between w-full"> 

   <div className="text-left w-1/3"> 
    <img className="w-1/3"src={img.src}/> 
   </div>

   <div className="md:flex hidden px-9  w-1/3"> 
   <ul className="flex w-full"> 
    {navbar.map((nav,index)=> 
  <li className="px-5" key={index}> 
      <Link  href={`${nav.path}`}> 
      {nav.name}
      </Link>
  </li>
    )
    }
  
  
   </ul>

   </div>
   <div className="md:flex bg-sky-400 md:justify-center  w-1/3"> 
  <a className="bg-red-400 py-2"> Login </a>
  <button className="bg-orange-400 ml-3 text-white px-7 rounded-full py-2"> Sign up</button>
   </div>
</div>
</>
    );
};