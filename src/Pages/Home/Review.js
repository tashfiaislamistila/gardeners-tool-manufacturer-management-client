import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../CustomHook/useReviews';
import ReviewComponent from './ReviewComponent';

const Review = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const showAllReviews = () => {
        navigate('/allReview')
    }

    return (
        <div>
            <h1 className='text-4xl text-center mt-6'> What Our Customer Says</h1>
            <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 pt-10 '  >
                {
                    [...reviews].reverse().slice(0, 4).map(review => <ReviewComponent
                        key={review.id}
                        review={review}
                    ></ReviewComponent>)
                }
            </div>
            <div className='text-center mt-9'>
                <button onClick={showAllReviews} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary">Load More Tools</button>
            </div>
        </div>
    );
};

export default Review;