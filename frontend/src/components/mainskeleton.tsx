export const MainSkeleton=()=>{
    return(
        <div>
            <div role="status" className="animate-pulse">

            <div className="border-b border-slate-200 p-4  w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
            <div className="flex justify-center flex-col">
            <svg className="w-8 h-8 me-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
            </div>
        
            <div className="text-base font-normal text-slate-500 px-2">
            <div className="h-2  bg-gray-200 rounded-full w-20"></div>
        
            </div>
            <div className="text-base text-slate-500">
            <div className="h-2  bg-gray-200 rounded-full w-24"></div>
            </div>
        </div>
       
        <div className="text-xl pt-2 font-semibold">
        <div className="h-2.5 bg-gray-200 rounded-full max-w-[360px] mb-3"></div>
        </div>
        <div className="text-base t-1 font-extralight">
        <div className="h-2 bg-gray-200 rounded-full max-w-[500px] mb-2.5"></div>
        </div>
        <div className="text-sm font-thin pt-3">
        <div className="h-2 bg-gray-200 rounded-full max-w-[100px] mb-2.5"></div>
        </div>

    </div>







            </div>
        </div>

    )
}