import React from 'react';


const Tool = ({ tool }) => {

    const { id, name, price, description, img, availableQuantity, minimumQuantity } = tool;

    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;