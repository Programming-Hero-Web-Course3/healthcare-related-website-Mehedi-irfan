import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {name, img, specailist} = props.doctor;
    console.log(props.doctor)
    return (
            <div className="col-lg-4 col-12 doctor-container">
                <img src={img} className='doctor-img' alt="" />
                <div className='pt-3 pb-2 doctor-info'>
                <h4>{name}</h4>
                <h6>{specailist}</h6>
                </div>
                <hr />
                {/* socail media icon\ */}
                <div className='d-flex justify-content-around'>
                    <span><i class="fab fa-facebook-f doctor-icon"></i></span>
                    <span><i class="fab fa-twitter doctor-icon"></i></span>
                    <span><i class="fab fa-instagram doctor-icon"></i></span>
                </div>
            </div>
    );
};

export default Doctor;