import React from 'react';
import './Contact.css'
import PIC from '../images/couch.jpg'
function Contact (){
return <div className ="Contact"  style={{backgroundImage:`url(${PIC})`, backgroundSize:`cover`, minHeight:`100vh`}}>
	 <div id="contact" class="row cover bottom">
        <h1 class="text-center contact-header">Contact Me</h1>
        <p class="text-center contact-email">Get in touch with me <span class="glyphicon glyphicon-arrow-right"></span> iamifeee@gmail.com</p>
        <div class="text-center contact-social-icons">
          <p>Or find me on:</p>
          <ul class="centered">
            <a href="https://www.linkedin.com/in/ife-aroboto-9489a920a/"><li><i class="fa fa-linkedin-square"></i> LinkedIn</li></a>
            <a href="https://github.com/ifeoluwaAroboto"><li><i class="fa fa-github"></i> Github</li></a>
            <a href="https://freecodecamp.com/"><li>(<i class="fa fa-fire"></i>) FreeCodeCamp</li></a>
            <a href="https://twitter.com"><li><i class="fa fa-twitter"></i> Twitter</li></a>
          </ul>
      </div>

    </div>
</div>

}

export default Contact;
