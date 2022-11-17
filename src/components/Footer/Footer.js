import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-base-200">
			<div className="container mx-auto">
				<footer className="footer py-10 text-base-content px-8">
					<div>
						<Link to="/">
							<span className="text-xl gap-2 flex justify-center items-center font-bold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="208"
									height="256"
									x="0"
									y="0"
									version="1.1"
									viewBox="0 0 208 256"
									xmlSpace="preserve"
									className="w-12 h-12"
								>
									<path d="M35.8 2C17.53 2 2 16.72 2 35v186c0 17.87 14.42 32.19 32.08 32.9v.1h171.74v-9.29c-13.23 0-23.93-10.7-23.93-23.93 0-13.22 10.7-23.92 23.93-23.92V2H35.8zM50 135.53c0-21.55 13.14-40.02 31.83-47.83.6-.22 1.08-.61 1.47-1.13 1.21-1.56 2.51-3.08 4.03-4.59 8.67-8.67 21.34-13.92 31.35-14.35 5.03-.18 9.76-2.26 13.31-5.81l2.86-2.91c1.78-1.78 2.52-4.42 1.78-6.81-.3-.99-.43-2.08-.3-3.16.35-3.6 3.25-6.55 6.85-6.94 4.73-.52 8.71 3.17 8.71 7.76 0 .91.57 1.35 1.26 1.35 4.6 0 8.28 3.98 7.76 8.71-.39 3.6-3.34 6.5-6.93 6.85-1.13.09-2.17-.04-3.17-.35-2.38-.78-5.03 0-6.81 1.78l-2.95 2.95c-6.37 6.37-5.16 14.79-7.41 22.81-2.25 8.15-6.63 15.74-12.62 21.72-5.94 5.98-12.57 9.58-19.12 10.45-1.91.26-3.25 2-2.99 3.9a3.428 3.428 0 003.42 3.04c.13 0 .31-.05.44-.05 8.06-1.04 16.08-5.33 23.15-12.4 6.9-6.89 12.23-16.34 14.79-26.14 12.31 9.49 20.29 24.41 20.29 41.15v1.86c0 8.63-6.98 15.61-15.61 15.61H65.61C56.98 153 50 146.02 50 137.39v-1.86zm122.6 85.15c0 9.39 4.04 17.87 10.3 23.93H35.4c-13.23.1-24.03-10.7-24.03-23.93 0-12.52 9.79-22.81 22.11-23.72l149.72-.31c-6.46 6.06-10.6 14.54-10.6 24.03z"></path>
								</svg>
								Recipe Hut
							</span>
						</Link>
						<p>
							A Cooking Recipe Book for
							<br />
							Your Favorite foods.
						</p>
					</div>
					<div>
						<span className="footer-title">Services</span>
						<div className="link link-hover">Branding</div>
						<div className="link link-hover">Design</div>
						<div className="link link-hover">Marketing</div>
						<div className="link link-hover">Advertisement</div>
					</div>
					<div>
						<span className="footer-title">Company</span>
						<div className="link link-hover">About us</div>
						<div className="link link-hover">Contact</div>
						<div className="link link-hover">Jobs</div>
						<div className="link link-hover">Press kit</div>
					</div>
					<div>
						<span className="footer-title">Legal</span>
						<div className="link link-hover">Terms of use</div>
						<div className="link link-hover">Privacy policy</div>
						<div className="link link-hover">Cookie policy</div>
					</div>
				</footer>
			</div>
			<div className="footer items-center p-4 text-neutral bg-base-300">
				<div className="container mx-auto">
					<div className="items-center grid-flow-col">
						<p>Copyright © 2022 - All right reserved</p>
					</div>
					<div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</div>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
