import React, {useMemo} from "react";
import "./Projects.css";
import amazon from "./imgs/amazon.jpg"
import tiktok from "./imgs/tiktok.png"
import tinder from "./imgs/tinder.png"
import shopStore from "./imgs/store.png"
import TV from "./imgs/logoFlix.png"
import Todo from "./imgs/todo.png"
import Bookmark from "./imgs/illustration-features-tab-2.svg"
import Car from "./imgs/car.jpg"
import Composition from "./imgs/developer.jpg"
import Special from "./imgs/landing2.jpg"
import Elite from "./imgs/slide1.jpg"
import Prototypes from "./imgs/landing7.png"
import Home from "./imgs/home.jpg"
import Tech from "./imgs/tec.jpg"

const Projects = () => {

	const allData = [
		{id:1,img:useMemo(() => amazon , [amazon]),linkLive:"https://amazon-app-self.vercel.app/",linkGithub:"https://github.com/Mohmad012/Amazon_App",name:"Amazon App",frontBack:false},
		{id:2,img:useMemo(() => tiktok , [tiktok]),linkLive:"https://tiktok-f8fc2.web.app/",frontGithub:"https://github.com/Mohmad012/TikTok_frontend",backGithub:"https://github.com/Mohmad012/TikTok_backend",name:"TikTok App",frontBack:true},
		{id:3,img:useMemo(() => tinder , [tinder]),linkLive:"https://mohmad012.github.io/Tinder_frontend/",frontGithub:"https://github.com/Mohmad012/Tinder_frontend",backGithub:"https://github.com/Mohmad012/Tinder_backend",name:"Tinder App",frontBack:true},
		{id:4,img:useMemo(() => shopStore , [shopStore]),linkLive:"https://store-shop-phi.vercel.app/",linkGithub:"https://github.com/Mohmad012/Store_Shop",name:"Shop Store",frontBack:false},
		{id:5,img:useMemo(() => TV , [TV]),linkLive:"https://mohmad012.github.io/TV_Search_Flix/",linkGithub:"https://github.com/Mohmad012/TV_Search_Flix",name:"TV Search Flims",frontBack:false},
		{id:6,img:useMemo(() => Todo , [Todo]),linkLive:"https://mohmad012.github.io/TodoList/",linkGithub:"https://github.com/Mohmad012/TodoList",name:"Todo List",frontBack:false},
		{id:7,img:useMemo(() => Bookmark , [Bookmark]),linkLive:"./Projects/Bookmark/index.html",linkGithub:"https://github.com/Mohmad012/Portfolio/tree/main/Projects/Bookmark",name:"Bookmark Site",frontBack:false},
		{id:8,img:useMemo(() => Car , [Car]),linkLive:"https://mohmad012.github.io/car-site/",linkGithub:"https://github.com/Mohmad012/car-site",name:"Car Site",frontBack:false},
		{id:9,img:useMemo(() => Composition , [Composition]),linkLive:"https://mohmad012.github.io/Sass_Pugjs_Project/",linkGithub:"https://github.com/Mohmad012/Sass_Pugjs_Project",name:"Composition Site",frontBack:false},
		{id:10,img:useMemo(() => Special , [Special]),linkLive:"https://mohmad012.github.io/web_pure_Javascript/",linkGithub:"https://github.com/Mohmad012/web_pure_Javascript",name:"Special Design",frontBack:false},
		{id:11,img:useMemo(() => Elite , [Elite]),linkLive:"https://mohmad012.github.io/Bootstrap4/",linkGithub:"https://github.com/Mohmad012/Bootstrap4",name:"Elite Corp Site",frontBack:false},
		{id:12,img:useMemo(() => Prototypes , [Prototypes]),linkLive:"https://mohmad012.github.io/bootstrap3-2/",linkGithub:"https://github.com/Mohmad012/bootstrap3-2",name:"Prototypes Site",frontBack:false},
		{id:13,img:useMemo(() => Home , [Home]),linkLive:"https://mohmad012.github.io/Real-Estate-Site/",linkGithub:"https://github.com/Mohmad012/Real-Estate-Site",name:"Home Design Site",frontBack:false},
		{id:14,img:useMemo(() => Tech , [Tech]),linkLive:"https://mohmad012.github.io/bootstrap3-1/",linkGithub:"https://github.com/Mohmad012/bootstrap3-1",name:"Tech Site",frontBack:false},
	]
  return (
	<div className="work">
		<main id="work">
		    <h1 className="lg-heading">
		      My
		      <span className="text-sec">Work</span>
		    </h1>

		    <h2 className="sm-heading">
		      Check out some of my projects...
		    </h2>

			<div className="projects">
				{allData ? allData.map((item) => (
			      <div className="item" key={item.id}>
			        <a className="views" href={item.linkLive} rel="noreferrer" target="_blank">
			          <img src={item.img} alt={item.name} />
			        </a>
			        <a href={item.linkLive} className="btn-light" rel="noreferrer" target="_blank">
			          <i className="fas fa-eye"></i> {item.name}
			        </a>


					{item.frontBack && (
						<div class="item_Git">
						    <a href={item.backGithub} rel="noreferrer" target="_blank" class="btn-dark">
						      <i class="fab fa-github"></i> Backend
						    </a>
						    <a href={item.frontGithub} rel="noreferrer" target="_blank" class="btn-dark">
						      <i class="fab fa-github"></i> Frontend
						    </a>
						</div>

					)}

					{!item.frontBack && (
				        <a href={item.linkGithub} rel="noreferrer" target="_blank" className="btn-dark">
				          <i className="fab fa-github"></i> Github
				        </a>
					)}

			      </div>
				)) : <p>Loading...</p>}

			</div>
		</main>
		<footer id="main-footer">
		Copyright &copy; 2021 Updated By <span> Mohmad Gamal </span>
		</footer>
	</div>
  );
}

export default Projects;
