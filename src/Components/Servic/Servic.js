import React from 'react';
import './Servic.css';

const Servic = (props) => {
    const {img, name, desc} = props.servic;
    return (
        <div class="col-lg-4 col-sm-12 ">
           <div className='servic-container'>
           <img src={img} className='w-100 rounded-3 p-3' alt="" />
            <h4 className='text-dark py-2 service-name'>{name}</h4>
            <p className='text-dark pb-3 px-3 servic-desc'>{desc.slice(0, 80)}</p>
            <button className='mb-4 btn-details'>See Details</button>
           </div>
        </div>
    );
};

export default Servic;