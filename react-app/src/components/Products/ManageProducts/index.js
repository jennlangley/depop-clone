import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/product";
import ProductTile from "../ProductTile";

const ManageProducts = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const user = useSelector(state => state.session.user)
    const products = useSelector(state => Object.values(state.products).filter(product => product.userId === user.id))

    return (
        isLoaded &&
        <div className="">
            <h3>Manage your {Object.values(products).length} 
            {Object.values(products).length === 1 ? " product" : " products"}</h3>
            <div className="productsList">
                {Object.values(products).map((product, idx) => 
                    <div>
                        <ProductTile key={idx} product={product} />
                        <div className="editDeleteDiv">
                            <button className="confirmButtonDesign">Edit</button>
                            <button className="confirmButtonDesign">Delete</button>
                        </div>
                        
                    </div>
                    )}
            </div>
        </div>
    )
}
export default ManageProducts;