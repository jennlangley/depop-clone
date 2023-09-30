
import './LandingPage.css';
import womens from '../../images/womens.jpg';
import mens from '../../images/mens.jpg';
import accessories from '../../images/accessories.jpg';
const LandingPage = () => {
    
    
    return (
        <div className='landingPage'>
            <div className="discoverBox">
                Discover new fashion
            </div>
            <div className="categoryImageLinks">
                <div className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Shop Men's</span></div>
                    <img className='categoryImage' alt="accessories" src={mens} />
                </div>
                <div className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Shop Women's</span></div>
                    <img className='categoryImage' alt="accessories" src={womens} />
                </div>
                <div className="imageLinkContainer">
                    <div className="nameDiv"><span className="name">Shop Accessories</span></div>
                    <img className='categoryImage' alt="accessories" src={accessories} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;