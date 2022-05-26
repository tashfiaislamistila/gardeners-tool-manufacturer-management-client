import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ tool, index, refetch, setDeletingProduct }) => {
    const { _id, name, img, availableQuantity } = tool;


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
            <td>
                <label onClick={() => setDeletingProduct(tool)} for="delete-confirm-modal" class="btn modal-button">Delete</label>
            </td>
        </tr>
    );

};
export default ProductRow;