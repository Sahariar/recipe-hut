import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meals from '../Meals/Meals';

const CategoryData = () => {
    const categoryData = useLoaderData().meals;
    return (
        <section className='category-data-area my-10'>

        <div className="container mx-auto">
            <h2 className="text-4xl font-bold my-10 mx-6 ">
               {
                window.location.pathname.slice(14)
               } Recipe <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark">For you to Check Out.</span>
                   
                </span>
            </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        
        {
            categoryData.map( item => <Meals 
                key={item.idMeal} 
                item = {item}
            ></Meals> )
        }


        </div>
        </div>

      
       </section>
    );
};

export default CategoryData;