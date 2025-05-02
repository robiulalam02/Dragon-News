import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SideBar = () => {
    return (
        <div>
            <h3 className='font-bold'>Login With</h3>
            <div className="my-6 space-y-4">
                <button aria-label="Login with Google" type="button" className="flex btn btn-secondary btn-outline items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <FcGoogle size={24}/>
                    <p>Login with Google</p>
                </button>
                <button aria-label="Login with GitHub" role="button" className="flex btn btn-outline items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <FaGithub size={24}/>
                    <p>Login with GitHub</p>
                </button>
            </div>
        </div>
    );
};

export default SideBar;