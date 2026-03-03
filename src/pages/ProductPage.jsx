import Admin from "./Admin";
import ProductList from "./ProductList";

function ProductPage (){
    return(
        <div>
            <h1 style={{textAlign:"center",text:"2xl"}}>All Products</h1>
            <ProductList/>
        </div>
    );
}

export default ProductPage;