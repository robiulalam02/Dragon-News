import React, { use, useEffect, useState } from 'react';
import TrendingNews from '../components/Trending/TrendingNews';
import { ImFire } from 'react-icons/im';

const Trending = ({ newsData }) => {

    const data = use(newsData)
    console.log(data);
    const [news, setNews] = useState([])

    useEffect(() => {
        const filteredNews = data?.filter(item => item.others.is_trending === true)
        setNews(filteredNews);
        console.log(filteredNews);
    }, [data])

    return (
        <div>
            <div className='flex items-center gap-2'>
                <h3 className='font-bold text-xl'>Trending News</h3>
                <ImFire size={20} color='#D72050'/>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
                {
                    news?.map(trending => <TrendingNews key={trending.id} trending={trending}></TrendingNews>)
                }
            </div>
        </div>
    );
};

export default Trending;