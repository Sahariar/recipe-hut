import React from "react";
import Beef from "../Beef/Beef";
import Hero from "../Hero/Hero";
import HomeCategory from "../HomeCategory/HomeCategory";
import Newsletter from "../Newsletter/Newsletter";
import Sweet from "../Sweet/Sweet";

const Home = () => {
	return (
        <div className="home">
        <Hero></Hero>
        <Sweet></Sweet>
        <HomeCategory></HomeCategory>
        <Beef></Beef>
        <Newsletter></Newsletter>
        </div>
		
	);
};

export default Home;
