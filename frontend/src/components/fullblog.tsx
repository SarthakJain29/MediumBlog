import { Blog } from "../hooks";
import { Appbar } from "./appbar";
import { Avatar } from "./blogcard";


export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
            <div className="grid grid-cols-4 pt-10 w-8/12">
                <div className="col-span-3">
                    <div className="text-4xl font-bold pb-2">{blog.title}</div>
                    <div className="pb-4 text-slate-600">Posted on 23 March, 2025</div>
                    <div>{blog.content}</div>
                </div>
                <div className="col-span-1 pl-20">
                    <div className="pb-4 text-slate-500">Author</div>
                    <div className="flex">
                        <div className="flex flex-col justify-center">
                            <Avatar name={blog.author.name}/>
                        </div>
                        <div className="px-3 text-xl font-bold max-h-full flex flex-col justify-center">
                            {blog.author.name || "Anonymous"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};