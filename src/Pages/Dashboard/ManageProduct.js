import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useTools from '../../CustomHook/useTools';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()));

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
                                key={tool._id}
                                tool={tool}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></ProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProduct;