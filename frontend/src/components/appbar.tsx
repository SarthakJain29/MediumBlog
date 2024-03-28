import { Link } from "react-router-dom"
import { Avatar } from "./blogcard"


export const Appbar=()=>{
    return (
    <div className="flex max-w-screen border-b p-3 justify-between">
        <Link to={"/blogs"} className="font-semibold text-lg cursor-pointer item-center">
            Medium
        </Link>
        <div className="flex ">
            <Link to={"/publish"} className="pr-4">
            <button type="button" className="text-white bg-green-500 hover:bg-green-600 focus:outline-none font-medium rounded-full text-sm px-5 py-2 text-center">Publish</button>
            </Link>
        <div className="flex items-center justify-center">
        <Avatar name={"Sarthak"}/>
        </div>
            
        </div>

    </div>
    )
}