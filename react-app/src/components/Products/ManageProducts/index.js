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
        <div className="ordersContainer">
            <h1>Manage your {Object.values(products).length} 
                {Object.values(products).length === 1 ? " product" : " products"}
            </h1>
            <div className="productsList">
                {Object.values(products).map((product, idx) => 
                    <div key={idx}>
                        <ProductTile product={product} />
                        <div className="editDeleteDiv">
                            <div className="manageButtonContainer">
                                <div className="confirmButtonDesign">
                                    <NavLink style={{color: "white"}} to={`/products/${product.id}/edit`}>
                                        Edit
                                    </NavLink>
                                </div>
                            </div>
                            
                            <div className="manageButtonContainer">
                                <OpenModalButton 
                                    modalComponent=<DeleteProduct productId={product.id} /> 
                                    buttonText=<button className="deleteButtonDesign">Delete</button> />
                            </div>
                        </div>
                        
                    </div>
                    )}
            </div>
        </div>
    )
}
export default ManageProducts;