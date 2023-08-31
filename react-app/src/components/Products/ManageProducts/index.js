import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/product";
import ProductTile from "../ProductTile";
import OpenModalButton from "../../OpenModalButton";
import DeleteProduct from "./DeleteProductModal";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ManageProducts = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const user = useSelector(state => state.session.user)
    const products = useSelector(state => Object.values(state.products).filter(product => product.userId === user?.id))
    if (!user) return <Redirect to='/products' />
    return (
        (isLoaded && user) &&
        <div className="">
            <h3 id="modal-title">Manage your {Object.values(products).length} 
            {Object.values(products).length === 1 ? " product" : " products"}</h3>
            <div className="productsList">
                {Object.values(products).map((product, idx) => 
                    <div key={idx}>
                        <ProductTile product={product} />
                        <div className="editDeleteDiv">
                            <div><NavLink to={`/products/${product.id}/edit`}><button className="confirmButtonDesign">Edit</button></NavLink></div>
                            <div><OpenModalButton modalComponent=<DeleteProduct productId={product.id} /> buttonText={<div className="deleteButtonDesign">Delete</div>} /></div>
                        </div>
                        
                    </div>
                    )}
            </div>
        </div>
    )
}
export default ManageProducts;