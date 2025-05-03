import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import swal from 'sweetalert';
import { ProviderContext } from '../../Provider/ProviderContext';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {

    const navigate = useNavigate();
    const { registerUser } = use(ProviderContext);
    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        registerUser(name, email, password)
            .then(() => {
                swal({
                    title: "Good job!",
                    text: "Registration Successful!",
                    icon: "success",
                  });
                  navigate('/')
            })
            .catch(error => {
                console.log(error.massege);
            })

    }

    return (
        <div className='max-w-screen-xl mx-auto flex justify-center h-dvh items-center'>
            <div className="flex flex-col w-full md:w-4/12 p-6 shadow-md rounded-xl sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-base-300">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div className='relative'>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                                title="Must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long" type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <button onClick={() => setShowPass(!showPass)} className='absolute right-5 bottom-3'>
                                {
                                    showPass ? <FaRegEye /> : <FaRegEyeSlash />
                                }
                            </button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                            <Link to="/auth/login" rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600 text-secondary">Sign in</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;