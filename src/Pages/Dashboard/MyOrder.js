import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModalForMyOrder from './DeleteConfirmModalForMyOrder';

const MyOrder = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    //use React Query
    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`https://dry-waters-06111.herokuapp.com/orders?customerEmail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {

            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()
        })
    )
    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1 className='  text-secondary text-4xl mt-9 mb-4 '>My Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Buyers Name</th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr
                                className='active'
                                key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>{!order.paid && <label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal-for-my-order" className="btn modal-button">Delete</label>}</td>
                                <td>
                                    {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-success">Pay</button></Link>}
                                    {(order.totalPrice && order.paid) && <div>
                                        <p><span className="text-primary">Paid</span></p>
                                        <p>Transaction Id : <span
                                            className="text-primary">{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteConfirmModalForMyOrder
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}>
                </DeleteConfirmModalForMyOrder>
            }
        </div>
    );
};

export default MyOrder;