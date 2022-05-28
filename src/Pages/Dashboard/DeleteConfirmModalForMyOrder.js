import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModalForMyOrder = ({ deletingOrder, refetch, setDeletingOrder }) => {

    const { toolName, _id } = deletingOrder;

    const handleDelete = () => {
        fetch(`https://dry-waters-06111.herokuapp.com/orders/${_id}`, {
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
            <input type="checkbox" id="delete-confirm-modal-for-my-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You sure you want to delete? <span className='text-neutral'>{toolName}</span></h3>
                    <p className="py-4">If you delete tool you can not recovery it!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error ">Delete</button>
                        <label htmlFor="delete-confirm-modal-for-my-order" className="btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModalForMyOrder;