import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewComponent = ({ review }) => {

    return (
        <div className="card w-100 bg-primary text-primary-content">
            <div className="card-body text-center">
                <h2 className='font-bold text-xl p-5'>Name: {review.name}</h2>
                <h2 className='font-bold '>Review: {review.review}</h2>
                <Rating
                    initialRating={review.rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>
        </div>
    );
};

export default ReviewComponent;