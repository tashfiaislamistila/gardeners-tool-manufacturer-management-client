import React from 'react';
import banner1 from '../../Assets/images/banner1.png'
import banner2 from '../../Assets/images/banner2.png'
import banner3 from '../../Assets/images/banner3.png'
import banner4 from '../../Assets/images/banner4.png'
import banner5 from '../../Assets/images/banner5.png'


const Banner = () => {
    return (
        <div class="carousel rounded-box">
            <div class="carousel-item">
                <img src={banner4} alt="banner1" />
            </div>
            <div class="carousel-item">
                <img src={banner2} alt="banner2" />
            </div>
            <div class="carousel-item">
                <img src={banner1} alt="banner3" />
            </div>
            <div class="carousel-item">
                <img src={banner3} alt="banner4" />
            </div>
            <div class="carousel-item">
                <img src={banner5} alt="banner5" />
            </div>


        </div>
    );
};

export default Banner;