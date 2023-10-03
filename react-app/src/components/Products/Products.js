
import Filters from "../Filters/Filters";
import ProductTile from "./ProductTile";
import Breadcrumb from "../ProductCategory/Breadcrumb";

const Products = ({ products }) => {
    
    return (
        products &&
        <div>
            <Breadcrumb />
            <div className="productsFilterContainer">

                <Filters />

                <div className="productsList">
                {Object.values(products).map((product, idx) => 
                    <ProductTile key={idx} product={product} />)
                }
                </div>
            </div>
            
        </div>
    )
}

export default Products;