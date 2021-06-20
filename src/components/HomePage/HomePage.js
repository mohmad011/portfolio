import React from "react";
import "./HomePage.css";
import { Link, withRouter } from "react-router-dom";
import Typed from "react-typed";
import Particles from 'react-particles-js';

// data-aos
const HomePage = () => {

  return (
  	<>
		<Particles 
	        params={{
	            particles: {
	            	number: {
	            		value:50,
	            		density: {
	            			enable:true,
	            			value_area: 900
	            		}
	            	},
	                shape: {
	                    type: "square",
	                    stroke: {
	                    	width:6,
	                    	color:"#ffc107"
	                    }
	                }
	            }
	    	}} 
	    />
		<div className="home">
			<div  className="home__overLay"></div>
			<div  className="home__info d-flex flex-column justify-content-center align-items-center text-center">
				<h1 className="text-uppercase">I'm Mohmad Gamal</h1>
				<Typed
					className="home__typed-text"
					strings={['Front-End Developer']}
					typeSpeed={200}
					backSpeed={100}
					loop
				/>
			</div>
		</div>

  	</>
  );
}

export default HomePage;
