import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import { useCart } from '../../context/CartContext';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const { openCart, closeCart } = useCart();
	return (
		isLoaded &&
		<header>
			<div className='headerContainer'>
			<a href="/products">StyleSwap</a>

			<div className='searchBar'>
				<SearchBar />
			</div>
			<nav className='nav'>
				<ul className='navList'>
					{sessionUser && (
						<li className='navItem'>
						<NavLink exact to="/products/new" className='buttonLink'>Sell your item</NavLink>
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