import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ orders }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    // const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { totalPrice, customerName, customerEmail } = orders;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        // setProcessing(true);
        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customerEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            // setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congratulation! Your payment is completed.')

        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4 font-bold' type="submit" disabled={!stripe || !clientSecret}>Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-700'>
                    <p>{success} </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );

};
export default CheckoutForm;