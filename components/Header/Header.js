import React, { memo } from 'react';
import Navigation from '../Navigation/navigation';


const Header = () => {
    return (
      <nav className='header'>
        <ul>
        <li><Navigation href='/'>Home</Navigation></li>
        <li><Navigation href='/about'>About</Navigation></li>
        <li><Navigation href='/blogs'>Blog</Navigation></li>
        <li><Navigation href='/product'>Product</Navigation></li>
      </ul>
      </nav>
       );
    };
    export default memo(Header);