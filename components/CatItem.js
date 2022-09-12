export default function CategoriesItem(props){
    return(
        <> 
        <div className={`flex justify-around w-60 h-28 m-5  items-center ${props.opt=="1" ? 'bg-orange-400 text-white ':'bg-white'} py-6 px-6 rounded-2xl`}> 
            <div className="w-12 h-12  "> 
            <img src={props.path}/>
            </div>
            <div className="m-6 "> 
            <h5 className="font-bold text-sm "> {props.title}</h5>
            <p className="text-sm"> {props.content}</p>
            </div>
        </div>
        </>
    )
}