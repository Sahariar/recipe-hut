import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';

const Category = () => {
    const category = useLoaderData();
    const categories = category.categories
    return (
        <section className='category-area my-10'>

        <div className="container mx-auto">
        <h2 className="text-4xl font-bold my-10 ">
                All Category :  <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> Check Out Our Categories.</span>
                   
                </span>
            </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
      
     { 
            categories.map( item => <CategoryList 
                 key={item.idCategory} 
                item = {item}
             ></CategoryList> )
         }


        </div>
        </div>

      
       </section>
    );
};

export default Category;