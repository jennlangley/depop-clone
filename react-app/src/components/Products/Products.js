
import Filters from "../Filters/Filters";
import ProductTile from "./ProductTile";
import Breadcrumb from "../ProductCategory/Breadcrumb";
import { useEffect, useState } from "react";

const Products = ({ products }) => {
    const [productsList, setProductsList] = useState(products);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [condition, setCondition] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        
    }, [price, category, condition, size])

    return (
        productsList &&
        <div>
            <Breadcrumb />
            
            <div className="productsFilterContainer">

                <div className="productFilters">
                    <div className="productFilter">
                        <label>Sort by</label>
                        <select>
                            <option value="" disabled selected>Price</option>
                            <option>Lowest to Highest</option>
                            <option>Highest to Lowest</option>
                        </select>
                    </div>
                </div>

                <div className="productsList">

                
                {Object.values(productsList).map((product, idx) => 
                    <ProductTile key={idx} product={product} />)
                }
                </div>
            </div>
            
        </div>
    )
}

export default Products;