import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Operators from '../Operators/Operators';
import Tourism from '../Tourism/Tourism';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Tourism></Tourism>
            <Gallery></Gallery>
            <Operators></Operators>

        </div>
    );
};

export default Home;