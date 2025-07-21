import { AuthProvider } from "@/context/AuthContext";
import Signup from "@/pages/Signup";

export default function Signuppage(){
    return(
        <AuthProvider>
            <Signup />
        </AuthProvider>
    );
}