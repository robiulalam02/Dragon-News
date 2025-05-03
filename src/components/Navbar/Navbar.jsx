import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { ProviderContext } from '../../Provider/ProviderContext';
import { IoIosLogOut } from 'react-icons/io';

const Navbar = () => {

    const {profile, signOutUser} = use(ProviderContext);
    console.log(profile);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser();
    }

    return (
        <div className='max-w-screen-xl mx-auto mt-5'>
            <nav className='flex justify-between items-center'>
                <div className='w-2/12'>
                {
                    profile && <p>{profile.email}</p>
                }
                </div>
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
                    {
                        profile ? 
                        <button onClick={handleSignOut} className='bg-primary flex items-center gap-2  text-white py-2 px-6'>Logout <IoIosLogOut size={22} color='white' /></button> :
                        <button onClick={()=>navigate('/auth/login')} className='bg-primary text-white py-2 px-8'>Login</button>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;