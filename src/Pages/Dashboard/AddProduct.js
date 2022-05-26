import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '1097fd383e840edafee035d5c1d37157';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minimumQuantity: data.minimumQuantity,
                        img: img
                    }
                    fetch('http://localhost:5000/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Tool added')
                                reset();
                            }
                            else {
                                toast.error('Tool not added');
                            }
                        })
                }
            })
    }
    return (
        <div>
            <h2 className='text-4xl text-center text-secondary mt-4'>Add a Tool</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs ">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs ">
                        <label class="label">
                            <span class="label-text">Photo</span>
                        </label>
                        <input type="file" class="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs ">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description" class="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'description is required'
                                }
                            })}
                        />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" class="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'price is required'
                                }

                            })}
                        />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="quantity" class="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'quantity is required'
                                }
                            })}
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum Quantity</span>
                        </label>
                        <input type="number" placeholder="quantity" class="input input-bordered w-full max-w-xs"
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: 'quantity is required'
                                }
                            })}
                        />
                    </div>
                    <input className='btn btn-primary w-full max-w-xs text-white mt-3 ' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;