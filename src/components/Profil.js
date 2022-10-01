import { useAuth } from "./auth";

function Profil() {
    const {user, logout}= useAuth();
   const  handleLogout =()=>{
    logout();
   }
    return (
        <>
        <div>
            {user} Profil Page
        </div>
       { user && <button onClick= {handleLogout}> Logout</button>}
       </>
    )
}

export default Profil
