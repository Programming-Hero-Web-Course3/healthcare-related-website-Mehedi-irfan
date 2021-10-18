import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container py-5'>
            <div className="row container mx-auto">
                <div className="col-lg-3 ">
                    <h3 className='footer-contact'>Contact</h3>
                    <nav>
                        <ul className='list-unstyled text-white '>
                            <li className='py-2 footer-item'>Phone :- <br /> +880 1892054369</li>
                            <li className='py-2 footer-item'>Email :- <br /> mehediirfan@gmail.com</li>
                            <li className='py-2 footer-item'>Address :- <br /> Chattogram, Bangladesh</li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className='ms-5'>
                    <h3 className='footer-contact'>About</h3>
                    <nav>
                        <ul className='list-unstyled text-white '>
                            <li className='py-2 footer-item'>Doctors</li>
                            <li className='py-2 footer-item'>About</li>
                            <li className='py-2 footer-item'>Service</li>
                            <li className='py-2 footer-item'>Blog</li>
                            <li className='py-2 footer-item'>Contact</li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='ms-5'>
                    <h3 className='footer-contact'>Explore</h3>
                    <nav>
                        <ul className='list-unstyled text-white'>
                            <li className='py-2 footer-item'>Blog</li>
                            <li className='py-2 footer-item'>Appointment</li>
                            <li className='py-2 footer-item'>Shop</li>
                            <li className='py-2 footer-item'>Protfolio</li>
                            <li className='py-2 footer-item'>Support</li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='ms-5'>
                    <h3 className='footer-contact'>Support</h3>
                    <nav>
                        <ul className='list-unstyled text-white'>
                            <li className='py-2 footer-item'>Online Support</li>
                            <li className='py-2 footer-item'>Free Consultancy</li>
                            <li className='py-2 footer-item'>24/7 Service</li>
                            <li className='py-2 footer-item'>Make Call</li>
                            <li className='py-2 footer-item'>Contact Supoort</li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
            <div className='text-center text-white border-top pt-4 copyright-text'>
                <p>Copyright @2021 Critical Eye Care Hospital</p>
            </div>
        </div>
    );
};

export default Footer;