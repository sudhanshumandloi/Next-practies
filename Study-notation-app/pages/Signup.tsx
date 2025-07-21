"use client";
import Template from "@/components/Template";
import signupimage from "@/assets/signup.png";
import { useAuth } from "@/context/AuthContext";

export default function Signup(){
    const {setIsLoggedIn } = useAuth();

    return(<div>
            <Template
                title={"Join the millions learning to code with StudyNotation "} 
                desc1={"Build skills for today, tomorrow, and beyound."}
                desc2={"Education to future-proof career."}
                image={signupimage}
                formtype={"signup"}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>);
}