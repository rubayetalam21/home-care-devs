import React from 'react';
import HA_navbar from '../components/ha_navbar';
import HA_footer from '../components/ha_footer';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <HA_navbar></HA_navbar>

            <HA_footer></HA_footer>
        </div>
    );
};

export default Home;