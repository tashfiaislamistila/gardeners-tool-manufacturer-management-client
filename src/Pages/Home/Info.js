import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Assets/icons/clock.svg'
import marker from '../../Assets/icons/marker.svg'
import phone from '../../Assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-accent" body="Our opening hour monday to friday 9am to 5pm." img={clock}></InfoCard>
            <InfoCard cardTitle="Opening Locations" bgClass="bg-warning" body="We are canada based company so our location is in canada." img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-info" body="you can purchase from our online.You can order through phone, if you want to purchase from online. " img={phone}></InfoCard>
        </div>
    );
};

export default Info;