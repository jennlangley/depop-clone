import './Products.css';

const ProductTile = ({ product }) => {

    return (
        <div className="productItem">
            <a href={`/products/${product.id}`}>
            <div className='productContainer'>
            
                <div className='imageTileContainer'>
                
                        <img className='productTileImage' alt={product.id} src={product.imageUrl}></img>
                    
                </div>
                <div className='productPriceSize'>
                    <div>${product.price}</div>
                    <div>{product.size}</div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default ProductTile;