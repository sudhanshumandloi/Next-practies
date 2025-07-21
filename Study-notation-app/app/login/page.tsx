import { AuthProvider } from "@/context/AuthContext";
import Login from "@/pages/Login";

export default function LoginPage(){
    return(
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
}