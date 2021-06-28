import React from "react";
import SwiperCore, { EffectCoverflow , Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import "./Projects.scss";
import {allData} from './data.js'

// install Swiper modules
SwiperCore.use([EffectCoverflow , Autoplay]);

const Projects = () => {

  return (
	<div className="work">
		<main id="work">
		    <h1  className="text-uppercase lg-heading">
		      My
		      <span className="text-sec">Work</span>
		    </h1>

		    <h2 className="sm-heading">
		      Check out some of my projects...
		    </h2>

			<Swiper
				className="projects"
				effect='coverflow'
				spaceBetween={50}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 20,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}

			>
				{allData ? allData.map((item) => (
			      <SwiperSlide className="item" key={item.id}>
			        <a className="views" href={item.linkLive} rel="noreferrer" target="_blank">
			          <img src={item.img} alt={item.name} />
			        </a>
			        <a href={item.linkLive} className="btn-light" rel="noreferrer" target="_blank">
			          <i className="fas fa-eye"></i> {item.name}
			        </a>


					{item.frontBack && (
						<div className="item_Git">
						    <a href={item.backGithub} rel="noreferrer" target="_blank" className="btn-dark">
						      <i className="fab fa-github"></i> Backend
						    </a>
						    <a href={item.frontGithub} rel="noreferrer" target="_blank" className="btn-dark">
						      <i className="fab fa-github"></i> Frontend
						    </a>
						</div>

					)}

					{!item.frontBack && (
				        <a href={item.linkGithub} rel="noreferrer" target="_blank" className="btn-dark">
				          <i className="fab fa-github"></i> Github
				        </a>
					)}

			      </SwiperSlide>
				)) : <p>Loading...</p>}

			</Swiper>

		</main>
		<footer id="main-footer">
		Copyright &copy; 2021 Updated By <span> Mohmad Gamal </span>
		</footer>
	</div>
  );
}

export default Projects;
