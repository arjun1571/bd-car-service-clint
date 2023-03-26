import React from 'react';
import About from '../../About/About';
import Services from '../Services/Services';
import Carosel from './Carosel/Carosel';

const Home = () => {
    return (
        <div className='mt-10 mb-10'>
            <Carosel></Carosel>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;