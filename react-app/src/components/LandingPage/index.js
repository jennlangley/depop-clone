import { NavLink } from 'react-router-dom';
import './LandingPage.css';
import womens from '../../images/womens.jpg';
import mens from '../../images/mens.jpg';
import accessories from '../../images/accessories.jpg';
const LandingPage = () => {
    
    
    return (
        <div className='landingPage'>
            <div className="discoverBox">
                <span className='coverName'>New styles start here</span>
            </div>
            <h1>Shop by Category</h1>
            <div className="categoryImageLinks">
                <NavLink to="/category/1" className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Men's</span></div>
                    <img className='categoryImage' alt="accessories" src={mens} />
                </NavLink>
                <NavLink to="/category/2" className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Women's</span></div>
                    <img className='categoryImage' alt="accessories" src={womens} />
                </NavLink>
                <NavLink to="/category/3" className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Accessories</span></div>
                    <img className='categoryImage' alt="accessories" src={accessories} />
                </NavLink>
            </div>
            <h1>Shop by Price</h1>

        </div>
    )
}

export default LandingPage;