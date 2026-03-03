import { Routes, Route } from "react-router-dom";
import { useLocation} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Footer from "./pages/Footer";


function App() {
  const location = useLocation();
  
  return(
  
      <div className="bg-blue-500 text-white text-3xl p-10 w-full min-h-screen">
      {location.pathname !=="/" && location.pathname !=="/login" && location.pathname !=="/register" && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/orders" element={<OrderHistory/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/admin" element={<Admin/>}/> 
      
    </Routes>
    <Footer/>
    </div>

  );
}

export default App;