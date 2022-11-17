import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodItem3 from '../FoodItem3/FoodItem3';

const Sweet = () => {
    const [sweetFood , setSweetFood] = useState([]);
    useEffect(() => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=sushi_rice`)
        .then(data => setSweetFood(data.data.meals));
    }, [])

    return (
       <section className='sweet-area my-10'>

        <div className="container mx-auto">
            <h2 className="text-4xl font-bold my-10 ">
                Best Rice Recipe  <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> For you to try out.</span>
                   
                </span>
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
        {
            sweetFood.map( item => <FoodItem3 
                key={item.idMeal} 
                item = {item}
            ></FoodItem3> )
        }
        </div>
        </div>

      
       </section>
    );
};

export default Sweet;