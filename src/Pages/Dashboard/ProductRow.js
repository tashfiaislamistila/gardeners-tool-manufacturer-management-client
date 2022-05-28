import React from 'react';

const ProductRow = ({ tool, index, refetch, setDeletingProduct }) => {
    const { name, img, availableQuantity } = tool;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>
                <label onClick={() => setDeletingProduct(tool)} htmlFor="delete-confirm-modal" className="btn modal-button">Delete</label>
            </td>
        </tr>
    );

};
export default ProductRow;