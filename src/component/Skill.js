import React from 'react';
import './Skill.css'
import IMG from '../images/img.jpg'
function Skill (){
return <div className = "skill"  style={{backgroundImage:`url(${IMG})`, backgroundSize:`cover`, minHeight:`100vh`}}>
 <div class="container">
    <h1>My Skills</h1>
    <h5> Here are a few skills I possess </h5>
    <div class="bar front expert" data-skill="HTML5"></div>
  <div class="bar front advanced" data-skill="CSS"></div>
  <div class="bar back advanced" data-skill="Bootstrap"></div>
    <div class="bar intermediate" data-skill="JavaScript"></div>
    <div class="bar back intermediate" data-skill="React"></div>
    <div class="bar back learning" data-skill="SCSS"></div>

  </div>
</div>

}

export default Skill;
