import React, { useState } from "react";
import toast from "react-toast";
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const Loginform = ({setIsLoggedIn}) => {

    const navigat = useNavigate();

    const [formData, setFormdata] = useState({email:'', password:'' });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormdata( prevData => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
         ) )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        navigat("/dashbord")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    <p>
                        Email Address<sub>*</sub>
                    </p>
                    <input required
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="email"
                    />
                </label>

                <label>
                    <p>
                        Password<sub>*</sub>
                    </p>
                    <input required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        name="password"
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>

                    <Link to="#">
                        <p>Forget Password</p>
                    </Link>
                </label>
                 
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Loginform;