import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainCourse = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainCourse;