import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import GardeningDescription from './GardeningDescription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <GardeningDescription></GardeningDescription>
            <Footer></Footer>
        </div>
    );
};

export default Home;