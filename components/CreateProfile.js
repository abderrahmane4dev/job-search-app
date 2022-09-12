import ImageProfile from "../assets/profile.png"
export default function Profile(){
    return(
        <> 
        <div className="md:flex items-center md:px-9 bg-orange-100"> 
            <div className="md:w-1/2"> 
           <img src={ImageProfile.src}/>
            </div>
            <div className="md:w-1/2 px-16"> 
            <h5 className="text-orange-400 py-4">Create Profile </h5>
            <h1 className="font-bold text-3xl py-4"> Build Your Personal Account Profile</h1>
            <p className="py-4">Create an account for the job information you want, get daily notifications and you
             can easily apply directly to the company you want and create an account now for free </p>
            <button className="bg-orange-400 font-semibold  text-white px-6 py-2 rounded-full"> Create Account  </button>
            </div>
        </div>
        </>
    )
}