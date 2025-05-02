import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Category from './Category';
import Side from './Side';
import Home from './Home';

const Root = () => {
    return (
        <div>
            <header className='mb-20'>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-12 max-w-screen-xl mx-auto'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Category></Category>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Side></Side>
                </aside>
            </main>
        </div>
    );
};

export default Root;