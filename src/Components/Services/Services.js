import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-Mehedi-irfan/main/public/FullService.json?token=AUVRIAAZSKZWKPBGUAPDWTTBN2NEY')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='py-5 container mx-auto text-center my-5'>
                <h2 className='serviceContainer-title'>Our <span>Critical Eye Care Hospital</span> Services</h2>
                <div className="row gy-4">
                    {
                        services.map(service => <Service
                        key={service.id}
                        service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;