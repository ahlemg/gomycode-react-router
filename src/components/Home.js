import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

const handleOrderClick = () => {
    console.log("handleOrderClick");
    navigate("order-confirmed");

}

    return (
        <>
        <div>
          Home Page  
        </div>
        <button onClick = {handleOrderClick}>Place Order</button>
        </>
    )
}

export default Home
