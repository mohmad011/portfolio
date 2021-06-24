import React from "react";
import "./Skills.scss";
import ProgressBar from 'react-animated-progress-bar';
const Skills = () => {

  const allSkills = [
  	{id:1, perc:"100", skill: "HTML"},
  	{id:2, perc:"97", skill: "HTML5"},
  	{id:3, perc:"97", skill: "CSS"},
  	{id:4, perc:"95", skill: "CSS3"},
  	{id:5, perc:"90", skill: "Pug JS"},
  	{id:6, perc:"97", skill: "SCSS"},
  	{id:7, perc:"95", skill: "Bootstrap"},
  	{id:8, perc:"90", skill: "Tailwind CSS"},
  	{id:9, perc:"95", skill: "Javascript"},
  	{id:11, perc:"97", skill: "Git"},
  	{id:12, perc:"90", skill: "Gulp JS"},
  	{id:13, perc:"95", skill: "Material UI"},
  	{id:14, perc:"90", skill: "AJAX"},
  	{id:15, perc:"95", skill: "React JS"},
	{id:16, perc:"90", skill: "Redux"},
	{id:17, perc:"95", skill: "Next JS"},
	{id:18, perc:"80", skill: "Webpack"},
	{id:19, perc:"80", skill: "Express JS"},
	{id:20, perc:"80", skill: "Node JS"},
	{id:21, perc:"80", skill: "Mongodb"},

  ]

  return (
	<div className="skills">

		<main id="skills">
		    <h1 className="text-uppercase lg-heading">
		      My
		      <span className="text-sec">Skills</span>
		    </h1>

		    <h2 className="sm-heading">
		      Check out of my Skills...
		    </h2>

			<div className="skills-container">
			      <div className="item">
			      	{allSkills ? allSkills.map((item) => (
				      	<div className="progress-bar" key={item.id}>
							<h3>{item.skill}</h3>
							<ProgressBar
							          width="500px"
							          height="10px"
							          fontColor="white"
							          trackWidth="10"
							          percentage={item.perc}
							          trackPathColor="#9e9e9e"
							          trackBorderColor="#fff"
							          hollowBackgroundColor="#333333"
							          defColor={{
							            fair: 'orangered',
							            good: 'yellow',
							            excellent: 'green',
							            poor: 'red',
							          }}
							          
							/>
				      	</div>
			      	)) : <p>Loading......</p>}

			      </div>

			</div>
		</main>
		<footer id="main-footer">
		Copyright &copy; 2021 Updated By <span> Mohmad Gamal </span>
		</footer>
	</div>
  );
}

export default Skills;


