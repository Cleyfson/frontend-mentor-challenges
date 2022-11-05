import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
	return (
		<div className='navbar' datatype='nav-bar'>
			<Link className='navbar__logo' to={'/'}>
				<h2>BookStore</h2>
			</Link>
			<AiOutlineShoppingCart className='navbar__cart' />
		</div>
	);
};

export default Navbar;
