import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as productsActions from '../../../store/product';
import { createImage } from "../../../store/image";
import './ProductForm.css'

const ProductForm = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [condition, setCondition] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [category, setCategory] =  useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (hasSubmitted) {
            const errors = {};

            if (!name.length) errors.name = "Name is required";
            if (!desc.length) errors.desc = "Description is required";
            if (!condition) errors.condition = "Condition is required";
            if (!size) errors.size = "Size is required";
            if (!price) errors.price = "Price is required";
            if (!image.length) errors.images = "Image is required"
            if (!category.length) errors.category = "Category is required"

            setErrors(errors);
        }
    }, [hasSubmitted, name, desc, condition, size, price, image, category])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        
        if (!Object.values(errors).length) {
            try {
                const formData = new FormData();
                formData.append("name", name);
                formData.append("desc", desc);
                formData.append("condition", condition);
                formData.append("size", size);
                formData.append("price", price);
                formData.append("image", image);
                formData.append("category", category)
                const product = await dispatch(productsActions.createProduct(formData))
                const new_image = await dispatch(createImage(product.id, image))
                if (product) reset();
                setHasSubmitted(false)
                setErrors({});
                history.push(`/products/${product.id}`)
            } catch(error) {
                setValidationErrors(error)
                return;
            }
        }
    } 

    const reset = () => {
        setName('');
        setDesc('');
        setCondition('');
        setSize('');
        setPrice(0.00);
        setImage('');
    };

    // const handleFileEvent = (e) => {
    //     const chosenFiles = Array.prototype.slice.call(e.target.files);
    //     handleUploadFiles(chosenFiles);
    // }
    // const handleUploadFiles = (chosenFiles) => {
    //     console.log(chosenFiles)
    //     setUploadedFiles(chosenFiles)
    //     // forEach file in chosenFiles
    //     // dispatch(createImages(chosenFiles))
    // }

    return (
        <div className="newProductContainer">
            <div>
               <h1>List an item</h1> 
            </div>

            {/* <div className="errors">
                {(validationErrors.length>1) && <ul>
                    {validationErrors?.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}
            </div> */}

            <form className="productForm" onSubmit={handleSubmit}>
                <h2>Photos</h2>
                <div>Add up to 5 photos</div>
                <div className="formItemContainer">
                    <label className="formLabel">Images</label>
                    <input 
                    className="inputBox" 
                    placeholder="Image URL"
                    onChange={e => setImage(e.target.value)}
                    />
                    {/* <input className="imageInput" onChange={e => handleFileEvent(e)} type="file" accept="image/png"/>
                    <input className="imageInput" onChange={e => handleFileEvent(e)} type="file" accept="image/png"/> */}
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
                        className="inputBox" 
                    />
                    {errors.desc && (<span className='errors'>{errors.desc}</span>)}
                </div>
                
                <div className="formItemContainer">
                    <label>Condition</label>
                    <select className="inputBox" onChange={e => setCondition(e.target.value)}>
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
                    <select className="inputBox" onChange={e => setSize(e.target.value)}>
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
                    <select className="inputBox" onChange={e => setCategory(e.target.value)}>
                        <option value={1}>Men's</option>
                        <option value={2}>Women's</option>
                        <option value={3}>Accessories</option>
                    </select>
                    {errors.category && (<span className='errors'>{errors.category}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Subcategory</label>
                    <select className="inputBox" onChange={e => setCategory(e.target.value)}>
                        <option value={1}>Tops</option>
                        <option value={2}>Bottoms</option>
                        <option value={3}>Dresses</option>
                        <option value={4}>Shoes</option>
                        <option value={3}>Dresses</option>
                    </select>
                    {errors.category && (<span className='errors'>{errors.category}</span>)}
                </div>
                <div className="formItemContainer">
                    <label>Price</label>
                    <input 
                        type="number" 
                        value={price} 
                        placeholder="0.00"
                        onChange={e => setPrice(e.target.value)}
                        className="inputBox" 
                        />
                    {errors.price && (<span className='errors'>{errors.price}</span>)}
                </div>
                <div className="confirmButtonDesign formButton">
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default ProductForm;