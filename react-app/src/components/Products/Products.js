
import ProductTile from "./ProductTile";

const Products = ({ products }) => {
    
    return (
        products &&
        <div className="productsList">
        {Object.values(products).map((product, idx) => <ProductTile key={idx} product={product} />)}
        </div>
    )
}

export default Products;