import React from 'react';

const TrendingNews = ({trending}) => {
    console.log(trending);
    return (
        <div>
            <img className='rounded-md' src={trending.thumbnail_url} alt="" />
            <h3 className='text-gray-700 font-semibold'>{trending.title}</h3>
            <div>
                <span>{}</span>
            </div>
        </div>
    );
};

export default TrendingNews;