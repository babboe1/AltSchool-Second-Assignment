import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
export const Header = () => {
   return (
      <nav className="nav">
         <ul>
            <li>
               <NavLink to="/home">Home</NavLink>
            </li>
            <li>
               <NavLink to="/about">About</NavLink>
            </li>
         </ul>
      </nav>
   );
};
