import React from 'react';


const Tool = ({ tool }) => {
    const { name, price, description, img, availableQuantity, minimumQuantity } = tool;
    return (
        <div >
            <div class="card lg:card-side bg-base-100 shadow-xl mt-9 p-4 ">
                <figure><img style={{ width: "350px", height: "450px" }} src={img} alt="Album" /></figure>
                <div class="card-body ">
                    <h1 className="card-title text-4xl">{name}</h1>
                    <h2 className='text-2xl'>{description}</h2>
                    <h3 className='text-2xl mt-4'>Price : ${price}</h3>
                    <h3 className='text-2xl'>Available Quantity : {availableQuantity}</h3>
                    <h3 className='text-2xl'>Minimum Quantity : {minimumQuantity}</h3>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;