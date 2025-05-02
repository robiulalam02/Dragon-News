import React, { use } from 'react';
import { NavLink } from 'react-router';

const AllCategories = ({ categoryData }) => {

    const categories = use(categoryData)

    return (
        <div>
            <h3 className='font-bold text-xl mb-5'>All Categoriy ({categories.length})</h3>
            <div className='flex flex-col'>
                {
                    categories.map(categoty => <NavLink to={`/categories/${categoty.id}`} className="p-5 text-accent hover:bg-base-300 hover:text-primary rounded-md" key={categoty.id}>{categoty.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default AllCategories;