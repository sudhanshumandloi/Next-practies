import React, { useState } from "react";
import {toast} from "react-toastify";
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { useRouter } from "next/navigation";

type Signupformprops = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
const Signupform = ({setIsLoggedIn}: Signupformprops) => {

    const router = useRouter();

    const [formData, setFormdata] = useState({
        firstname:'', lastname:'', email:'', password:'', confirmpassword:''
    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [accountType, setAccountType] = useState("student");


    const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setFormdata( prevData => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
         ) )
    }

    const submitHandler = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password do not match");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("account is created");
        const accountData = {
            ...formData
        };
        const finalData ={
            ...accountData,
            accountType
        };
        console.log("printing the final aacount data");
        console.log(finalData);
        router.push("/dashboard")

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* student-instructor tab */}
                <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                    <button className={`${accountType === "student"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-500`}
                        onClick={() => setAccountType("student")}
                    >
                        Student
                    </button>
                    <button className={`${accountType === "instructor"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                        } py-2 px-5 rounded-full transition-all duration-500`}
                        onClick={() => setAccountType("instructor")}
                    >
                        Instructor
                    </button>
                </div>

                 {/* firstname - lastname */}
                <div className="w-full flex gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup className="text-pink-500">*</sup>
                        </p>
                        <input required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter your first name"
                            value={formData.firstname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                    
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-pink-500">*</sup>
                        </p>
                        <input required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter your last name"
                            value={formData.lastname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* email addree */}
                <div className="mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Email Address<sup className="text-pink-500">*</sup>
                        </p>
                        <input required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter your email address"
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>
                
                {/* password - confirm password */}
                <div className="w-full flex gap-x-4 mt-[20px]">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-pink-500">*</sup>
                        </p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                       />
                        <span className="absolute right-3 top-[38px] cursor-pointer" 
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword
                            ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                            : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                    
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-pink-500">*</sup>
                        </p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.confirmpassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                       />
                        <span className="absolute right-3 top-[38px] cursor-pointer" 
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword
                            ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                            : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                </div>

                {/* submit button */}
                <div>
                    <button className="w-full bg-yellow-500 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signupform;