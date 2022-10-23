import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className='navbar__logo'>BookStore</h2>
      <AiOutlineShoppingCart className='navbar__cart' />
    </div>
  );
};

export default Navbar;
