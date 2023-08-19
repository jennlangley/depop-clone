import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as productsActions from '../../../store/product';
import { createImage } from "../../../store/image";

const ProductForm = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [condition, setCondition] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState(0.00);
    const [errors, setErrors] = useState({});
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (hasSubmitted) {
            const errors = {};

            if (!name.length) errors.name = "This field is required";
            if (!desc.length) errors.desc = "This field is required";
            if (!condition) errors.condition = "This field is required";
            if (!size) errors.size = "This field is required";
            if (!price) errors.price = "This field is required";
            if (!image.length) errors.images = "Please upload at least one image"

            setErrors(errors);
        }
    }, [hasSubmitted, name, desc, condition, size, price, image])

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
        <>
            <header>List an item</header>
            <div className="errors">
                {(validationErrors.length>1) && <ul>
                    {validationErrors?.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Photos</label>
                    <div>
                        <input className="imageInput" onChange={e => setImage(e.target.value)}/>
                        {/* <input className="imageInput" onChange={e => handleFileEvent(e)} type="file" accept="image/png"/>
                        <input className="imageInput" onChange={e => handleFileEvent(e)} type="file" accept="image/png"/> */}
                    </div>
                    
                    <div className="errors">
                        {errors.images && <p>{errors.images}</p>}
                    </div>
                </div>
                <div>
                    <label>Give your item a name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>
                    <div className="errors">
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                </div>
                
                <div>
                    <label>Description</label>
                    <textarea
                        value={desc}
                        placeholder="eg. small grey t-shirt, worn once"
                        onChange={e => setDesc(e.target.value)}
                    />
                    <div className="errors">
                        {errors.desc && <p>{errors.desc}</p>}
                    </div>
                </div>
                <div>
                    <label>Condition</label>
                    <select onChange={e => setCondition(e.target.value)}>
                        <option ></option>
                        <option >Brand new</option>
                        <option >Like new</option>
                        <option >Used - Excellent</option>
                        <option >Used - Good</option>
                        <option >Used - Fair</option>
                    </select>
                    <div className="errors">
                        {errors.condition && <p>{errors.condition}</p>}
                    </div>
                </div>
                <div>
                    <label>Size</label>
                    <select onChange={e => setSize(e.target.value)}>
                        <option></option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <div className="errors">
                        {errors.size && <p>{errors.size}</p>}
                    </div>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ProductForm;