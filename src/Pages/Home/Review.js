import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import ReviewComponent from './ReviewComponent';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-6xl text-center mt-6'> Customers reviews</h1>
            <div className='grid grid-cols-3 justify-items-center gap-4 pt-10 '  >
                {
                    reviews.map(review => <ReviewComponent
                        key={review.id}
                        review={review}
                    ></ReviewComponent>)
                }
            </div>
        </div>
    );
};

export default Review;