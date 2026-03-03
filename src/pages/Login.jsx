import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 function Login() {
    const navigate = useNavigate();
    const [formData, setFormData]= useState({
        email:"",
        password:""
    });

       const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
       };
       const handleLogin=async(e)=>{
        e.preventDefault();
        const response=await 
        fetch("https://clickcart-backend-x84x.onrender.com/api/auth/login",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        const data =await response.json();
        console.log(data);
        localStorage.setItem("currentUser",JSON.stringify(data));
              alert("Login successful");
        if (data.isAdmin){
            navigate("/admin");
        } else {
            navigate("/products");
        }
        
        
    };

    return(
        <div style={{padding:"20px",textAlign:"center"}}>
            <h1 style={{color:"white",marginBottom:"10px"}}>Hello Welcome back...Your next great purchase is just a login away..</h1>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" style={{border:"1px solid black",padding:"5px", marginTop:"10px",borderRadius:"10px",color:"black"}} onChange={handleChange}/>
                <br/> <br/>
                <input type="password" name="password" placeholder="Password" style={{border:"1px solid black",padding:"5px", marginBottom:"10px",borderRadius:"10px",color:"black"}} onChange={handleChange}/>
                <br/> <br/>

                <button style={{border:"1px solid black",padding:"5px", marginBottom:"10px",backgroundColor:"blue", borderRadius:"10px",fontWeight:"bold"}} type="submit">Login</button>
                 <p>If you are not register already , kindly Sing up here.. <span onClick={()=>navigate("/register")} style={{backgroundColor:"blue",fontWeight:"bold",border:"1px solid black",cursor:"pointer",padding:"5px", marginBottom:"10px",borderRadius:"10px"}}>Register Here</span></p>
            </form>

        </div>
    );
 }

 export default Login;