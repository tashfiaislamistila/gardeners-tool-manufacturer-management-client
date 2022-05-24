import React from 'react';
import banner1 from '../../Assets/images/banner1.png'
import banner2 from '../../Assets/images/banner2.png'
import banner3 from '../../Assets/images/banner3.png'
import banner4 from '../../Assets/images/banner4.png'
import children from '../../Assets/images/children.png'


const Banner = () => {
    return (
        <div className="carousel mb-5 ">
            < div className="carousel-item" >
                <img src={banner4} alt="banner1" />
            </div >
            <div className="carousel-item" >
                <img src={banner2} alt="banner2" />
            </div >
            <div className="carousel-item" >
                <img src={banner1} alt="banner3" />
            </div >
            <div className="carousel-item" >
                <img src={banner3} alt="banner4" />
            </div >
            <div className="carousel-item" >
                <img src={children} alt="banner4" />
            </div >

        </div >
    );
};

export default Banner;