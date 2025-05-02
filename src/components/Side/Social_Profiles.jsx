import React from 'react';

const Social_Profiles = () => {
    return (
        <div>
            <h3 className='font-bold'>Find Us On</h3>
            <div className="my-6 border border-base-300 rounded-xl">
                <button className='w-full flex items-center gap-2 py-4 px-8 border-b border-base-300'>
                    <img src="/src/assets/fb.png" alt="" />
                    <p>Facebook</p>
                </button>
                <button className='w-full flex items-center gap-2 py-4 px-8 border-b border-base-300'>
                    <img src="/src/assets/instagram.png" alt="" />
                    <p>Facebook</p>
                </button>
                <button className='w-full flex items-center gap-2 py-4 px-8'>
                    <img src="/src/assets/twitter.png" alt="" />
                    <p>Facebook</p>
                </button>
            </div>
        </div>
    );
};

export default Social_Profiles;