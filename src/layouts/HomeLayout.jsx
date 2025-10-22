import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;