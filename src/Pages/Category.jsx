import React, { Suspense } from 'react';
import AllCategories from '../components/Category/AllCategories';
import Trending from './Trending';
import { Outlet } from 'react-router';

const categoryData = fetch('/categories.json').then(res => res.json());
const newsData = fetch('/news.json').then(res=>res.json());

const Category = () => {
    return (
        <div>
            <Suspense fallback={
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                </div>}>
                <AllCategories categoryData={categoryData}></AllCategories>
            </Suspense>

            <Trending newsData={newsData}></Trending>
        </div>
    );
};

export default Category;