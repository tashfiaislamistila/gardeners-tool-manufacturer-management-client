import React from 'react';
import { useQuery } from 'react-query';
import useTools from '../../CustomHook/useTools';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center  text-secondary text-2xl mb-4 mt-4'>Manage Tool: {tools.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ProductRow
                                index={index}
                                key={tool._key}
                                tool={tool}
                            ></ProductRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;