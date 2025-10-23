import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;