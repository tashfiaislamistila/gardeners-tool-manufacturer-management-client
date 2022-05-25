import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import usePurchaseTools from '../CustomHook/usePurchaseTools';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const PurchaseTools = () => {
    const { toolsId } = useParams();
    const [tool, setTool] = usePurchaseTools(toolsId);
    const { name, price, description, img, availableQuantity, minimumQuantity } = tool;
    const [error, setError] = useState('');
    const [totalPrice, setPrice] = useState(null);
    const [disabled, setDisabled] = useState(false)
    const [user, loading] = useAuthState(auth);

    const handleOrder = (event) => {
        const orderQuantity = parseInt(event.target.value);
        console.log(orderQuantity);
        if (orderQuantity < minimumQuantity) {
            console.log(orderQuantity);
            // console.log(minQuantity);
            setError('Ordered Quantity is less than minimum quantity')
            setDisabled(true)

        }
        else if (orderQuantity > availableQuantity) {
            setError('Ordered Quantity is more than available quantity in stock')
            setDisabled(true)
        }
        else if (orderQuantity < availableQuantity || orderQuantity > minimumQuantity) {
            setError('')
            setDisabled(false)
        }
    }
    const handlePurchase = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        const purchase = {
            toolName: name,
            orderQuantity,
            price,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.address.value,
            address: event.target.phone.value,
            totalPrice
        }
        console.log(purchase);

        let newAvailableQuantity = parseInt(availableQuantity) - parseInt(orderQuantity);
        const newProduct = { ...tool, availableQuantity: newAvailableQuantity }
        setTool(newProduct);

        //Posting the data to the database with a new collection
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(newInventory)
        //     })
        //         .then(res => res.json())
        //         .then(data => console.log(data));
        //     alert("Item delivered")


    }
    return (
        <div className="">
            <h1 className='text-center text-primary text-4xl mt-9'>Purchase Details</h1>
            <div className='flex justify-center items-center gap-4 pt-10'>
                <div className='card lg:card-side bg-base-100  mt-9 p-4 text-center'>
                    <div className="card w-96  bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-center'>{description}</p>
                            <p>Price: $ {price}</p>
                            <p>Available Quantity : {availableQuantity}</p>
                            <p>Minimum Quantity : {minimumQuantity}</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handlePurchase} className='grid  grid-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        Order Quantity
                    </label>
                    <p className='text-red-500'> {error}</p>
                    <input type="number" name='orderQuantity' defaultValue={minimumQuantity} onChange={handleOrder} placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" required />
                    <p className='text-blue-500'>Total Price: ${totalPrice}</p>
                    <input type="submit" disabled={disabled} value="Purchase" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>



    );
}
export default PurchaseTools;