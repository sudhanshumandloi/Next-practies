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
        console.log(accountData);
        router.push("/dashbord")

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* student-instructor tab */}
                <div>
                    <button>Student</button>
                    <button>Instructor</button>
                </div>

                 {/* firstname - lastname */}
                <div>
                    <label>
                        <p>First Name<sub>*</sub></p>
                        <input required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter your first name"
                            value={formData.firstname}
                        />
                    </label>
                    
                    <label>
                        <p>Last Name<sub>*</sub></p>
                        <input required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter your last name"
                            value={formData.lastname}
                        />
                    </label>
                </div>

                {/* email addree */}
                <div>
                    <label>
                        <p>Email Address<sub>*</sub></p>
                        <input required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter your email address"
                            value={formData.email}
                        />
                    </label>
                </div>
                
                {/* password - confirm password */}
                <div>
                    <label>
                        <p>Create Password<sub>*</sub></p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                       />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    
                    <label>
                        <p>Confirm Password<sub>*</sub></p>
                        <input required
                            type={showPassword ? ("text") : ("password")}
                            name="confirmpassword"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.confirmpassword}
                       />
                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>

                {/* submit button */}
                <div>
                    <button>Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Signupform;