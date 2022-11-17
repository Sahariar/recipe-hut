import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meals from '../Meals/Meals';

const Recipe = () => {
    const recipe = useLoaderData();
    const recipes = recipe.meals

    return (
        <section className='recipe-area my-10'>

        <div className="container mx-auto">
            <h2 className="text-4xl font-bold my-10 ">
                Hand Picked Recipes  <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark">For you to Check Out.</span>
                   
                </span>
            </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
         
        {
            recipes.map( item => <Meals 
                key={item.idMeal} 
                item = {item}
            ></Meals> )
        }


        </div>
        </div>

      
       </section>
    );
};

export default Recipe;