import { useParams } from "react-router";

function UserDetails() {
    const {id} = useParams();
    console.log("params:::::", id);
    return (
        <div>
            User {id} details
        </div>
    )
}

export default UserDetails
