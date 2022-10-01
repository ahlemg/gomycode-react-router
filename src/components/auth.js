import { createContext, useState, useContext } from "react";

const authContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (usr)=> {
        setUser(usr);
    }

    const logout = () =>{
        setUser(null);

    }
     return (
         < authContext.Provider value ={{user, login, logout}}>
             {children}

         </authContext.Provider>
     )
}
export const useAuth = () => {
    return useContext(authContext);

}