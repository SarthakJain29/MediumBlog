import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id:string
}

export const BlogCard= ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps)=>{
    return (
    <Link to={`/blog/${id}`} >
    
    <div className="border-b border-slate-200 p-4  w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} />
            </div>
        
            <div className="text-base font-normal text-slate-800 px-2">
            {authorName}
            </div>
            <div className="text-base text-slate-500">
            {publishedDate}
            </div>
        </div>
       
        <div className="text-xl pt-2 font-semibold">
            {title}
        </div>
        <div className="text-base t-1 font-extralight">
            {content.slice(0,100)+ "..."}
        </div>
        <div className="text-sm font-thin pt-3">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>

    </div> </Link>
    )
}

 export function Avatar({name}: {name:string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> 
    <span className="text-l text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
 }