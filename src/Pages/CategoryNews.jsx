import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import News from '../components/News/News';

const CategoryNews = () => {
    const { id } = useParams();
    const numericId = parseInt(id)
    console.log(numericId);
    const newsData = useLoaderData();
    const [news, setNews] = useState([])

    useEffect(() => {
        if (numericId === 0) {
            setNews(newsData);
            return;
        }
        if (numericId === 1) {
            const filteredNews = newsData?.filter(item =>
                item.others.is_today_pick === true
            );
            setNews(filteredNews);
        } else {
            const filteredNews = newsData?.filter(item =>
                parseInt(item.category_id) === numericId
            );
            setNews(filteredNews);
        }
    }, [newsData, numericId]);

    return (
        <div className='px-5'>
            <h3>This is Category News: {id}</h3>

            <div className='flex flex-col gap-5 mt-5'>
                {
                    news?.map(item => <News key={item.id} item={item}></News>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;