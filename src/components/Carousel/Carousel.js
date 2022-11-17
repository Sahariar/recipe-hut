import React from "react";

const Carousel = () => {
  // if you have 3 images
	return (
		<div className="container mx-auto">
			<div >
			<div className="carousel carousel-center w-1/2 p-4 space-x-4 bg-neutral rounded-box " id="carouselBox">
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div>
</div>
			</div>

		</div>
	);
};

export default Carousel;
