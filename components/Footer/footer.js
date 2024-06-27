// "use client";


// import React from "react";

// const Footer = () => {
//   return (
//     <>
      
//           <div className="footer-wrapper">
//             <p className="footer-container"> &copy; Footer, 2024. </p>
            
        
//       </div>
     
//     </>
//   );
// };

// export default Footer;
import React, { memo } from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
        <ul>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/blog'>Blog</Link></li>
      </ul>
      <p className="footer-container"> &copy; Footer, 2024. </p>
    </footer>
      );
    };
    
    export default memo(Footer);