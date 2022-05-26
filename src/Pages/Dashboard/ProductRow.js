import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ tool, index, refetch }) => {
    const { _id, name, img, availableQuantity } = tool;

    const handleDelete = id => {
        fetch(`http://localhost:5000/tools/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`tool:${name} is deleted `)
                    refetch();
                }
            })
    }

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
            <td><button onClick={() => handleDelete(_id)} class="btn btn-outline btn-error">Delete</button></td>
        </tr>
    );

};
export default ProductRow;