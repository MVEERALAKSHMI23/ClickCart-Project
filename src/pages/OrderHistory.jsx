import { useState, useEffect } from "react";

function OrderHistory(){
    const [orders,setOrders] = useState ([]);
    useEffect(()=>{
        const storedOrders = JSON.parse(localStorage.getItem("orders"))||[];
        setOrders(storedOrders);
    },[]);
    return(
        <div style={{padding:"20px"}}>
            <h1>My Orders</h1>
            {orders.length ===0?(
                <p>No orders found</p>

            ):(
                orders.map((order,index)=>(
                    <div key={index} style={{border:"1px solid gray",padding:"10px",marginBottom:"15px"}}>
                        <h3>Order #{index+1}</h3>
                        <p><strong>Name:</strong>{order.customerName}</p>
                        <p><strong>Address:</strong>{order.address}</p>
                        <p><strong>Date:</strong>{order.date}</p>
                        <p><strong>Total:</strong>{order.total}</p>
                        <h4>Products:</h4>
                        {order.items.map((item,i)=>(
                            <p key={i}>{item.name}*{item.quantity}={item.price * item.quantity}</p>
                        ))}
                        </div>
                ))
            )}

        </div>
    );
}
 export default OrderHistory;