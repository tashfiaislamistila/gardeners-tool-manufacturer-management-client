import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../CustomHook/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools();
    const navigate = useNavigate();
    const showAllTools = () => {
        navigate('/tool')
    }

    return (
        <div className='container mx-auto'>
            <div className='text-6xl text-center mt-9'>
                <h1>Browse All Tools</h1>
            </div>
            <div>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool.id}
                        tool={tool}></Tool>)
                }
            </div>
            <div className='text-center mt-9'>
                <button onClick={showAllTools} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary">All Tools</button>
            </div>
        </div>
    );
};

export default Tools;