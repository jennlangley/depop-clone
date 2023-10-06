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
            <div>
                <h1 className='landingTitle'>Shop by Category</h1>
            </div>
            <div className="categoryImageLinks">
                <NavLink to="/category/1" className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Men's</span></div>
                    <img className='categoryImage' alt="Men's" src="https://images.unsplash.com/photo-1541980161-32fe8af73880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" />
                </NavLink>
                <NavLink to="/category/2" className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Women's</span></div>
                    <img className='categoryImage' alt="Women's" src={womens} />
                </NavLink>
                <NavLink to="/category/3" className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Accessories</span></div>
                    <img className='categoryImage' alt="Accessories" src="https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" />
                </NavLink>
            </div>
            <div className="discoverSubbox">
                <div>

                </div>
                <div>
                    <span className='coverName'>New styles start here</span>
                    <p>Lasdfasdfasdfasdfasd</p>
                </div>
                
            </div>

            
            {/* <img className='landingImage' alt="The lastest fashion" src={} /> */}
            {/* <h1>Shop by Price</h1> */}

        </div>
    )
}

export default LandingPage;