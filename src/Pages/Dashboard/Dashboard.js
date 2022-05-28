import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHook/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-5xl text-primary mt-4 text-center'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {
                        !admin && <>
                            <li><Link to="/dashboard/myOrders" >My Orders</Link></li>
                            <li><Link to="/dashboard/review">Reviews</Link></li>
                        </>
                    }
                    <li><Link to="/dashboard">Users Profile</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/users">Make admin page</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Tool</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Tool</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;