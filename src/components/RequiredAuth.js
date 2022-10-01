import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router";

function RequiredAuth({children}) {
    const {user} = useAuth();
    const location = useLocation();
    console.log("location::::",location)
    if(user) return (children);
    return (<Navigate to= "/login" state ={{"path": location.pathname}}/>)
    
    

}

export default RequiredAuth
