import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css'

const Category = ({ category, subcategories }) => {
    const [hover, setHover] = useState(false)
    return (
        <>
            <div className='categoryName' onMouseOver={e => setHover(true)} onMouseLeave={e => setHover(false)}>
                {category.name}
                
                {hover &&
                
                <div className='subcategories'>
                    
                    <span className='header'>Shop by category</span>
                    
                    {subcategories.map(subcategory => <NavLink onClick={e => setHover(false)} to={`/category/${category.categoryId}/${subcategory.subcategoryId}`} key={subcategory.id} className='subcategory'>{subcategory.name}</NavLink>)}
                    <NavLink onClick={e => setHover(false)} className="subcategory" to={`/category/${category.categoryId}`}>Shop all {category.name}</NavLink>
                
                </div>
                }
            </div>
            
        </>
    )
}
export default Category;