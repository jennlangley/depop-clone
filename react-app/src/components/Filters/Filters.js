import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortByPrice } from "../../store/product";
import './Filters.css';

const Filters = () => {
    const [condition, setCondition] = useState([]);
    const [price, setPrice] = useState([]);
    const [size, setSize] = useState([]);
    // const [category, setCategory] = useState([]);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sortByPrice("asc"))
    }, [price])

    return (
        <div className="productFilterSelectContainer">
            <div className="productFilter">
                <label>Sort by</label>
                <select>
                    <option value="" disabled selected>Price</option>
                    <option>Lowest to Highest</option>
                    <option>Highest to Lowest</option>
                </select>
            </div>
            <div className="productFilter">
                <label>Condition</label>
                <div>
                    <input type="checkbox" value="Used - Fair"></input>
                    <label value="Used - Fair">Used - Fair</label>
                </div>
                <div>
                    <input type="checkbox" value="Used - Good"></input>
                    <label value="Used - Good">Used - Good</label>
                </div>
                <div>
                    <input type="checkbox" value="Used - Excellent"></input>
                    <label value="Used - Excellent">Used - Excellent</label>
                </div>
                <div>
                    <input type="checkbox" value="Like new"></input>
                    <label value="Like new">Like new</label>
                </div>
                <div>
                    <input type="checkbox" value="Brand new"></input>
                    <label value="Brand new">Brand new</label>
                </div>
            </div>
        </div>
        
    )
}

export default Filters;