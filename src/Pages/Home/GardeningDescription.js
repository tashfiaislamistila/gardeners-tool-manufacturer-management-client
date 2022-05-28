import React from 'react';
import Swal from 'sweetalert2';


const GardeningDescription = () => {
    const handleSubscription = e => {
        e.preventDefault();
        Swal.fire(
            'Subscription done!',
            'Thank you',
            'success'
        )
    }
    return (
        <div className='flex justify-center mb-9 mt-6 sm:grid-cols-1  '>
            <div className="hero " style={{ backgroundImage: "url(" + "https://i.ibb.co/pzXVh3q/banner5.png" + ")", height: "95vh", width: "150vh", }}>
                <div className="hero-overlay bg-opacity-50 "></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md ">
                        <h1 className=" text-5xl font-bold">Gardening and Yard Care Tools</h1>
                        <p className="mb-5 text-2xl">At Gardeners, we believe in the art and science of creating and enjoying your own outdoor haven. Thats why we take a holistic approach to developing garden tools that reflect hours of immersive study, research and validation, resulting in gardening tools that outperform the competition and feel like a natural extension of your body.From garden tools designed to help you cultivate a better garden, to yard tools that let you take back your yard, our versatile gardening tools are equipped with smart technologies and award-winning, ergonomic features that help make it easier and more enjoyable to transform your outdoor space.</p>
                        <button onClick={handleSubscription} className="btn btn-primary">Subscribe Now</button>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default GardeningDescription;