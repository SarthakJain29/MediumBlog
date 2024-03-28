import { Link } from "react-router-dom"
import { Avatar } from "./blogcard"

export const Appbar=() =>{
    return <div className="border-b flex justify-betfween px-10 py-4">
        <Link to={"/blogs"} className="flex flex-col justify-center">
            Medium
        </Link>
        <div>
            <Avatar name="Sarthak"/> 
        </div>
    </div>
}