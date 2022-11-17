import React from "react";
import { useNavigate } from "react-router-dom";

const Meals = ({item}) => {
	const {
		strMeal,
		strMealThumb,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
            idMeal
	} = item;

      const navigate = useNavigate();

      const handleNavigate = () =>{

            navigate(`/meals/${idMeal}`)
      }
	  
      if(!strIngredient1){
        
      }
	return (
		<div className="card bg-accent">
			<figure className="px-10 pt-10">
				<img src={strMealThumb} alt={strMeal} className="rounded-xl" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{strMeal}</h2>
				<p className={ strInstructions ? 'show' : 'hidden'}>{strInstructions?.slice(0, 250)}</p>
                      
				<div className={ strIngredient1 ? 'card-action' : 'hidden'}>
					<p className="badge badge-neutral">{strIngredient1}</p>
					<p className="badge badge-neutral">{strIngredient2}</p>
					<p className="badge badge-neutral">{strIngredient3}</p>
					<p className="badge badge-neutral">{strIngredient4}</p>
					<p className="badge badge-neutral">{strIngredient5}</p>
				</div>
				<div className="my-4">
					<button
						className="btn btn-primary btn-block"
						onClick={() => {
							handleNavigate();
						}}
					>
						Check Out Full Instructions
					</button>
				</div>
			</div>
		</div>
	);
};

export default Meals;
