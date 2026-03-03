import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const totalPrice = cartData.reduce((total, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        return total + price * quantity;
    }, 0);
    
    const [formData, setFormData] = useState({
        name: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
            const response = await fetch("http://localhost:5000/api/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId:"12345",
                    items:cartData,
                    totalAmount:totalPrice,
                    paymentMethod:"COD",
                    shippingAddress: formData
                }),
            });
            const data = await response.json();
            console.log(data);
            if (data.success){
                const currentUser =JSON.parse(localStorage.getItem("currentUser"));
                console.log(currentUser);
                const newOrder = {
                    id:Date.now(),
                    name : formData.name,
                    address:formData.address,
                    date:new Date().toLocaleString(),
                    user:currentUser?.email,
                    items:cartData,
                    total:totalPrice
                };
                const existingOrders = JSON.parse(localStorage.getItem("orders"))||[];
                existingOrders.push(newOrder);
                localStorage.setItem("orders",JSON.stringify(existingOrders));

                localStorage.setItem("cart",JSON.stringify([]));
                navigate("/success")
                window.location.reload();
            } else {
                alert("Payment failed");
            }
    };

    return (

        <div style={{ padding: "20px", color:"black" }}>
            <h1>Checkout</h1>
            <h2 style={{fontWeight:"bold"}}>Order Summary</h2>
            {cartData.length === 0 ? (
                <p>No items in cart</p>) : (cartData.map((item, index) => (
                    <div key={index}>
                        <p>
                            {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                        </p>
                    </div>
                ))
            )}
            <h2>Total : ₹{totalPrice}</h2>
            <hr />
            <h2 style={{margin:"2px",fontWeight:"bold"}}>Shipping Details</h2>
            <form onSubmit={handlePayment}>
                <input
                    type="text" name="name" placeholder="Full Name" style={{marginTop:"10px",border:"1px solid black",padding:"5px", marginBottom:"10px",borderRadius:"10px",color:"black"}}
                    onChange={handleChange}
                    required 
                />

                <br /><br />

                <input
                    type="text" name="address" placeholder="Address" style={{border:"1px solid black",padding:"5px", marginBottom:"10px",borderRadius:"10px",color:"black"}}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button style={{marginTop:"10px",border:"1px solid black",padding:"5px", marginBottom:"10px",borderRadius:"10px",color:"black",backgroundColor:"white"}} type="submit">
                    Pay Now
                </button>

            </form>

        </div>

    );

}

export default Checkout;