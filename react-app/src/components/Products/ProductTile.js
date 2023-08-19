import './Products.css';

const ProductTile = ({ product }) => {

    return (
        <li className="productItem">
            <div className='productContainer'>
                <div className='imageTileContainer'>
                    <a href={`/products/${product.id}`}>
                        <img className='productTileImage' alt={product.id} src={product.imageUrl}></img>
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