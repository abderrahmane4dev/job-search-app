import imgSponsor1 from "../assets/slack.png"
import imgSponsor2 from "../assets/microsoft.png"
import imgSponsor3 from "../assets/google.png"
import imgSponsor4 from "../assets/airbnb.png"
export default function Sponsor(){
    return(
        <> 
        <div className="text-center md:px-16 px-9 pt-9"> 
            <h1> 
            Join Most Well Known <span className="text-orange-400">Companies </span>Around The World
            </h1>
            <div className="flex justify-around  pt-16 flex-wrap md:flex-nowrap w-full"> 
            <div  className="w-1/5 m-9">  <img  src={imgSponsor1.src}/></div>
            <div  className="w-1/5 m-9 ">  <img src={imgSponsor2.src}/></div>
            <div  className="w-1/5 m-9 ">  <img  src={imgSponsor3.src}/></div>
            <div  className="w-1/5 m-9 ">  <img  src={imgSponsor4.src}/></div>
         
               
              
            </div>
        </div>
        </>
    )
}