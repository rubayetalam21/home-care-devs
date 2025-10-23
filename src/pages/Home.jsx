import React from 'react';
import HA_slider from '../components/HA_slider';
import HA_projects from './HA_projects';
import OngoingProjects from './OngoingProjects';
import CustomerFeedback from './CustomerFeedback';
import ClientFeedbackForm from './ClientFeedbackForm';


const Home = () => {
    return (
        <div>
           <HA_slider></HA_slider>
           <HA_projects></HA_projects>
           <OngoingProjects></OngoingProjects>
           <CustomerFeedback></CustomerFeedback>
           <ClientFeedbackForm></ClientFeedbackForm>
        </div>
    );
};

export default Home;