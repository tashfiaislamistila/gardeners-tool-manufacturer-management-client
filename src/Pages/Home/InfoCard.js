import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass, body }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{body}</p>

            </div>
        </div>
    );
};

export default InfoCard;