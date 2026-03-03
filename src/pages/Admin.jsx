import {useEffect, useState } from 'react';
import axios from "axios";

function Admin() {
  const [products, setProducts]= useState([]);
  const [name,setName]= useState("");
  const [price,setPrice]= useState("");
  const [image,setImage] = useState ("");
  const [category,setCategory]=useState("");
  const [description,setDescription] = useState ("");
  const [editId,setEditId] = useState(null);


  const user =JSON.parse(localStorage.getItem("currentUser"));
  if (!user || !user.isAdmin){
    return <h1>Access Denied</h1>;
  }
   useEffect(()=>{
    fetchProducts();
   },[]);
   const fetchProducts=async ()=>{
    try {
      const res=await axios.get("https://clickcart-backend-x84x.onrender.com/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editId !== null)
       {
      await axios.put(`https://clickcart-backend-x84x.onrender.com/api/products/${editId}`,{name,price,image,category,description});
      alert("Product Updated");
      setEditId(null);
    } else {
       await axios.post("https://clickcart-backend-x84x.onrender.com/api/products",{name,price,image,category,description});
  
  alert("Product Added");
    }
  setName("");
  setPrice("");
  setImage("");
  setCategory("");
  setDescription("");
  setEditId(null);
  fetchProducts();
  }
  catch (error){
    console.log(error);
  }
};

const handleEdit = (product) => {
  setEditId(product._id);
  setName(product.name);
  setPrice(product.price);
  setImage(product.image);
  setCategory(product.category);
  setDescription(product.description);
};

const deleteProduct = async (id) => {
  
  try{
  await axios.delete(`https://clickcart-backend-x84x.onrender.com/api/products/${id}`);
  fetchProducts();
  } catch (error){
    console.log(error);
  }
};

return(
  <div>

    <h2>Add / Edit Product</h2>

<form onSubmit={handleSubmit}>
  <input type="text" placeholder="Product Name" value={name} className="bg-blue-50 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" onChange={(e)=>setName(e.target.value)} />
  <input type="number" placeholder="Price" value={price} className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" onChange={(e)=>setPrice(e.target.value)} />
  <input type="text" placeholder="Image URL" value={image} className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" onChange={(e)=>setImage(e.target.value)} />
  <input type="text" placeholder="Category" value={category} className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" onChange={(e)=>setCategory(e.target.value)} />
  <input type="text" placeholder="Description" value={description} className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" onChange={(e)=>setDescription(e.target.value)} />
  <button className="bg-blue-100 hover:bg-blue-600 text-black w-full mt-3 py-2 rounded" type="submit">{editId ? "Update" : "Add Product "}</button>
</form>

<h2>All Products</h2>

<div style={{backgroundColor:"white", color:"black",display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"10px",padding:"30px"}}>
  {products.map((product)=>(
    <div style={{border:"2px solid grey",borderRadius:"10px",padding:"5px",width:"19%",fontSize:"medium"}} key={product._id}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name}/>
      <p>Price : {product.price}</p>
      <p>Category:{product.category}</p>
      <p>{product.description}</p>
      <button style={{border:"1px solid black", color:"white",backgroundColor:"blue",borderRadius:"10px", marginRight:"10px",width:"60px",height:"40px",alignItems:"center"}} onClick={()=>handleEdit(product)}>Edit</button>
      <button style={{border:"1px solid black", color:"white",backgroundColor:"Red",borderRadius:"10px",width:"60px",height:"40px",padding:"5px"}} onClick={()=>deleteProduct(product._id)}>Delete</button>
      </div>
  ))}
</div>
</div>
);
}

export default Admin;