import React from 'react';
import useTools from '../../CustomHook/useTools';
import Tool from './Tool';

const AllTools = () => {
    const [tools] = useTools();
    return (

        <div className=''>
            <div className='text-6xl text-center '>
                <h1> All Tools</h1>
            </div>
            <div>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default AllTools;