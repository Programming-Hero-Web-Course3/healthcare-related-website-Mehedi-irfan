import React from 'react';
import './SingleBlog.css';

const SingleBlog = (props) => {
    const {title, img, desc, date} = props.blog;
    return (
        <div className=' mx-auto'>
           <div className='d-flex justify-content-center align-items-center blog-container rounded-3'>
               <div className='w-100'>
                   <img src={img} className='w-100 p-3 rounded-3' alt="" />
               </div>
               <div className='w-100 px-3 blog-info'>
                   <h4>{title}</h4>
                   <h6>{date}</h6>
                   <p>{desc}</p>
                    <button className='btn-seeMore'>See More <i class="fas fa-arrow-alt-circle-right"></i></button>
               </div>
           </div>
        </div>
    );
};

export default SingleBlog;