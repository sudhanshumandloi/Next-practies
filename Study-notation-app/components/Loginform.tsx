"use client";

export default function Loginform({ setIsLoggedIn }: { setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <form>
            {/* Your login form fields here */}
            <button type="submit">Login</button>
        </form>
    );
}