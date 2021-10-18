import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Servics from '../Servics/Servics';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Servics></Servics>
        </div>
    );
};

export default Home;