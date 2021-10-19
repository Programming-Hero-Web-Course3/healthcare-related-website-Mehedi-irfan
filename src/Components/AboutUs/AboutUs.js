import React from 'react';
import aboutImg from '../../aboutHome.jpg';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div className='row container mx-auto aboutUs d-flex justify-content-center align-items-center'>
            {/* frist col\ */}
           <div className="col-lg-6">
            <img src={aboutImg} className='aboutus-img w-100' alt="" />
           </div>
           {/* second col\ */}
           <div className="col-lg-6">
               <h4 className='about-text'>About Us</h4>
               <h1 className='py-3 about-title'>We Are Caring For Your Eye Health Hospital</h1>
               <p className='fs-5 fw-normal'>That’s why some providers turn to content marketing to build their online presence. Creating content doesn’t require a capital investment—just time—and it’s an effective way to strengthen relationships with current and potential patients. When you publish content to engage website prospects, you’re generating interest at minimal cost while establishing yourself as a thought leader in your community.</p>
               <button className='btn-readMore'>Read More</button>
           </div>
        </div>
    );
};

export default AboutUs;