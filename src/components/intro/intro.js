import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImage from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
  <section id='intro'>
<div className='introcontent'>
<span className='hello'>Hello,</span>
<span className='introText' >I'am{" "} <span className='introName'>Haymro</span><br/> Web Designer</span>
<p className='textpargaph'> I' am skiled in web designer,networking,adobe photoshop and<br></br>mobile application development</p>
<Link> <button className='btn'><img src={btnImage} alt='Hire Me'className='btnImg' />Hire Me</button></Link>
</div>
<img src={bg} alt='profile'className='bg'/>

  </section>

  )
}

export default Intro
