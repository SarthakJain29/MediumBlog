import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blogcard"


export const Blogs=()=>{
    return <div >
        <Appbar/>
        <div className="flex justify-center">
            <div className="fmax-w-xl">
                <BlogCard
                    authorName="Sarthak Jain"
                    title={"How an ugly single page website makes 5000$ a month with affiliate marketing"}
                    content="How and ugly single page website makes 5000$ a month with affiliate marketingHow and ugly single page website makes 5000$ a month with affiliate marketingHow and ugly single page website makes 5000$ a month with affiliate marketing " 
                    publishedDate="26th feb 2024" /> 
                <BlogCard
                    authorName="Sarthak Jain"
                    title={"How an ugly single page website makes 5000$ a month with affiliate marketing"}
                    content="How and ugly single page website makes 5000$ a month with affiliate marketingHow and ugly single page website makes 5000$ a month with affiliate marketingHow and ugly single page website makes 5000$ a month with affiliate marketing " 
                    publishedDate="26th feb 2024" /> 
                <BlogCard
                    authorName="Sarthak Jain"
                    title={"How an ugly single page website makes 5000$ a month with affiliate marketing"}
                    content="How and ugly single page website makes 5000$ a month with affiliate marketingHow and ugly single page website makes 5000$ a month with affiliate marketingHow and ugly single page website makes 5000$ a month with affiliate marketing " 
                    publishedDate="26th feb 2024" />   
            </div>
        </div>
    </div> 
}