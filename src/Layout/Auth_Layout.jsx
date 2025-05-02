import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Auth_Layout = () => {
    return (
        <div>
            <header className='py-5'>
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
};

export default Auth_Layout;