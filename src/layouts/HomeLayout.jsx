import React from 'react';
import { Outlet } from 'react-router';
import HA_navbar from '../components/HA_navbar';
import HA_footer from '../components/ha_footer';

const HomeLayout = () => {
    return (
        <div className='w-full'>
            <HA_navbar></HA_navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <HA_footer></HA_footer>
            
        </div>
    );
};

export default HomeLayout;