import {Link} from "react-router-dom";

function Success() {
    return(
        <div style={{padding:"40px",textAlign:"center"}}>
            <h1>Order placed Successfully!</h1>
            <p>Thank you for shopping with us.</p>
            <Link to="/products">
                <button className="bg-white text-blue-600 px-6 py-3 mt-6 rounded-lg font-bold hover:bg-gray-200 transition">Continue Shopping..</button>
            </Link>
        </div>
    );
}
 export default Success;