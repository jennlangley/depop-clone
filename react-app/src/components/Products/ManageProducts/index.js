import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/product";

const ManageProducts = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        dispatch(getProducts()).then(() => setIsLoaded(true))
    }, [dispatch])

    const user = useSelector(state => state.session.user)
    const products = useSelector(state => Object.values(state.products).filter(product => product.userId = user.id))
    console.log(products)
    return (
        isLoaded &&
        <div>
        {Object.values(products).map(product => <div>{product.name}</div>)}
        </div>
    )
}
export default ManageProducts;