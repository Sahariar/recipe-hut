import React from 'react';

const Hero = () => {
    return (
        <section className="hero-area my-10">
        <div className="container mx-auto">
            <div className=" bg-accent rounded-xl px-10 xl:px-0">
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-7/12 w-10/12 xl:mx-0 mx-auto">
                        <img
                            src="https://images.unsplash.com/photo-1621955511667-e2c316e4575d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                            className="rounded-lg shadow-2xl marker:min-h-fit"
                            alt="hero-header"
                        />
                    </div>

                    <div className="w-1/12"></div>
                    <div className="xl:w-3/12 w-10/12 flex xl:items-end items-center mx-auto">
                        <div className="py-12">
                            <p className="">
                                <span className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                        />
                                    </svg>
                                    85% Likely to Make this Again
                                </span>
                            </p>
                            <h1 className="md:text-7xl text-5xl font-bold">
                                Slice of Cheesecake
                            </h1>
                            <p className="py-6 text-xl">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                                assumenda excepturi exercitationem quasi. In deleniti eaque
                                aut repudiandae et a id nisi.
                            </p>
                            <div className="flex justify-end">
                                <button className="btn btn-ghost">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;