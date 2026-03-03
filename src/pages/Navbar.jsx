import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar(){
    const navigate =useNavigate();
    const [user,setUser]=useState(null);
    const [cartCount, setCartCount]= useState(0);

     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem("cart"))||[];
        const totalQuantity = cart.reduce((total,item)=>{
            return total+ (item.quantity || 1);
        },0);
        setCartCount(totalQuantity);
    },[]);

    
    useEffect(()=>{
        const userInfo=
        JSON.parse(localStorage.getItem("currentUser"));
        setUser(userInfo);
    },[]);

    const handleLogout =()=>{
        localStorage.removeItem("currentUser");
        setUser(null);
        navigate("/")
    };

    return(
        
            <div style={{border:"1px solid grey",padding:"10px",borderRadius:"10px",backgroundColor:"grey",color:"black",fontSize:"2xl",width:"full",display:"flex",justifyContent:"space-between",fontWeight:"bold"}}>
            
            
            <Link to = "/products" className="hover:text-gray-300">Product</Link>
            <Link to = "/cart" className="hover:text-gray-300">Cart ({cartCount})</Link>
            <Link to = "/orders" className="hover:text-gray-300">Orders</Link>
            <Link to ="/admin" className="hover:text-gray-300"> Admin</Link>
            <div >
            {user ? (
                <>
                <span>Welcome to ClickCart</span>
                <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
                </>
             ):(
            <>
            <Link to = "/login" className="hover:text-gray-300">Login </Link>
            <Link to = "/register" className="hover:text-gray-300">Register</Link>
            </>
            )}
            </div>
        </div>
    )}


export default Navbar;