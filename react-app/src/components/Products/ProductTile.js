import { useState } from 'react';
import './Products.css';

const ProductTile = ({ product }) => {
    const [imageIdx, setImageIdx] = useState(0);
    const images = product.images;
    const numImages = images.length;
    return (
        <div className="productItem">
            <a className='productTileLink' href={`/products/${product.id}`}>
            <div className='productContainer'>
            
                <div className='imageTileContainer'>
                    <img 
                    className='productTileImage' 
                    alt={product.id} 
                    src={product.images[imageIdx]?.imageUrl} 
                    onMouseLeave={e => setImageIdx(0)}
                    onMouseOver={e => (numImages > 1) ? setImageIdx(1) : null}    
                    />
                </div>
                <div className='productPriceSize'>
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                    <div>Size {product.size}</div>
                </div>
            </div>
            </a>
        </div>
    )
}

export default ProductTile;