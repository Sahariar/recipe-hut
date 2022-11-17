import React from 'react';
import { useNavigate } from 'react-router-dom';

const HPopularCat = ({item}) => {
    const { strCategory, strCategoryThumb  } = item
    const navigate = useNavigate();

    const handleNavigate = () =>{

        navigate(`/categorylist/${strCategory}`)
  }

    return (
        <div className="card items-center">
        <div className="avatar">
        <div className="w-32 h-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
      </div>
      <h2 className="text-2xl text-center font-bold mt-5 cursor-pointer hover:bg-primary px-4" onClick={() => {
        handleNavigate()
      }}>
            {strCategory}
        </h2>
      </div>
    );
};

export default HPopularCat;