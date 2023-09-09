import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import { useCart } from '../../context/CartContext';
import Logo from '../../images/style_swap_logo.png'
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const { openCart, closeCart } = useCart();
	return (
		isLoaded &&
		<header>
			<div className='headerContainer'>
			<div>
				<a href="/products">
					<img id='site-logo' alt="Style Swap Logo" src={Logo} />
				</a>
			</div>
			<div className='searchBar'>
				<SearchBar />
			</div>
			<nav className='nav'>
				<ul className='navList'>
					{sessionUser && (
						<li className='navItem'>
						<NavLink exact to="/products/new" className='buttonLink'>
						<div>
							Sell
						</div>
						
						</NavLink>
					</li>)}
					{(
						<>
						<li className='navItem'>
							<button className='cartButton' onClick={e => openCart()} >
									<i className="fa-solid fa-cart-shopping cartIcon" />
							</button>
							
						</li>
						<li className='navItem'>
							<ProfileButton isLoaded={isLoaded} user={sessionUser} />
						</li>
						</>
					)}
				</ul>
			</nav>
			</div>
		</header>
		
	);
}

export default Navigation;