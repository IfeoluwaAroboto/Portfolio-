import React from 'react';
import './Home.css'
import IMG from '../images/IMG-4176.jpg'
import image from '../images/image.jpg'
function Home (){
	return <div className='Text' style={{backgroundImage:`url(${image})`, backgroundSize:`cover`, minHeight:`100vh`}}>
	<div class="row justify-content-center">
	<div class="col-lg-12 col-md-12 align-items-center text-center">
                    <div class="title-heading mt-4 pb-60" id="header">
	  <img src={IMG} id = "ife" class="img-fluid rounded-circle" alt=""></img>
	  <h1 className=' font-36 text-dark'> I am Aroboto Ifeoluwa</h1>
	  <h6 className=" text-dark">I am a <span>FrontEnd Developer</span></h6>
	  <div className="hero-btn mt-4 pt-2" >
                            <a href="mailto:iamifeee@gmail.com" class="btn me-2 mb-2 text-light" id="hire">Hire Me</a>
                            <a href="https://resume.io/r/Ldnndntie" class="btn rounded text-dark mb-2" id="download">Download CV <i data-feather="download" class="fea icon-sm"></i></a>
   </div> </div>     </div>     </div>
</div>
}

export default Home;
