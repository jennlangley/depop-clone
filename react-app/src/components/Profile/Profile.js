import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProducts } from '../../store/product';
import ProductTile from '../Products/ProductTile';
const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    // const [viewSold, setViewSold] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getUser(username).then(() => setIsLoaded(true))
    }, [username])

    const getUser = async (username) => {
        const res = await fetch(`/api/users/${username}`);
        
        const data = await res.json();
        if (!data.errors) {
            setUser(data);
            dispatch(getUserProducts(data.id))
        }
        
        
    }
    const products = useSelector(state => state.products)

    return (
        isLoaded &&
        (user ? 
            <section>
                <div className='profileContainer'>
                    <div className='userHeaderInfo'>
                        <ProfileDetails user={user} profile={true} />
                    </div>
                    <div className='userBio'><div>Bio:</div>{user.bio}</div>
                </div>
                <div className='productsListContainer'>
                    <div className='productsList'>
                        {Object.values(products).reverse().map((product, idx) => 
                            <div className='manageContainer' key={idx}>
                                <ProductTile product={product} />
                                {product.sold &&  <div className="productItem soldBox"><span className="sold">Sold</span></div>}
                            </div>
                            
                        )}
                    </div>
                </div>
            </section>
        
        :
        <h1 style={{textAlign: "center"}}>User not found</h1>)
    )
}
export default Profile;