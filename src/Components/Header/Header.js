import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import Banner from '../Banner/Banner';
import useAuth from '../Hooks/UseAuth';
import useFirebase from '../Hooks/UseFirebase';
import './Header.css'

const Header = () => {

    const {user, logOut} = useFirebase();
    // navlink active style\
    const activeStyle = {
        color : '#7d4c9e',
        borderBottom : '2px solid #7d4c9e'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-color ">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center justify-content-center" href="/"><img src={logo} className='' alt="" />
                 <div className='inline-block ms-3'>
                <span className='fs-3 fw-bold critical '>Critical</span> <br /> <span className='fs-5'>Eye Care Hospital</span>
                    </div></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link fs-5 mx-2 fw-semibold navItem" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link fs-5 mx-2 fw-semibold navItem" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link fs-5 mx-2 fw-semibold navItem" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeStyle={activeStyle} className="nav-link fs-5 mx-2 fw-semibold navItem" to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                    {user.email ?<NavLink onClick={logOut} className="nav-link fs-5 mx-2 fw-semibold" id='navItem' to='/signIn'>Sign Out</NavLink>
                        :<NavLink className="nav-link fs-5 mx-2 fw-semibold" id='navItem' to="/signIn">Sign In</NavLink>}
                        
                    </li>
                    {/* user display name\ */}
                    <li className='nav-item'><h5 className='mt-3 navItem'>{user?.displayName}</h5></li>
                </ul>
              </div>
            </div>
        </nav>
            <hr className='py-0 my-0' />
        </div>
    );
};

export default Header;