import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryList = ({item}) => {
    const { strCategory, strCategoryThumb  } = item


    const navigate = useNavigate();

    const handleNavigate = () =>{

        navigate(`/categorylist/${strCategory}`)
  }

    return (
        <div className="card bg-accent shadow-sm">
        <figure  className="px-10 pt-10">
            <img src={strCategoryThumb} alt={strCategory}  className="rounded-xl"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          
          <div className="my-4">
          <button
						className="btn btn-primary btn-block"
						onClick={() => {
							handleNavigate();
						}}
					>
						Check Out Items
					</button>
          
          </div>
          
        </div>
      </div>
    );
};

export default CategoryList;