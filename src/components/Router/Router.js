import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import CategoryData from '../CategoryData/CategoryData';
import Home from '../Home/Home';
import MealDetails from '../MealDetails/MealDetails';
import Recipe from '../Recipe/Recipe';
const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'home',
                element: <Home></Home>
            },
            {
                path:'recipe',
                loader: async() => {
                   return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
                },
                element: <Recipe></Recipe>
            },
            {
                path:'meals/:idMeal',
                loader: async({params}) => {
                    console.log(params.idMeal);
                   return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
                },
                element: <MealDetails></MealDetails>
            },
            {
                path:'categories',
                loader: async() => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
                 },
                element: <Category></Category>
            },
            {
                path:'categorylist/:strCategory',
                loader: async({params}) => {
                    console.log(params.strCategory);
                   return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`)
                },
                element: <CategoryData></CategoryData>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            },
          ]
        },
      ]);
            
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Router;