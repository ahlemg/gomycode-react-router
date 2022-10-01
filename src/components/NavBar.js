import { Link, NavLink } from "react-router-dom";

function NavBar() {
    const styleLink =  ({isActive}) => {

        console.log(isActive);
        return (
            {
                fontWeight : isActive?"bold": "normal",
                textDecoration : isActive?"none": "underline"
            }
        )

    }
    return (
        <nav>
            <NavLink   to = "/"  end style ={styleLink}> Home</NavLink>
            <NavLink to = "about" style ={styleLink} > About</NavLink>
            <NavLink to = "products" style ={styleLink} > Products</NavLink>
            <NavLink to = "profil" style ={styleLink} > Profil</NavLink>
        </nav>
    )
}

export default NavBar
