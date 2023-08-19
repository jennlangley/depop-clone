import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from './SearchBar';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<header>
			<div className='headerContainer'>
			<a href="/products">Swap<i className="fa-solid fa-repeat"></i>Shop</a>
			<div className='searchBar'>
				<SearchBar />
			</div>
			<nav>
				<ul className='navList'>
					<li className='navItem'>
						<NavLink exact to="/products/new">Sell</NavLink>
					</li>
					{isLoaded && (
						<li className='navItem'>
							<ProfileButton user={sessionUser} />
						</li>
					)}
				</ul>
			</nav>
			</div>
		</header>
		
	);
}

export default Navigation;