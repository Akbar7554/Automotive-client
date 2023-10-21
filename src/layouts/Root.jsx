import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;