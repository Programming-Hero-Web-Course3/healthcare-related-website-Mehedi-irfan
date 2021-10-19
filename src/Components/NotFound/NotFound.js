import React from 'react';
import errorImg from '../../404page.jpg';
const NotFound = () => {
    return (
        <div className='container mx-auto py-5'>
            <img src={errorImg} className='w-100' alt="" />
        </div>
    );
};

export default NotFound;