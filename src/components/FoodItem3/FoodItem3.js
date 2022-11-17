import React from 'react';

const FoodItem3 = ({item}) => {
    const { strMeal,strMealThumb } = item
    return (
        <div className="card bg-accent">
        <figure  className="px-10 pt-10">
            <img src={strMealThumb} alt={strMeal}  className="rounded-xl"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title px-10">{strMeal}</h2>
        </div>
      </div>
    );
};

export default FoodItem3;