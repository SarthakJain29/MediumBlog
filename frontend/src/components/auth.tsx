import { SignupInput } from "@sarthak2907/medium-common"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"


export const Auth = ({type}: {type: "signup" | "signin"}) =>{
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    });

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type=== "signin" ? "Dont have an account?": "Already have an account?"} 
                        <Link className="pl-2 underline" to={type==="signin" ? "/signup":"/signin"}>
                            {type === "signin" ? "signup":"signin"}
                        </Link>
        
                    </div>
                </div>
                <div className="pt-8">
                    {type === "signup" ? <LabelledInput label="Name" placeholder="Sarthak Jain..." onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }}/> : null}
                    <LabelledInput label="Email" placeholder="sarthakjain2907@gmail.com..." onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value   
                        })
                    }}/>
                    <LabelledInput label="Password" type={"password"} placeholder="1234" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}/>
                    <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup" ? "Sign up":"Sign in"}</button>

                </div>
            </div>
        </div>
            
    </div>
}


interface LabelledInputType{
    label: string,
    placeholder:string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}
function LabelledInput ({label, placeholder, onChange, type}: LabelledInputType){
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange= {onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}

