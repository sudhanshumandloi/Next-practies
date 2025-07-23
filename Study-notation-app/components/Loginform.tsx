import React, { useState }from "react";
import { toast } from "react-toastify";
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import Link from "next/link";
import { useRouter } from "next/navigation";

type LoginformProps = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Loginform = ({setIsLoggedIn}: LoginformProps) => {

    const router = useRouter();

    const [formData, setFormdata] = useState({email:'', password:'' });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event : React.ChangeEvent<HTMLInputElement>){
        setFormdata( prevData => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
         ) )
    }

    function submitHandler(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        router.push("/dashboard");
        console.log("printing the formdata");
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-pink-500">*</sup>
                    </p>
                    <input required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>

                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Password<sup className="text-pink-500">*</sup>
                    </p>
                    <input required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="password"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />

                    <span className="absolute right-3 top-[38px] cursor-pointer" 
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword
                        ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                        : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                    </span>

                    <Link href="#">
                        <p className="text-xs mt-1 text-blue-400 max-w-max ml-auto">
                            Forget Password
                        </p>
                    </Link>
                </label>
                 
                <button className="bg-yellow-500 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6">
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default Loginform;