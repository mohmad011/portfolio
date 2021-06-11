import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav"
import HomePage from "./components/HomePage/HomePage"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contuct from "./components/Contuct/Contuct"

function App() {
  return (
    <BrowserRouter>
      	<Nav />
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/skills" component={Skills} />
			<Route path="/contuct" component={Contuct} />
		</Switch>
    </BrowserRouter>
  );
}

export default App;
