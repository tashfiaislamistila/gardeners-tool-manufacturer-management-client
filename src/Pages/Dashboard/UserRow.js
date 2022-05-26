import React from 'react';

const UserRow = ({ user, index }) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <tr className='active'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} class="btn btn-xs btn-outline btn-secondary">Make Admin</button></td>
        </tr>
    );
};

export default UserRow;