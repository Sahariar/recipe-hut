import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meals = useLoaderData().meals[0];
    const navigate = useNavigate()
    console.log(meals)
    const {
		strMeal,
		strMealThumb,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
		strIngredient9,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strTags,
        strCategory,
        strArea
	} = meals;
    const handleNavigate = () =>{

        navigate(`/categorylist/${strCategory}`)
  }
    return (
        <section className='meals-details-page'>
            
            <div className="header-area bg-primary">
            <div className="container mx-auto">
                <div className="flex justify-around items-center">
                <div className="title text-6xl">
                {strMeal}
                </div>
            <figure>
            <img src={strMealThumb} alt={strMeal} className="rounded-xl" />
        </figure>
                </div>
               
            </div>
      
            </div>
     
        <div className="container mx-auto my-10">
        <div className="ingredients my-10">
        <h2 className="text-4xl font-bold  ">
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> Ingredient List: </span>
                   
                </span>
            </h2>
        <div className="card-actions my-10">
                <p className="badge badge-accent capitalize">{strIngredient1}</p>
                <p className="badge badge-accent capitalize">{strIngredient2}</p>
                <p className="badge badge-accent capitalize">{strIngredient3}</p>
                <p className="badge badge-accent capitalize">{strIngredient4}</p>
                <p className="badge badge-accent capitalize">{strIngredient5}</p>
                <p className="badge badge-accent capitalize">{strIngredient6}</p>
                <p className="badge badge-accent capitalize">{strIngredient7}</p>
                <p className="badge badge-accent capitalize ">{strIngredient8}</p>
                <p className="badge badge-accent capitalize">{strIngredient9}</p>
            </div>
        </div>

        <div className="Instructions">
        <h2 className="text-4xl font-bold my-10 ">
       
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark">Measurement : </span>
                </span>
            </h2>
           <div className="flex flex-row justify-around items-start w-96">
            <div className="area-col-1">
            <div className="measurement">{strMeasure1}</div>
            <div className="measurement">{strMeasure2}</div>
            <div className="measurement">{strMeasure3}</div>
            <div className="measurement">{strMeasure4}</div>
            <div className="measurement">{strMeasure5}</div>
            </div>
            <div className="area-col-1">
            <div className="measurement">{strMeasure6}</div>
            <div className="measurement">{strMeasure7}</div>
            <div className="measurement">{strMeasure8}</div>
            <div className="measurement">{strMeasure9}</div>
            </div>
           </div>
        </div>
        <div className="Instructions">
        <h2 className="text-4xl font-bold my-5 ">
        Instructions <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> Guide to Make your Food : </span>
                </span>
            </h2>
            <p>{strInstructions}</p>
        </div>
        <div className="flex justify-around">
        <div className="tags">
        <h2 className="text-4xl font-bold my-5 ">
         <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> tags : </span>
                </span>
            </h2>
            <p>
                {strTags}
            </p>
        </div>
        <div className="tags">
        <h2 className="text-4xl font-bold my-5 ">
         <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> Meals Origin : </span>
                </span>
            </h2>
            <p>
        {strArea}
            </p>
        </div>
        <div className="tags">
        <h2 className="text-4xl font-bold my-5 ">
         <br />
                <span className='text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
                <span className="relative text-dark"> Category : </span>
                </span>
            </h2>
            <p className='cursor-pointer' onClick={()=> {
                handleNavigate()
            }}>
                {
        strCategory
        }
            </p>
           
        </div>
        </div>


           
            
        </div>
    </section>
    );
};

export default MealDetails;