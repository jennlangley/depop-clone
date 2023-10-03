import { useState, useEffect } from "react";


const Filters = () => {
    const [condition, setCondition] = useState([]);
    const [price, setPrice] = useState([]);
    const [size, setSize] = useState([]);
    // const [category, setCategory] = useState([]);

    useEffect(() => {
        
    }, [condition, price, size])

    return (
        <div>
            <div className="productFilter">
                <label>Sort by</label>
                <select>
                    <option value="" disabled selected>Price</option>
                    <option>Lowest to Highest</option>
                    <option>Highest to Lowest</option>
                </select>
            </div>
        </div>
        
    )
}

export default Filters;