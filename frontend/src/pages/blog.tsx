import { useParams } from "react-router-dom";
import { FullBlog } from "../components/fullblog";
import { BlogSkeleton } from "../components/Blogskeleton";
import { useBlog } from "../hooks";


export const Blog = () => {
    const {id} = useParams();
    const {loading,blog} = useBlog({
        id: id || ""
    }); 
    if(loading || !blog){
        return <div>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}