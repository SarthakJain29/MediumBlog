import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blogcard"
import { MainSkeleton } from "../components/mainskeleton"
import { useBlogs } from "../hooks"


export const Blogs=()=>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <MainSkeleton/>
        </div>
    }
    return <div >
        <Appbar/>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={(blog.id)}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content} 
                    publishedDate="26th feb 2024" /> )}
                 
            </div>
        </div>
    </div> 
}