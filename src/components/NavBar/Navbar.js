import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container" >
           <nav className="nav">
               <Link to='/'>
                   <h3>LOGO</h3>
               </Link>
               <div className="nav_right">
                   <div className="nav-cart">
                   <ShoppingCartOutlined />
                   </div>
                   <NavLink to='/login' className="login">
                       Login
                   </NavLink>
                   <NavLink to='/signup' className="signup">
                        Sing-up
                   </NavLink>
               </div>
            </nav> 
        </div>
    );
};

export default Navbar;