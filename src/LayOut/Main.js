import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../Pages/shared/Foter/Fotter';
import Header from '../Pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;