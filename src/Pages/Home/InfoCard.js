import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass, body }) => {
    return (
        <div className={`card  lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{body}</p>

            </div >
        </div >
    );
};

export default InfoCard;