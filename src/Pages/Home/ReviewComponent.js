import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewComponent = (props) => {
    const { image, name, rating, review } = props.review;
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-10'>
            <div className='text-center'>
                <div class="avatar ">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img src={image} alt="image" />
                    </div>
                </div>
                <h2 className='font-bold text-xl mb-2 p-5'>Name: {name}</h2>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>
            <h2 className='text-gray-700 text-base font-bold p-6'><h2>Review:</h2> {review.length < 200 ? review : review.slice(0, 200) + "...See More"}</h2>
        </div>
    );
};

export default ReviewComponent;