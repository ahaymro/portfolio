import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import  AppDesign from '../../assets/app-design.png';
function Skills() {
  return (
<section id="skills">
<span className='skilltitle'> What I Do</span>
<span className='skilldesc'>I am good and passionate at web design in creating visually apealling website.I have a strong understanding of design and a keen eye for detail.I am proffcent in html,css,javascript as well as design software such as adobe photoshop and illustrator</span>
<div className='skillbars'>
    <div className='skillbar'>
<img src={UIDesign}alt='UIDesign' className='skillimg'/>
<div className='skilltext'>
<h2>UI DESIGN</h2>
<p>About ui design</p>
</div>
</div>
<div className='skillbar'>
<img src={WebDesign} alt='webdesign' className='skillimg'/>
<div className='skilltext'>
<h2>WEB DESIGN</h2>
<p>About web design</p>
</div>
</div>
<div className='skillbar'>
<img src={AppDesign} alt='appdesign' className='skillimg'/>
<div className='skilltext'>
<h2>MOBILE APP DESIGN</h2>
<p> about mobile design</p>
</div>
</div>
</div>
    </section>
    )

}

export default Skills
