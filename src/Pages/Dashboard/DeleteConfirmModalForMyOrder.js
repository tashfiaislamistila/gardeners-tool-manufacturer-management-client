import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModalForMyOrder = ({ deletingOrder, refetch, setDeletingOrder }) => {

    const { name, _id } = deletingOrder;

    const { toolName } = deletingOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`tool ${toolName} deleted `)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal-for-my-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are You sure you want to delete? {toolName}</h3>
                    <p class="py-4">If you delete tool you can not recovery it!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error ">Delete</button>
                        <label for="delete-confirm-modal-for-my-order" class="btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModalForMyOrder;