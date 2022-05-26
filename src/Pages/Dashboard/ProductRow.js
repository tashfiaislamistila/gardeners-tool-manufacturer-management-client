import React from 'react';

const ProductRow = ({ tool, index }) => {
    const { name, img, availableQuantity } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td><button class="btn btn-outline btn-error">Delete</button></td>
        </tr>
    );
};

export default ProductRow;