import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import ReviewComponent from './ReviewComponent';

const AllReviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2 className='text-6xl text-center'>All Reviews</h2>
            <div>
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

export default AllReviews;