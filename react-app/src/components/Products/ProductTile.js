import './Products.css';

const ProductTile = ({ product }) => {

    return (
        <li className="productItem">
            <div className='productContainer'>
                <div>
                    <a href={`/products/${product.id}`}>
                        <img alt={product.id}></img>
                    </a>
                </div>
                <div className='productPriceSize'>
                    <div>${product.price}</div>
                    <div>{product.size}</div>
                </div>
            </div>
        </li>
    )
}

export default ProductTile;