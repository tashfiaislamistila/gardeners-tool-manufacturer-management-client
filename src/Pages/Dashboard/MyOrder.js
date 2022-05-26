import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    // const [orders, setOrders] = useState([]);

    //use React Query
    const { data: orders, isLoading } = useQuery('order', () => fetch(`http://localhost:5000/orders?customerEmail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

        .then(res => {
            console.log('res', res);
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

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/orders?customerEmail=${user.email}`)
    //             .then(res => res.json())
    //             .then(data => setOrders(data));
    //     }
    // }, [user])

    return (
        <div>
            <h1 className='text-center  text-secondary text-2xl mb-4 mt-4'>Manage Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>serial</th>
                            <th>Buyers Name</th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Address</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr className='active'>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.toolName}</td>
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