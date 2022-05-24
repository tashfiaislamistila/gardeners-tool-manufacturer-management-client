import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import GardeningDescription from './GardeningDescription';
import Tool from './Tool';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Tools></Tools>
            <GardeningDescription></GardeningDescription>
            <Footer></Footer>
        </div>
    );
};

export default Home;