import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProducts } from "../../../store/product";
import ProductTile from "../ProductTile";
import OpenModalButton from "../../OpenModalButton";
import DeleteProduct from "./DeleteProductModal";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './ManageProducts.css';

const ManageProducts = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    
    
    const user = useSelector(state => state.session.user)
    const products = useSelector(state => state.products)
    
    useEffect(() => {
        dispatch(getUserProducts(user.id)).then(() => setIsLoaded(true))
    }, [dispatch])

    if (!user) return <Redirect to='/products' />
    return (
        (isLoaded && user) &&
        <div className="ordersContainer">
            <h1>Manage your {Object.values(products).length} 
                {Object.values(products).length === 1 ? " product" : " products"}
            </h1>
            <div className="productsList">
                {Object.values(products).map((product, idx) => 
                    <div className="manageContainer" key={idx}>
                        <ProductTile product={product} />

                        {!product.sold ?
                        <div className="editDeleteDiv">
                            <div className="manageButtonContainer">
                                <NavLink style={{color: "white"}} to={`/products/${product.id}/edit`}>
                                    <div className="confirmButtonDesign">
                                            Edit
                                    </div>
                                </NavLink>
                            </div>
                            
                            <div className="manageButtonContainer">
                                <OpenModalButton 
                                    modalComponent=<DeleteProduct productId={product.id} /> 
                                    buttonText=<button className="deleteButtonDesign">Delete</button> />
                            </div>
                        </div>
                        :
                        <div className="productItem soldBox"><span className="sold">Sold</span></div>}
                    </div>
                    )}
            </div>
        </div>
    )
}
export default ManageProducts;