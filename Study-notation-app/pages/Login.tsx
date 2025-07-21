"use client";
import Template from "@/components/Template";
import loginimage from "@/assets/login.png";
import { useAuth } from "@/context/AuthContext";


export default function Login(){
    const {setIsLoggedIn } = useAuth();
    return(

        <Template 
           title={"Welcome Back "}     
            desc1={"Build skills for today, tomorrow, and beyound."} 
            desc2={"Education to future-proof career."}
            image={loginimage}
            formtype={"login"}
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}