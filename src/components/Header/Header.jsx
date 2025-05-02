import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='mt-10 text-center flex flex-col items-center gap-3'>
            <img src="/src/assets/logo.png" alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-lg text-primary font-medium'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
}; 

export default Header;