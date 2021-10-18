import React from 'react';

const Servic = (props) => {
    const {img, name, desc} = props.servic;
    return (
        <div class="col-4">
            <div class="p-3"><img src={img} className='w-100' alt="" /></div>
        </div>
    );
};

export default Servic;