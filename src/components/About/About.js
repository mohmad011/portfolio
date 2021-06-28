import React, {useMemo} from "react";
import "./About.scss";
import ImgMo from "./mohmad.jpg"
const About = (props) => {

  const MyImg = useMemo(() => <img src={ImgMo} alt="mohmad" /> , [ImgMo])

  return (
	<div className="container-cards">
		<main id="container-cards">
		    <h1 className="text-uppercase lg-heading">
		      About
		      <span className="text-sec">Me</span>
		    </h1>

			<div className="cards-container">
			      <div className="cards">
						<div className="imgBox">
							{MyImg}
						</div>
						<div className="info">
							<h2>Mohmad Gamal Ali Mohmad</h2>
							<p>
								I'm Front End Developer with deep experience in building responsive websites with HTML, CSS, SASS, Javascript, JQuery with React.js As Framework using Git As version control. Passionate about clean code and get things done
							</p>
						</div>
			      </div>
			</div>
		</main>
	</div>
  );
}

export default About;
