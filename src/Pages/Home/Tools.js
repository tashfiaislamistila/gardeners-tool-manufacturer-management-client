import React from 'react';
import useTools from '../../CustomHook/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools();
    return (
        <div>
            <div>
                <h1>Browse All Tools</h1>
            </div>
            <div>
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;