import React from 'react';
import notfound from '../../Assets/images/notfound.png'

const NotFound = () => {
    return (
        <div>
            <div className='text-primary text-4xl mt-4 text-center'>
                <h1>THE PAGE YOU WERE LOOKING FOR DOES NOT EXISTS !!!</h1>
            </div>
            <div className='mt-4 text-center'>
                <img className='text-center  w-4/12 h-2/4' src={notfound} alt=""></img>
            </div>
        </div>
    );
};

export default NotFound;