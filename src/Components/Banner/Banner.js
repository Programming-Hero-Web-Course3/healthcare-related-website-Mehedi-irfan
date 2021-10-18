import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background-banner'>
            <div className="row mx-auto">
            <div className="col-lg-6 frist-col">
                <h5 className='banner-name'>Critical Eye Care Center</h5>
                <h1 className='banner-title'>High Innovation Professional Eye Care</h1>
                <p className='py-2 fs-5 fw-normal'>In-network providers discount their services in order to access patients through vision-plan directories. Out-of-network providers set aside budgets to leverage various marketing channels. </p>
                <button className='btn-More'>More About Us</button>
            </div>
            <div className="col-lg-6">
                
            </div>
            </div>
        </div>
    );
};

export default Banner;