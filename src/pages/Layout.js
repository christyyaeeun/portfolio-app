import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="App">
                <Outlet />
                <div id="footer">
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default Layout;
