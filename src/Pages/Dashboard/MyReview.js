import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);


    const handleReview = event => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.review.value;

        const reviews = {
            name: user.displayName,
            email: user.email,
            review,
            rating
        }
        console.log(reviews);
        //added review
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Thank you for your review.We tried our best to full fill your demand.')
            })
    }
    return (
        <div>
            <h2 className='text-secondary text-4xl mt-9'>My review</h2>
            <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-1/3'>

                <input type="name" name='name' className="input input-bordered w-full max-w-xs" disabled value={user?.displayName || ''} />

                <input type="email" name='email' className="input input-bordered w-full max-w-xs" disabled value={user?.email || ''} />

                <input type="number" name='rating' placeholder="Please give us rating out of 5" className="input input-bordered w-full max-w-xs" />

                <textarea type="text" name='review' placeholder="Please add your review" className="textarea textarea-secondary w-full max-w-xs"  ></textarea>

                <input type="submit" value="Submit" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
            </form >
        </div>
    );
};

export default MyReview;