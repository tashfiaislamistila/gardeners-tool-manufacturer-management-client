import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHook/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-5xl text-center text-primary mt-4'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard" >My Orders</Link></li>
                    <li><Link to="/dashboard/review">Reviews</Link></li>
                    <li><Link to="/dashboard/profile">Manage Profile</Link></li>
                    {admin && <li><Link to="/dashboard/users">Make admin page</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;