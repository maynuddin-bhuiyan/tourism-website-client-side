import React from 'react';
import images from '../../images/NotFound/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div  className='NotFound'>
            <h1 className='Found'>The Page You Requested Could't Be Found. We're Sorry</h1>
            <img src={images} alt="" />
        </div>
    );
};

export default NotFound;