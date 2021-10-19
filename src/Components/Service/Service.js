import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const{id, name, img, desc} = props.service;
    return (
        <div class="col-lg-4 col-sm-12 serviceContainer">
           <div className='servic-container'>
           <img src={img} className='service-img rounded-3 py-2' alt="" />
            <h4 className='text-dark py-2 service-name'>{name}</h4>
            <p className='text-dark pb-3 px-3 servic-desc'>{desc.slice(0, 80)}</p>
            <Link to={`/serviceDetails/${id}`}>
            <button className='mb-4 btn-details'>See Details <i class="fas fa-arrow-alt-circle-right"></i></button>
            </Link>
           </div>
        </div>
    );
};

export default Service;