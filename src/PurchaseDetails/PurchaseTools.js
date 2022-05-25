import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import usePurchaseTools from '../CustomHook/usePurchaseTools';
import auth from '../firebase.init';

const PurchaseTools = () => {
    const { toolsId } = useParams();
    const [tool] = usePurchaseTools(toolsId)
    const { name, price, description, img, availableQuantity, minimumQuantity } = tool;
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="">
            <h1 className='text-center text-primary text-4xl mt-9'>Purchase Details</h1>
            <div className='flex justify-center items-center gap-4 pt-10'>
                <div className='card lg:card-side bg-base-100  mt-9 p-4 text-center'>
                    <div className="card w-96  bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-center'>{description}</p>
                            <p>Price: $ {price}</p>
                            <p>Available Quantity : {availableQuantity}</p>
                            <p>Minimum Quantity : {minimumQuantity}</p>
                        </div>
                    </div>
                </div>
                <div class="card  w-full max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" disabled value={user?.displayName || ''} class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" disabled value={user?.email
                                || ''} class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="address" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="number" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Total Price</span>
                            </label>
                            <input type="number" placeholder="price" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Add Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" class="input input-bordered" required />
                        </div>
                        {/* <div>
                            <input type="submit" value="Submit" className='btn btn-primary w-full max-w-xs' />
                        </div> */}
                        {<div class="form-control mt-6">
                            <button value="submit" class="btn btn-primary">Submit</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default PurchaseTools;