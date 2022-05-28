import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import ReviewComponent from './ReviewComponent';

const AllReviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2 className='text-6xl text-center'>All Reviews</h2>
            <div className=' grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 pt-10' >
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