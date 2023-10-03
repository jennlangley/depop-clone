import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProductCategory.css';
const Breadcrumb = () => {
    const { categoryId, subcategoryId } = useParams();

    const categories = useSelector(state => state.categories);
    const category = categories[+categoryId];
    let subcategory;

    if (subcategoryId) {
        subcategory = Object.values(categories).find(category => category.categoryId == categoryId && category.subcategoryId == subcategoryId);
    }
    if (!categoryId) return <></>

    return (
        <div className="breadcrumb">
            <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
            {subcategoryId ? 
                <>
                    <i className="fa-solid fa-chevron-right"></i>
                    <NavLink to={`/category/${category.id}/${subcategory.subcategoryId}`}>
                        {subcategory.name}
                    </NavLink> 
                </>
                : ""
            }
        </div>
    )
}
export default Breadcrumb;