import React from 'react';


const GardeningDescription = () => {
    return (
        <div className='flex justify-center mb-6 mt-6 sm:grid-cols-1  '>
            <div class="hero " style={{ backgroundImage: "url(" + "https://i.ibb.co/pzXVh3q/banner5.png" + ")", height: "100vh", width: "150vh", }}>
                <div class="hero-overlay bg-opacity-50 "></div>
                <div class="hero-content text-center text-neutral-content ">
                    <div class="max-w-md ">
                        <h1 class="mb-5 text-5xl font-bold">Gardening and Yard Care Tools</h1>
                        <p class="mb-5 text-2xl">At Gardeners, we believe in the art and science of creating and enjoying your own outdoor haven. Thats why we take a holistic approach to developing garden tools that reflect hours of immersive study, research and validation, resulting in gardening tools that outperform the competition and feel like a natural extension of your body.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default GardeningDescription;