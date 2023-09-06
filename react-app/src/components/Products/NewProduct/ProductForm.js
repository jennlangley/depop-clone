import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as productsActions from '../../../store/product';
import * as imagesActions from "../../../store/image";
import './ProductForm.css'

const ProductForm = ({ product }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    if (!user || (product && (user.id !== product.userId))) history.push('/products')

    const productCategory = useSelector(state => state.categories[product?.categoryId])
    const productSubcategory = useSelector(state => state.categories[product?.subcategoryId])

    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [name, setName] = useState(product?.name || '');
    const [desc, setDesc] = useState(product?.desc || '');
    const [condition, setCondition] = useState(product?.condition || '');
    const [size, setSize] = useState(product?.size || '');
    const [price, setPrice] = useState(product?.price || '');

    const [image, setImage] = useState(product?.images[0]?.imageUrl || "");
    const [image2, setImage2] = useState(product?.images[1]?.imageUrl || "");
    const [image3, setImage3] = useState(product?.images[2]?.imageUrl || "");
    const [image4, setImage4] = useState(product?.images[3]?.imageUrl || "");
    
    const [category, setCategory] =  useState(productCategory?.id || "");
    const [subcategory, setSubcategory] = useState(productSubcategory?.subcategoryId || "");

    const [errors, setErrors] = useState({});
    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Object.values(errors).length) {
            const newProduct = {name, desc, condition, size, price, category, subcategory}
            // Creates a new product if the edit product prop passed in is null
            if (!product) {
                try {    
                    const product = await dispatch(productsActions.createProduct(newProduct));
                    await dispatch(imagesActions.createImage(product.id, {image}));
                    if (image2) await dispatch(imagesActions.createImage(product.id, {'image': image2}))
                    if (image3) await dispatch(imagesActions.createImage(product.id, {'image': image3}))
                    if (image4) await dispatch(imagesActions.createImage(product.id, {'image': image4}))
                    if (product) reset();
                    setHasSubmitted(false);
                    setErrors({});
                    history.push(`/products/${product.id}`);
                } catch(error) {
                    setValidationErrors(error);
                    return;
                }
            } else {
                try {
                    await dispatch(productsActions.editProduct(product.id, newProduct));
                    // Func to create or edit an image depending on if it exists in the db yet or not
                    newImage(product.images[0], image)
                    newImage(product.images[1], image2)
                    newImage(product.images[2], image3)
                    newImage(product.images[3], image4)
                    setHasSubmitted(false);
                    setErrors({});
                    history.push(`/products/${product.id}`);
                } catch(error) {
                    setValidationErrors(error);
                    return;
                }
            }
        }
    } 
    // Edits or creates an image if the image exists in the database already (so it can replace the url in that case)
    const newImage = async (image, newImageUrl) => {
        // if the image in the product images array exists
            // if statement to prevents unecessary edit dispatch
        if (image && (image.imageUrl !== newImageUrl)) {
            // sends put request to edit the existing image url in the db
            await dispatch(imagesActions.editImage(image.id, {'image': newImageUrl}));
            return
        } 
        // sends post request to create a new image in the db if there isn't already an image 
        if (!image && newImageUrl) {
            await dispatch(imagesActions.createImage(product.id, {'image': newImageUrl}));
            return
        } 
    }
    const reset = () => {
        setName('');
        setDesc('');
        setCondition('');
        setSize('');
        setPrice(0.00);
        setImage('');
        setImage2('');
        setImage3('');
        setImage4('');
    };
    
    useEffect(() => {
        if (hasSubmitted) {
            const errors = {};
            if (!name.length) errors.name = "Name is required";
            if (!desc.length) errors.desc = "Description is required";
            if (!condition) errors.condition = "Condition is required";
            if (!size) errors.size = "Size is required";
            if (!price) errors.price = "Price is required";
            if (!image.length) errors.images = "Image is required";
            if (!category) errors.category = "Category is required";
            if (!subcategory) errors.subcategory = "Subcategory is required";
            setErrors(errors);
        }
    }, [hasSubmitted, name, desc, condition, size, price, image, category, subcategory])

    return (
        <div className="newProductContainer">
            {!product &&
            <div>
               <h1>List an item</h1> 
            </div>
            }
            <form className="productForm" onSubmit={handleSubmit}>
                <h2>Photos</h2>
                <div>Add up to 4 photos</div>
                <div className="formItemContainer">
                    <label className="formLabel">Images</label>
                    <input 
                    value={image}
                    className="inputBox" 
                    placeholder="Image URL"
                    onChange={e => setImage(e.target.value)}
                    />
                    <input 
                    value={image2}
                    className="inputBox" 
                    placeholder="Image URL"
                    onChange={e => setImage2(e.target.value)}
                    />
                    <input 
                    value={image3}
                    className="inputBox" 
                    placeholder="Image URL"
                    onChange={e => setImage3(e.target.value)}
                    />
                    <input 
                    value={image4}
                    className="inputBox" 
                    placeholder="Image URL"
                    onChange={e => setImage4(e.target.value)}
                    />
                    {errors.images && (<span className='errors'>{errors.images}</span>)}
                </div>
                <div className="formItemContainer">
                    <label className="formLabel">Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="inputBox" 
                    />
                    {errors.name && (<span className='errors'>{errors.name}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Description</label>
                    <textarea
                        value={desc}
                        placeholder="eg. small grey t-shirt, worn once"
                        onChange={e => setDesc(e.target.value)}
                        className="inputBox textarea" 
                    />
                    {errors.desc && (<span className='errors'>{errors.desc}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Condition</label>
                    <select value={condition} className="inputBox" onChange={e => setCondition(e.target.value)}>
                        <option ></option>
                        <option >Brand new</option>
                        <option >Like new</option>
                        <option >Used - Excellent</option>
                        <option >Used - Good</option>
                        <option >Used - Fair</option>
                    </select>
                    {errors.condition && (<span className='errors'>{errors.condition}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Size</label>
                    <select value={size} className="inputBox" onChange={e => setSize(e.target.value)}>
                        <option></option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    {errors.size && (<span className='errors'>{errors.size}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Category</label>
                    <select value={category} className="inputBox" onChange={e => setCategory(e.target.value)}>
                        <option value="" disabled defaultValue>Choose a category</option>
                        <option value={1}>Men's</option>
                        <option value={2}>Women's</option>
                        <option value={3}>Accessories</option>
                    </select>
                    {errors.category && (<span className='errors'>{errors.category}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Subcategory</label>
                    <select value={subcategory} className="inputBox" onChange={e => setSubcategory(e.target.value)}>
                        <option value="" disabled defaultValue>Choose a subcategory</option>
                        {(category == 1 || category == 2) && 
                        <>
                            <option value={1}>Tops</option>
                            <option value={2}>Bottoms</option>
                            <option value={3}>Dresses</option>
                            <option value={4}>Shoes</option>
                        </>}
                        {(category == 3) &&
                        <>
                            <option value={1}>Hats</option>
                            <option value={2}>Jewellery</option>
                            <option value={3}>Watches</option>
                        </>}
                    </select>
                    {errors.subcategory && (<span className='errors'>{errors.subcategory}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Price</label>
                    <span className="dollarSign">$</span>
                    <input 
                        type="number" 
                        value={price} 
                        placeholder="0.00"
                        onChange={e => setPrice(e.target.value)}
                        className="inputBox priceInput" 
                        />
                    {errors.price && (<span className='errors'>{errors.price}</span>)}
                </div>
                <button className="confirmButtonDesign formButton" onClick={e => setHasSubmitted(true)} type="submit">
                    {product ? "Edit item" : "List item"}
                </button>
            </form>
        </div>
    )
}

export default ProductForm;