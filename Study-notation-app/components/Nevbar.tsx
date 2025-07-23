"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import logo from "@/assets/Logo.svg";
import Image from "next/image";

export default function Nevbar(){
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link href="/">
                 <Image src={logo} alt='logo' width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex text-richblack-100 gap-x-3">
                    <li>
                        <Link href = "/" >Home</Link>
                    </li>
                    <li>
                        <Link href = "/" >About</Link>
                    </li>
                    <li>
                        <Link href = "/" >Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link href="/login">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                            border border-richblack-700"
                        >
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link href="/signup">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                            border border-richblack-700"
                        >
                            Signup
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link href ="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out");
                            }}
                            className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                            border border-richblack-700"
                        >
                            Log out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link href ="/dashbord">
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                            border border-richblack-700"
                        >
                            dashbord
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}