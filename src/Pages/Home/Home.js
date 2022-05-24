import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import GardeningDescription from './GardeningDescription';
import Info from './Info';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <GardeningDescription></GardeningDescription>
            <Info ></Info>

        </div>
    );
};

export default Home;