import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;