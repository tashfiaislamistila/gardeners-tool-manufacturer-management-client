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
    const url = `http://localhost:5000/orders/${id}`;

    const { data: orders, isLoading } = useQuery(['order', id], () => fetch(url, {
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
            <div class="card w-50 max-w-md bg-base-100  shadow-xl my-6">
                <div class="card-body">
                    <p className='font-bold'>Hello, {orders.customerName}</p>
                    <h2 class="card-title font-bold'">Please pay for  <span className='text-orange-700'>{orders.toolName
                    }</span></h2>
                    <p className='text-primary font-bold'>Pay : ${orders.totalPrice} </p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default Payment;