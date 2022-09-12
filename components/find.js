import imagejob from "../assets/work.png" 
export default function Finder(){
    return(
        <> 
        <div className="bg-orange-100 px-16 py-16 items-center md:flex"> 
            <div className="md:w-1/2 md:px-16"> 
                <h5 className="text-orange-400 py-1">How it Works </h5>
                <h1 className="font-bold text-3xl py-3">Easy Step To Find and Apply Your Dream Job </h1>
                <p className="py-2"> We will help you to find your dream job easily, let us
                     help you manage everything you need </p>
            <div className="bg-white rounded-xl mt-6 p-5"> 
                <h5 className="text-orange-400">Easy to upload Your Best CV and Portfolio </h5>
                <p className="mb-3" >You can upload your resume, CV, and portfolio directly to Job </p>
                <h5 className="text-orange-400">You Will Be Notified With All Updates </h5>
                <p className="mb-3">Get notified about new job vacancies. scheduled interview and
                     job application </p>
                <h5 className="text-orange-400">Apply for your dream job from the best company </h5>
                <p className="mb-3">We will provide recommendations for your choice companies from all over the world </p>
            </div>
            </div>
            <div className="md:w-1/2"> 
               <img src={imagejob.src}/>
            </div>
        </div>
        </>
    )
}