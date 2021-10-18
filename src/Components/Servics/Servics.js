import React, { useEffect, useState } from 'react';
import Servic from '../Servic/Servic';
import './Servics.css';

const Servics = () => {
    const [servics, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-Mehedi-irfan/main/public/services.json?token=AUVRIAA6K4WFGAPYKVLG6QDBNWBN4')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='service-container'>
            <div className='container mx-auto text-center '>
            <h4 className='about-text '>Services</h4>
            <h1 className='service-title'>Critical Eye Care Services</h1>
            <div className="row gy-4 ">
                {
                    servics.map(servic => <Servic
                    key={servic.id}
                    servic={servic}
                    ></Servic>)
                }
            </div>
        </div>
        </div>
    );
};

export default Servics;