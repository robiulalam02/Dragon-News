import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-screen-xl mx-auto mt-5'>
            <nav className='flex justify-between items-center'>
                <div className='w-2/12'></div>
                <div className='mr-12'>
                    <ul className='flex gap-8 text-primary font-medium text-lg'>
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>About</li>
                        </NavLink>
                        <NavLink to="/career">
                            <li>Career</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <img src="/src/assets/user.png" alt="" />
                    <button onClick={()=>navigate('/auth/login')} className='bg-primary text-white py-2 px-8'>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;