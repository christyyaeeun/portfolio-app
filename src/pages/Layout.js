import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
    <>
            <Navbar />
            <main className="App">

                <Outlet />
            </main>
    </>
    );
};

export default Layout;
