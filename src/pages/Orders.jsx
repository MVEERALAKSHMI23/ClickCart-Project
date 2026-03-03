import { useState, useEffect } from "react";

function Orders(){
    const [orders,setOrders]=useState([]);
    const currentUser=JSON.parse(localStorage.getItem("currentUser"));

    useEffect(()=>{
        const allOrders=JSON.parse(localStorage.getItem("orders"))||[];
        const userOrders = allOrders.filter(order=>order.user===currentUser.email);
        setOrders(userOrders);
    },[]);

    return(
        <div >
            <h2>My Orders</h2>
             
            {orders.length===0?(<p>No orders yet</p>):(
                orders.map(order=>(
                    
                    <div key={order.id} style={{border:"1px solid gray",padding:"10px",margin:"10px"}}>
                        <h3>Order #{order.id}</h3>
                        <p>Name : {order.name}</p>
                        <p>Address : {order.address}</p>
                        <p>Date : {order.date}</p>
                        <p>Total : Rs {order.total}</p>
                        <h4>Products : </h4>
                        {order.items?.map((item,index) => (
                            <p key={index}>
                                {item.name}*{item.quantity}= Rs 
                                {item.price*item.quantity}
                            </p>
                        ))}
                        </div>
                ))
            )}
        </div>
       
    );
}

export default Orders;