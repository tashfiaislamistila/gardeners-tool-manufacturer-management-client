import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0xX5CQ1vBM2PUYBjELFcifPOEbl8yCzAGlsKuRkA8ks7NkCJ4gzhrXvEWRgtnCV7iZkcqOWQE1ZN3iChgozUxa00Y7h3HvFA');

const Payment = () => {
    const { id } = useParams();
    const url = `https://dry-waters-06111.herokuapp.com/orders/${id}`;

    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100  shadow-xl my-6">
                <div className="card-body">
                    <p className='font-bold'>Hello, {orders.customerName} </p>
                    <p className='font-bold'>
                        Email-  {orders.customerEmail}
                    </p>
                    <h2 className="card-title font-bold'">Please pay for  <span className='text-orange-700'>{orders.toolName
                    }</span></h2>
                    <p className='text-primary font-bold'>Pay : ${orders.totalPrice} </p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default Payment;