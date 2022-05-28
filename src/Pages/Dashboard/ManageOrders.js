import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteConfirmModalForMyOrder from './DeleteConfirmModalForMyOrder';

const ManageOrders = () => {

    const [deletingOrder, setDeletingOrder] = useState(null);

    const { data: manageOrders, isLoading, refetch } = useQuery('manageOrders', () => fetch('http://localhost:5000/manageOrders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => {
            // console.log('res', res);
            // if (res.status === 401 || res.status === 403) {
            //     signOut(auth);
            //     localStorage.removeItem('accessToken');
            //     navigate('/')
            // }
            return res.json()

        })

    )
    if (isLoading) {

        return <Loading></Loading>
    }

    const manageShip = id => {

        const payment = {
            status: "Approved and shipped"
        }

        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)

        })

    }
    refetch()
    return (
        <div>

            <h2>Manage Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Buyers Name</th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders.map((manageOrder, index) => <tr className='active' key={manageOrder._id}>
                                <th>{index + 1}</th>
                                <td>{manageOrder.customerName}</td>
                                <td>{manageOrder.toolName}</td>
                                <td>{manageOrder.orderQuantity}</td>
                                <td>{manageOrder.customerEmail}</td>
                                <td>{manageOrder.totalPrice}</td>
                                {/* <td>{!order.paid && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal-for-my-order" class="btn modal-button">Delete</label>}</td> */}
                                <td>
                                    {
                                        !manageOrder.paid && <div>
                                            <p><span className="text-primary">Unpaid</span></p>
                                            <label onClick={() => setDeletingOrder(manageOrder)} for="delete-confirm-modal-for-my-order" class="btn btn-error font-bold">Delete</label>
                                        </div>
                                    }
                                    {
                                        deletingOrder && <DeleteConfirmModalForMyOrder
                                            deletingOrder={deletingOrder}
                                            refetch={refetch}
                                            setDeletingOrder={setDeletingOrder}>
                                        </DeleteConfirmModalForMyOrder>
                                    }
                                    <p><span className="text-primary font-bold ">
                                        {manageOrder.status}
                                    </span></p>
                                    {

                                        (manageOrder.paid && manageOrder.status === 'pending') &&
                                        <div>

                                            <label onClick={() => manageShip(manageOrder._id)} class="btn font-bold">Ship</label>

                                        </div>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageOrders;