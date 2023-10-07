import { NavLink } from 'react-router-dom';
import './LandingPage.css';
import womens from '../../images/womens.jpg';
import mens from '../../images/mens.jpg';
import accessories from '../../images/accessories.jpg';
const LandingPage = () => {
    
    
    return (
        <div className='landingPage'>
      
            <div className="discoverBox">
                {/* <h1 className='coverName'>Find your style here</h1> */}
            
                <div className="infotextImg">

                    <img className='imageForDesc' src="https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" /> 
                
               
                    <div className='textInfoDesc'>

                        <h1 className='coverName'>Discovering a new style has never been easier</h1>
                        <p className="textInfoDescP">Sell your items, and find new ones sold by other style savants everywhere.</p>
                        <div className='buttonDiv'>
                            <NavLink to="/products">
                                <button className='buttonDesign'>Shop now</button>
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>

            
            <section className='categories'>
                <div className="categoryImageLinks">
                    <div className='textInfoDesc'>
                        <h1 className='landingTitle'>Shop by Category</h1>
                        <p className='textInfoDescP'>Choosing from our plethora of items just got easier. Pick from items of all types, starting with these top three categories.</p>
                    </div>
                    <NavLink to="/category/1" className="imageLinkContainer">
                        <div className="nameDiv"><div className="name">Men's</div></div>
                        <img className='categoryImage' alt="Men's" src="https://images.unsplash.com/photo-1520013225692-fff4010c0ae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" />
                    </NavLink>
                    <NavLink to="/category/2" className="imageLinkContainer">
                        <div className="nameDiv"><div className="name">Women's</div></div>
                        <img className='categoryImage' alt="Women's" src="https://images.unsplash.com/photo-1676290737267-c78d1d4f68ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" />
                    </NavLink>
                    <NavLink to="/category/3" className="imageLinkContainer">
                        <div className="nameDiv"><div className="name">Accessories</div></div>
                        <img className='categoryImage' alt="Accessories" src="https://images.unsplash.com/photo-1506193095-80bc749473f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    </NavLink>
                </div>
            </section>
            <div className='discoverBox'>
                <div className="infotextImg">
                    <div>
                        <img className='imageDiv' src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2592&q=80" /> 
                    </div>
                    <div className='textInfoDesc'>
                        <h1 className='coverName'>Time to swap out the items in your closet</h1>
                        <p className="textInfoDescP">Sell your items in our online marketplace. It's all sold by passionate stylists like you. The ultimate online thrifting experience is right here.</p>
                    </div>
                </div>
            </div>
            

            
            {/* <img className='landingImage' alt="The lastest fashion" src={} /> */}
            {/* <h1>Shop by Price</h1> */}

        </div>
    )
}

export default LandingPage;