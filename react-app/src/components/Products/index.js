import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProducts } from "../../store/product";

const ProductsIndex = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <h1>hi!</h1>
        </>
    )
}

export default ProductsIndex;