import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Skill from './component/Skill';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="Sidenav">
			<ul className="nav">
			<li>
				<Link to="/"> <i class="fas fa-home"></i></Link>
			</li>
			<li>
				<Link to="/about"><i class="bi bi-person-circle"></i></Link>
			</li>
			<li>
				<Link to="/Skill"><i class="bi bi-trophy-fill"></i></Link>
			</li>
			
			<li>
				<Link to="/contact"><i class="fas fa-phone"> </i></Link>
			</li>
		
			</ul>
		
		</div>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/about' element={< About />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route>
				<Route exact path='/Skill' element={< Skill />}></Route>
		</Routes>
	</Router>
);
}
}

export default App;
