import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='max-w-screen-xl mt-8 mx-auto bg-base-200 py-4 px-3 flex items-center gap-2'>
            <button className='bg-secondary text-white py-2 px-5'>Latest</button>
            <div className='flex items-center pr-5'>

                <Marquee speed={35}>
                    <p className='font-medium text-lg'>📢 Breaking News: Heavy rainfall expected across the region this weekend | 📈 Stock Market Update: DSE gains 1.2% in early trading | 🗳️ Election 2025: Key candidates begin campaigns nationwide | ⚽ Sports: Bangladesh wins friendly match against Nepal 2-1</p>
                </Marquee>

            </div>
        </div>
    );
};

export default LatestNews;