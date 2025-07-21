"use client";
import frame from "@/assets/frame.png"
import Image from "next/image";
import Signupform from "./Signupform";
import Loginform from "./Loginform";
import type { StaticImageData } from "next/image";

interface tempobj {
    title: string;
    desc1: string;
    desc2: string;
    image: StaticImageData;
    formtype: "login" | "signup";
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Template({title, desc1, desc2, image, formtype, setIsLoggedIn}: tempobj){
    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype === "signup" ?
                (<Signupform setIsLoggedIn={setIsLoggedIn} />):
                (<Loginform setIsLoggedIn={setIsLoggedIn} />)
                }

                <div>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div>
                <Image src={frame} alt="frame" height={584} width={558} loading="lazy"/>
                <Image src={image} alt="student" height={490} width={558} loading="lazy"/>
            </div>
        </div>
    );
}