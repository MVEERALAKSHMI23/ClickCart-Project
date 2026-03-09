import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

function Home(){
    return(
        <div className=" w-full min-h-screen bg-[url('https://th.bing.com/th/id/OIP.biwz33XdHOMq-HiJpPcYDAHaE8?w=260&h=180&c=7&r=0&o=7&pid=1.7&rm=3')] bg-cover bg-center">
                <img src={logo} alt="ClickCart Logo" style={{height:"80px",border:"1px solid none",borderRadius:"40px",padding:"5px"}}/>
            <div className="w-full h-[85svh] flex flex-col justify-center items-center text-white text-center px-4">
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ClickCart</h1>
                <p className="text-lg md:text-2xl mb-6 font-bold">Buy Best Products Online</p>
                <Link to ="register">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition mt-4">Sign Up</button>
                </Link>
                <Link to ="login">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition mt-4">Sign In</button>
                </Link>
                <p style={{maxWidth:"600px",margin : "20px auto",textAlign:"center",fontSize:"26px",lineHeight:"1.6", fontWeight:"bold"}}>Experience smarter shopping with ClickCart.From everyday essentials to trending products,we deliver quality and 
                    convenience right to your doorstep.Shop with confidence,powered by secure technology and trusted service.
                </p>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-6 g-10">
                <h2 className="text-3xl text-white font-bold text-center mb-8">
                    Why Choose ClickCart?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                        Fast Delivary
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                        Best Prices
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow text-center">
                        Quality Product
                    </div>
                </div>
                <p className="bg-blue-500 p-6 rounded-lg shadow text-white text-center mt-6">
                   Explore our latest collections
                </p>
            </div>

        </div>
    );
}
export default Home;