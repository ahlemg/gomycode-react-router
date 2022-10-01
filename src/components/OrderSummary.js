import { useNavigate } from "react-router-dom";

function OrderSummary() {
    const nav1 = useNavigate();
    return (
        <>
        <div>
           Order Confirmed 
        </div>
        <button onClick = {()=> nav1(-1)}> Go Back</button>
        </>
    )
}

export default OrderSummary
