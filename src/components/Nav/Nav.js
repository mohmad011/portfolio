import React from "react";
import logo from "../../kali.png";
import "./Nav.css";
import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {

  const StyleActive = {
  	color:"#d39e00" , 
  	borderTop: "0.0375rem solid #d39e00" , 
  	borderWidth:"80%"
  }

  return (
	<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-custom">
		<div className="container">
			<NavLink className="navbar-brand" activeClassName="active" to="/">
				<img className="logo" src={logo} alt="logo...." />
			</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item mr-4">
				    <NavLink className="nav-link text-uppercase font-weight-bold text-white" exact activeStyle={StyleActive}  to="/">Home <span className="sr-only">(current)</span></NavLink>
				  </li>
				  <li className="nav-item mr-4">
				    <NavLink className="nav-link text-uppercase font-weight-bold text-white" exact activeStyle={StyleActive} to="/about">About Me</NavLink>
				  </li>
				  <li className="nav-item mr-4">
				    <NavLink className="nav-link text-uppercase font-weight-bold text-white" exact activeStyle={StyleActive} to="/projects">Projects</NavLink>
				  </li>
				  <li className="nav-item mr-4">
				    <NavLink className="nav-link text-uppercase font-weight-bold text-white" exact activeStyle={StyleActive} to="/skills">Skills</NavLink>
				  </li>
				  <li className="nav-item mr-4">
				    <NavLink className="nav-link text-uppercase font-weight-bold text-white" exact activeStyle={StyleActive} to="/contuct">Contact Me</NavLink>
				  </li>
				</ul>
			</div>
	  </div>
	</nav>
  );
}

export default withRouter(Nav);
