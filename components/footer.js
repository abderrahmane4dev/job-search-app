import Logo from "../assets/logo.png"
export default function Footer(){
    return(
        <>
        <div className="md:flex-row md:flex items-center justify-between flex-wrap flex-col  md:px-16 py-9 "> 
            <div className="md:w-1/4 w-full md:my-0 my-5 text-left"> 
                <img className="w-40 py-4 "src={Logo.src}/>
                <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Iure quia libero blanditiis autem aliquam numquam maxime praesentium aspernatur?</h5>
            </div>
            <div  className="md:my-0 my-5"> 
                <h3 className="font-bold py-2"> Employer</h3>
                <ul> 
                    <li className="hover:text-orange-400"> About Us</li>
                    <li className="hover:text-orange-400"> Careers</li>
                    <li className="hover:text-orange-400"> Blog</li>
                </ul>
            </div>
            <div  className="md:my-0 my-5">
            <h3 className="font-bold py-2"> Find Vacancy Based On</h3>
                <ul> 
                    <li className="hover:text-orange-400"> Help Center</li>
                    <li className="hover:text-orange-400"> Job Location
</li>
                    <li className="hover:text-orange-400"> Company Name</li>
                </ul>
            </div>
            <div  className="md:my-0 my-5">
            <h3 className="font-bold py-2 "> Address</h3>
                <ul > 
                    <li className="hover:text-orange-400"> hello@jobbo.com</li>
                    <li className="hover:text-orange-400">JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia</li>
                  
                </ul>
            </div>
        </div>

        </>
    )
}