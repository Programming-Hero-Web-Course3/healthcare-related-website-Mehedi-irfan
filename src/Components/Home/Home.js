import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Servics from '../Servics/Servics';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Servics></Servics>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;