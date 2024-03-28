import { Appbar } from "./appbar";


export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 pt-10 w-8/12">
          <div className="col-span-3">
            <div className="text-4xl font-extrabold pb-2">
              <div className="h-2.5 bg-gray-200 rounded-full w-8/12 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-6/12 mb-4"></div>
            </div>
            <div className="pb-4 text-slate-500">
            <div className="h-2 bg-gray-200 rounded-full max-w-[160px] mb-2.5"></div>
                </div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[560px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[520px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[540px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[500px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[570px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[540px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[520px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[570px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[550px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[520px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[550px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[520px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[580px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[500px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[550px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[560px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[580px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[500px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[560px]"></div>
          </div>
          <div className="col-span-1 pl-20">
            <div className="pb-4 text-slate-500">
            <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center">
                <svg
                  className="w-10 h-10 me-3 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <div className="px-3 text-xl font-bold max-h-full flex flex-col justify-center">
                <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};