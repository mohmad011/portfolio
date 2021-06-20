import React from "react";
import logo from "../../kali.png";
import "./Nav.css";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  return (
	<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-custom">
		<div className="container">
			<Link className="navbar-brand" to="/">
				<img className="logo" src={logo} alt="logo...." />
			</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item mr-4 active">
				    <Link className="nav-link text-uppercase font-weight-bold text-white" to="/">Home <span className="sr-only">(current)</span></Link>
				  </li>
				  <li className="nav-item mr-4">
				    <Link className="nav-link text-uppercase font-weight-bold text-white" to="/about">About Me</Link>
				  </li>
				  <li className="nav-item mr-4">
				    <Link className="nav-link text-uppercase font-weight-bold text-white" to="/projects">Projects</Link>
				  </li>
				  <li className="nav-item mr-4">
				    <Link className="nav-link text-uppercase font-weight-bold text-white" to="/skills">Skills</Link>
				  </li>
				  <li className="nav-item mr-4">
				    <Link className="nav-link text-uppercase font-weight-bold text-white" to="/contuct">Contuct Me</Link>
				  </li>
				</ul>
			</div>
	  </div>
	</nav>
  );
}

export default withRouter(Nav);
