import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../../store/category';
import Category from './Category';
import './Categories.css';

const Categories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])
    const allCategories = Object.values(useSelector(state => state.categories));
    const categories = allCategories.filter(category => !category.subcategoryId)
    return (
        <div className='filtersContainer'>
         
            <div className='filterOptions'>
                {categories.map(category => 
                    <span key={category.id} className="filterOption" to="">
                        <Category 
                        category={category} 
                        subcategories={allCategories.filter(subcategory => (subcategory.categoryId === category.id) && subcategory.subcategoryId)}
                        />
                    </span>)}
            </div>
        </div>
    )
}
export default Categories;