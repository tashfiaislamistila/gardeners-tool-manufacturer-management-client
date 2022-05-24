import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import GardeningDescription from './GardeningDescription';
import Info from './Info';
import Review from './Review';
import Tools from './Tools';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <GardeningDescription></GardeningDescription>
            <Info ></Info>

        </div>
    );
};

export default Home;