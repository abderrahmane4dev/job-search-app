import imgbg from "../assets/Subscribe.png"
export default function Newsletter(){
    const styling = {
        backgroundImage: `url('${imgbg.src}')`,
        width: '100%',
        height: '100%',
       
    }
    return (
        <> 
        <div className="bg-orange-100 py-16">
        <div className="bg-orange-400 w-4/5  mx-auto rounded-3xl h-48">
            <div className=" px-4 bg-center py-9 text-center md:text-justify md:flex items-center justify-around  bg-repeat bg-cover  h-full" style={styling}>
            <div className="text-white font-bold py-4  text-xl lg:text-2xl"> 
            <h1> Never Want to Miss Any Job News?</h1>
            </div>
            <div className="rounded-full flex justify-between md:w-2/3 w-full lg:w-1/2 bg-white px-4 py-2"> 
             <input type="text" className="w-2/3 px-2 focus:outline-none" placeholder="Enter your email adress..."/>
            
             <button className="bg-orange-400 rounded-full px-4 py-2 text-white"> Subscribe</button> 
            </div>
            </div> 
        </div>
        </div>
        </>
    )
}