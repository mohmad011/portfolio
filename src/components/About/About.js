import React from "react";
import "./About.css";
import ImgMo from "./mohmad.jpg"
const About = () => {

  return (
	<div className="container-cards">
		<div className="cards">
			<div className="imgBox">
				<img src={ImgMo} alt="mohmad" />
			</div>
			<div className="info">
				<h2>Mohmad Gamal Ali Mohmad</h2>
				<p>
					I'm Front End Developer with deep experience in building responsive websites with HTML, CSS, SASS, Javascript, JQuery with React.js As Framework using Git As version control. Passionate about clean code and get things done
				</p>
			</div>
		</div>
	</div>
  );
}

export default About;
