
import { useState, useEffect, useMemo } from "react";
// import Filters from "../Filters/Filters";
import ProductTile from "./ProductTile";
import Breadcrumb from "../ProductCategory/Breadcrumb";

const Products = ({ products }) => {
    const [condition, setCondition] = useState([]);
    const [price, setPrice] = useState([]);
    const [size, setSize] = useState([]);
    // const [category, setCategory] = useState([]);

    useEffect(() => {
        let condition = [], price = [], size = []
        Object.values(products).forEach(product => {
            condition.push(product.condition);
            price.push(product.price);
            size.push(product.size);
        });
        setCondition(condition)
        setPrice(price)
        setSize(size)
    }, [products])
    console.log(condition, price, size);
    return (
        products &&
        <div>
            <Breadcrumb />
            <div className="productsFilterContainer">

                <div className="productFilter">
                    <label>Condition</label>
                    <select name="condition">
                        {condition.map((val, idx) => <option key={idx}>{val}</option>)}
                    </select>
                </div>

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