import Icon1 from "../assets/cat1.png"
import Icon2 from "../assets/cat2.png"
import Icon3 from "../assets/cat3.png"
import Icon4 from "../assets/cat4.png"
import Icon5 from "../assets/cat5.png"
import Icon6 from "../assets/cat6.png"
import CategoriesItem from "./CatItem"
export default function Categories(){
    return(
        <> 
        <div className="bg-orange-100 md:px-28 "> 
            <div className="text-center py-9">
            <h3 className="text-orange-400 "> 
            Choose Categories
            </h3>
            <h1 className="font-bold text-3xl"> 
            Our Categories

            </h1>
            </div>
            <div className="flex justify-center flex-wrap "> 
            <CategoriesItem title="Marketing & Communication" content="58 Jobs Available" path={Icon1.src}/>
            <CategoriesItem opt="1" title="UI/UX Design" content="74 Jobs Available" path={Icon2.src}/>
            <CategoriesItem title="Finace Management" content="25 Jobs Available" path={Icon3.src}/>
            <CategoriesItem title="Project Management" content="118 Jobs Available" path={Icon4.src}/>
            <CategoriesItem title="Business & Consulting" content="80 Jobs Available" path={Icon5.src}/>
            <CategoriesItem title="Graphic Designer" content="158 Jobs Available" path={Icon6.src}/>
            </div>
        </div>
        </>
    )
}