import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    // const [orders, setOrders] = useState([]);

    //use React Query
    const { data: orders, isLoading } = useQuery('order', () => fetch(`http://localhost:5000/orders?customerEmail=${user.email}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/orders?customerEmail=${user.email}`)
    //             .then(res => res.json())
    //             .then(data => setOrders(data));
    //     }
    // }, [user])

    return (
        <div>
            <h1 className='text-center  text-secondary text-2xl mb-4 mt-4'>My Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Order Name</th>
                            <th>Order Quantity</th>
                            <th>Customer Email</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.totalPrice}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;