import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter-section bg-secondary">
		<div className="container mx-auto">
            
			<div className="hero-content  lg:flex-row flex-col max-w-full items-center p-0 justify-around">

                <div className="lg:w-8/12 mb-10">
				<h3 className="lg:text-5xl text-3xl font-bold text-center p-12 pb-4" >
                Deliciousness In your Inbox
                </h3>
                <p className="  text-center pb-12">
                Type your email down below and be young wild generation
                </p>
                <div className="form-control lg:w-96 mx-auto">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-block w-24">
      Submit
    </button>
  </div>
</div>
				</div>
                
       
                </div>
		</div>
        </section>
    );
};

export default Newsletter;