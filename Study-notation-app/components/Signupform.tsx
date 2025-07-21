"use client";

export default function Signupform({ setIsLoggedIn }: { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }){
    return(
        <form>
            {/* Your login form fields here */}
            <button type="submit">sign up</button>
        </form>);
}