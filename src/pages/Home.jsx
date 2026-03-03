import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="w-full min-h-screen bg-gradient-to-r 
            from-blue-200 to-purple-600">
            <div className="w-full h-[85svh] bg-gradient-to-r 
            from-blue-200 to-purple-600 flex flex-col justify-center items-center text-black text-center px-4">
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ClickCart</h1>
                <p className="text-lg md:text-2xl mb-6">Buy Best Products Online</p>
                <Link to ="register">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition mt-4">Sign Up</button>
                </Link>
                <Link to ="login">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition mt-4">Sign In</button>
                </Link>
                <p style={{maxWidth:"600px",margin : "20px auto",textAlign:"center",fontSize:"26px",lineHeight:"1.6"}}>Experience smarter shopping with ClickCart.From everyday essentials to trending products,we deliver quality and 
                    convenience right to your doorstep.Shop with confidence,powered by secure technology and trusted service.
                </p>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-6 g-10">
                <h2 className="text-3xl text-black font-bold text-center mb-8">
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
                <p className="bg-blue-500 p-6 rounded-lg shadow text-black text-center mt-6">
                   Explore our latest collections
                </p>
            </div>

        </div>
    );
}
export default Home;