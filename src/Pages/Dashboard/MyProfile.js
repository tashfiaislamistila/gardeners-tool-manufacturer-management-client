import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userProfile, setUserProfile] = useState({});
    console.log(user);


    const handlePurchase = event => {
        event.preventDefault();

        const profile = {
            email: user.email,
            name: user.displayName,
            location: event.target.location.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        console.log(profile);

        //Update Available Quantity in the Database after purchasing product
        fetch(`http://localhost:5000/profiles/${profile.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Purchase confirmed')
            })


    }
    return (
        <div>
            <h2 className='text-primary text-4xl mt-9'>My Profile</h2>
            <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-1/3'>

                <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                <input type="text" name='location' placeholder="Your location" className="input input-bordered w-full max-w-xs" />

                <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />

                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Submit" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
            </form >
        </div >
    );
};

export default MyProfile;