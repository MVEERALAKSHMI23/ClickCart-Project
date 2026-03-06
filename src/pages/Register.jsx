import { useState } from "react";
import {useNavigate} from "react-router-dom";
import logo from "../assets/logo.png"

function Register(){
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name : "",
        email: "",
        password :""
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleRegister =(e)=>{
        e.preventDefault();
        if(!formData.name||!formData.email||!formData.password){
            alert("Please fill all fields");
            return;
        }
        const users = JSON.parse(localStorage.getItem("users"))||[];
        const userExists =users.find((user)=>user.email===formData.email);
        if(userExists){
            alert("User already exists");
            return;
        }
        users.push(formData);
        localStorage.setItem("users",JSON.stringify(users));
        alert("Registration Successful");
        navigate("/login");
    };

    return(
        <div style={{padding:"20px",textAlign:"center"}}>
            <img src={logo} alt="ClickCart Logo" style={{height:"80px",border:"1px solid none",borderRadius:"40px",padding:"5px"}}/>
            <h1 style={{textAlign:"center",fontWeight:"bold"}}>ClickCart</h1>
            <h1 style={{marginBottom:"10px",fontSize:"3xl"}}>Join us and discover better shopping...</h1>
            <h1 style={{fontWeight:"bold"}}>Register</h1>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="Enter your Name" style={{border:"1px solid black",borderRadius:"10px",marginTop:"10px",padding:"8px",color:"black"}} onChange={handleChange}/>
                <br /> <br />
                <input type="email" name="email" placeholder="Enter your Email" style={{border:"1px solid black",borderRadius:"10px",padding:"8px",color:"black"}} onChange={handleChange}/>
                <br /> <br />
                <input type="password" name="password" placeholder="Enter your Password" style={{border:"1px solid black",borderRadius:"10px",padding:"8px",color:"black"}} onChange={handleChange}/>
                <br /> <br />
                <button style={{border:"1px solid black",borderRadius:"10px",backgroundColor:"blue",padding:"8px"}} type="submit">Register</button>
                <p>If you are register already , kindly Sing in here.. <span onClick={()=>navigate("/login")} style={{backgroundColor:"blue",fontWeight:"bold",border:"1px solid black",cursor:"pointer",padding:"5px", marginBottom:"10px",borderRadius:"10px"}}>Login Here</span></p>
            </form>

        </div>
    );
}
 export default Register;