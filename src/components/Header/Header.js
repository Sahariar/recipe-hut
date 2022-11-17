import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-100 my-4'>
            <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <NavLink to='/recipe'>
                Recipe
            </NavLink>
        </li>
        <li>
            <NavLink to='/categories'>
            Category
            </NavLink>
        </li>
        <li>
            <NavLink to='/blog'>
                Blog
            </NavLink>
        </li>
      </ul>
    </div>
    <NavLink className="btn btn-ghost normal-case text-xl" to='/'> 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="208"
      height="256"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 208 256"
      xmlSpace="preserve"
      className='w-12 h-12'
    >
      <path d="M35.8 2C17.53 2 2 16.72 2 35v186c0 17.87 14.42 32.19 32.08 32.9v.1h171.74v-9.29c-13.23 0-23.93-10.7-23.93-23.93 0-13.22 10.7-23.92 23.93-23.92V2H35.8zM50 135.53c0-21.55 13.14-40.02 31.83-47.83.6-.22 1.08-.61 1.47-1.13 1.21-1.56 2.51-3.08 4.03-4.59 8.67-8.67 21.34-13.92 31.35-14.35 5.03-.18 9.76-2.26 13.31-5.81l2.86-2.91c1.78-1.78 2.52-4.42 1.78-6.81-.3-.99-.43-2.08-.3-3.16.35-3.6 3.25-6.55 6.85-6.94 4.73-.52 8.71 3.17 8.71 7.76 0 .91.57 1.35 1.26 1.35 4.6 0 8.28 3.98 7.76 8.71-.39 3.6-3.34 6.5-6.93 6.85-1.13.09-2.17-.04-3.17-.35-2.38-.78-5.03 0-6.81 1.78l-2.95 2.95c-6.37 6.37-5.16 14.79-7.41 22.81-2.25 8.15-6.63 15.74-12.62 21.72-5.94 5.98-12.57 9.58-19.12 10.45-1.91.26-3.25 2-2.99 3.9a3.428 3.428 0 003.42 3.04c.13 0 .31-.05.44-.05 8.06-1.04 16.08-5.33 23.15-12.4 6.9-6.89 12.23-16.34 14.79-26.14 12.31 9.49 20.29 24.41 20.29 41.15v1.86c0 8.63-6.98 15.61-15.61 15.61H65.61C56.98 153 50 146.02 50 137.39v-1.86zm122.6 85.15c0 9.39 4.04 17.87 10.3 23.93H35.4c-13.23.1-24.03-10.7-24.03-23.93 0-12.52 9.79-22.81 22.11-23.72l149.72-.31c-6.46 6.06-10.6 14.54-10.6 24.03z"></path>
    </svg>
    Recipe Hut
    </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li className='text-xl'>
            <NavLink to='/home'>
                Home
            </NavLink>
        </li>
    <li className='text-xl text-neutral'>
            <NavLink to='/recipe'>
                Recipe
            </NavLink>
        </li>
        <li className='text-xl text-neutral'>
            <NavLink to='/categories'>
            Category
            </NavLink>
        </li >
        <li className='text-xl text-neutral'>
            <NavLink to='/blog'>
                Blog
            </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='user' />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <NavLink className="justify-between">
            Profile
            <span className="badge">New</span>
          </NavLink>
        </li>
        <li><NavLink>Settings</NavLink></li>
        <li><NavLink>Logout</NavLink></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;