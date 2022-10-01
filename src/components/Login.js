import { useRef } from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router";

function Login() {
    const inputRef = useRef();
    const {login} = useAuth();
    const navigate = useNavigate();

    const location = useLocation();

    const handleLoginClick = ()=>{
        login(inputRef.current.value);
       const path = location.state.path;
       console.log("path:::::::::", path)
        navigate(path);

    }

    return (
        <div>
            <label> Username : <input type= "text" ref = {inputRef} /> </label>
            <button onClick ={handleLoginClick}> Login </button>
        </div>
    )
}

export default Login
