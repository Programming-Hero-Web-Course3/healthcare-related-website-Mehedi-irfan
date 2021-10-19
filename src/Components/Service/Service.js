import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{id, name, img, desc} = props.service;
    return (
        <div class="col-lg-4 col-sm-12 ">
           <div className='servic-container'>
           <img src={img} className='w-100 h-100 rounded-3 p-3' alt="" />
            <h4 className='text-dark py-2 service-name'>{name}</h4>
            <p className='text-dark pb-3 px-3 servic-desc'>{desc.slice(0, 80)}</p>
            <Link to={`/serviceDetails/${id}`}>
            <button className='mb-4 btn-details'>See Details</button>
            </Link>
           </div>
        </div>
    );
};

export default Service;