import React from 'react';
import './About.css';
import PIC from '../images/pic2.jpg'
function About () {
	return <div className='About' style={{backgroundImage:`url(${PIC})`, backgroundSize:`cover`, minHeight:`100vh`}}>
		  <section class="section section-center about-page">
      <div class="title">
        <h2><span>/</span> About Me</h2>
      </div>
      <p class="about-text">
	  I am a Front-end Developer adapt in all stages of web develpment. Knowledgeable in HTML, CSS, BOOTSTRAP, JAVASCRIPT AND REACTJS Ever since I have gotten into Front-end developement, I have discovered a passion for it.
	  I am passionate and goal driven, willing to learn and also a team player.
      </p>
    </section>
	<section class="section section-center about-page">
      <div class="title">
        <h2><span>/</span> Training </h2>
      </div>
      <p class="about-text">
		<h5> 14GxZuri Training <span>Year: 2022</span></h5>
		With this amazing opportunity, I got to improve my skills in HTML, CSS, AND JAVASCRIPT. Making it to the project stage, I got to work with a team which was the most enlightening process. We worked on creating a Content Management System using Trello, Github, 
		and Figma for team work. I got a feel of how a work space is in the real world.
      </p>
	  <p class="about-text">
		<h5>Side Hustle Internship <span>Year: 2022</span></h5>
	With Side Hustle Internship, I got learn about REACTJS with it's intearctive learning process. I got to build real life 
	projects like this portfolio for example to aid my learning process.
      </p>
    </section>
	</div>
}
export default About;
