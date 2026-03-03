import {useState, useEffect} from "react";
import axios from "axios";

function ProductList(){
  const [products, setProducts]= useState ([]);
  const [cart,setCart]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState("All");

  useEffect (()=>{
    fetchProducts ();
    const storedCart=JSON.parse(localStorage.getItem("cart"))||[];
    setCart(storedCart);},[]);

    const fetchProducts= async ()=>{
      try {
        const res=await axios.get("https://clickcart-backend-x84x.onrender.com/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log("error");
      } 
    }

    const addToCart=(product)=>{
      const existingCart=JSON.parse(localStorage.getItem("cart"))||[];
      const productIndex=existingCart.findIndex(
        (item)=>item._id===product._id
      );
      if(productIndex !== -1) {
        existingCart[productIndex].quantity += 1;  
      } else {
        existingCart.push({...product,quantity:1});
      }
      localStorage.setItem("cart" ,JSON.stringify(existingCart));
      setCart(existingCart);
      window.location.reload();
    };

    const filteredProducts=selectedCategory==="All"? products : products.filter(product=>product.category===selectedCategory);

  return(

    <div style={{backgroundColor:"grey"}}>
      <div style={{display: "flex", gap:"20px",justifyContent:"space-between",paddingTop:"10px",padding:"10px"}}>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Sports")}>Sports</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large"}} onClick={()=>setSelectedCategory("Stationery")}>Stationery</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Pet")}>Pet</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Home")}>Home</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Kids")}>Kids</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("T-shirt")}>T-shirt</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Laptop")}>Laptop</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Mobile")}>Mobile</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"white",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("Shoes")}>Shoes</button>
        <button style={{border:"1px solid grey",padding:"5px",borderRadius:"10px",backgroundColor:"Black",color:"White",fontSize:"Large",width:"72px"}} onClick={()=>setSelectedCategory("All")}>All</button>
    </div>

      <div style={{display:"flex",flexWrap:"wrap",gap:"20px",paddingLeft:"39px",paddingBottom:"10px"}} >
        {filteredProducts.map(product=>(
          <div key={product._id} >
          <div style={{border:"1px solid Grey",color:"black",backgroundColor:"white",borderRadius:"10px",padding:"5px",width:"180px",height:"400px",fontSize:"medium",marginTop:"10px",display:"flex",flexWrap:"wrap"}}>
          <div>
          <img style={{height:"100px",width:"100%"}} src={product.image} alt={product.name}/>
          <h3 style={{fontSize:"3xl",fontWeight:"bold"}}>{product.name}</h3>
          <p style={{fontSize:"2xl",fontWeight:"bold"}}>Rs. {product.price}</p>
          <p>{product.category}</p>
          <p style={{textOverflow:"ellipsis"}}>{product.description}</p>
          <button style={{border:"1px solid none",marginTop:"10px",borderRadius:"10px",padding:"5px",backgroundColor:"blue",color:"white"}} onClick={()=>addToCart(product)}>Add to Cart</button>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default ProductList;