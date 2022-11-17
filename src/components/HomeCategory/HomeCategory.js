import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HPopularCat from '../HPopularCat/HPopularCat';

const HomeCategory = () => {

    const [category , setCategory] = useState([]);
    useEffect(() => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(data => setCategory(data.data.categories));
     
    }, [])

    return (
        <section className='category-area my-10'>

        <div className="container mx-auto">
            <h2 className="text-4xl font-bold my-10 ">
                Popular Category :  <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> Check Out Our Categories.</span>
                   
                </span>
            </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-10">
        {
            category.map( item => <HPopularCat 
                key={item.idCategory} 
                item = {item}
            ></HPopularCat> )
        }
        </div>
        </div>

      
       </section>
    );
};

export default HomeCategory;