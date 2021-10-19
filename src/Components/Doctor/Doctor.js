import React from 'react';

const Doctor = (props) => {
    const {name, img, specialList} = props.doctor;
    console.log(props.doctor)
    return (
        <div>
            <div className="col-lg-4 col-sm-12">
                <img src={img} className='w-100' alt="" />
                <h2>{name}</h2>
                <h5>{specialList}</h5>
            </div>
        </div>
    );
};

export default Doctor;