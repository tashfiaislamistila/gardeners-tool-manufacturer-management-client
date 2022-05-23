import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import GardeningDescription from './GardeningDescription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GardeningDescription></GardeningDescription>
            <Footer></Footer>
        </div>
    );
};

export default Home;