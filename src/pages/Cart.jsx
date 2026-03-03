import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem("cart"))||[];
        setCart(storedCart);
    },[]);

    const navigate = useNavigate();

    const increaseQuantity = (index)=>{
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
        localStorage.setItem("cart",JSON.stringify(updatedCart));
        window.location.reload();
    };

    const decreaseQuantity = (index)=>{
        const updatedCart = [...cart];
        if (updatedCart[index].quantity>1){
            updatedCart[index].quantity -=1;
        }
        setCart(updatedCart);
        localStorage.setItem("cart",JSON.stringify(updatedCart));
        window.location.reload();
    };

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((item,i)=> i !==index);
        setCart(updatedCart);
        localStorage.setItem("cart",JSON.stringify(updatedCart));
        window.location.reload();

    };

    const totalPrice = cart.reduce((total,item)=>{
        const price = parseFloat(item.price);
        const quantity = item.quantity||1;

        return total + price*quantity;
    },0);

    return (
        <div className=" P-6 bg-white text-black ">
            <h1 className="text-2xl font-bold mb-4">My Cart </h1>
            {cart.length ===0?(
                <p>Cart is empty</p>
            ):(
                cart.map((item,index)=> (
                <div key ={index} className="border rounded p-4 mb-4 flex flex-col md:flex-row justify-between items-center">
                 <h3>{item.name}</h3>
                 <p>{item.price}</p>
                 <p>Quantity: {item.quantity}</p>
                 <img src={item.image} width="100"/>
                 <br/>
                 <button style={{border:"1px solid black",borderRadius:"5px",padding:"7px"}} onClick={()=> increaseQuantity(index)}>+</button>
                 <button style={{border:"1px solid black",borderRadius:"5px",padding:"7px"}} onClick={()=> decreaseQuantity(index)}>-</button>
                 <button style={{border:"1px solid black",borderRadius:"5px",padding:"7px"}} onClick={()=>removeFromCart(index)}>Remove</button>
                 
                </div>
            ))
            )}
            <h2  className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded text-center">Total : {totalPrice}</h2>
            <button className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" onClick={()=>navigate("/checkout")}>Proceed to Checkout</button>
        </div>
    );
}

export default Cart ;
