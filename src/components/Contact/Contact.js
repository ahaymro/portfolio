import React, { useRef } from 'react'
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookicon from '../../assets/facebook-icon.png'
import twitttericon from '../../assets/twitter.png'
import youtubeicon from '../../assets/youtube.png'
import instagramicon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehaabbm', 'template_g9x3wh8', form.current, {
        publicKey:'sTqvwL5k5fRpdSJ-l',
      })
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section id='contactpage'>
       <div id='client'>
        <h1 className='contactpagetitle'> My Client</h1>
        <p className='clientdesc'> I have had the opprtunity to work with a diverse
        group of companies. some of the notable companies I have worked with includes</p>
        <div className=' clientimage'>
<img src={walmart} alt='client' className='clientimg'/>
<img src={adobe} alt='client' className='clientimg'/>
<img src={microsoft} alt='client' className='clientimg'/>
<img src={facebook}alt='client' className='clientimg'/>
      </div>
        </div> 
     <div id='contact'></div>
<h1 className='contactpagetitle'>Contact Me</h1>
<span className='contactdesc'> Please fill the from below to discuss any work opportunity</span>
<form className='contactform' ref ={form} onSubmit={sendEmail} >
<input type='text' className='name' placeholder='Your Name'name="your_name"/>
<input type='email' className='email' placeholder='Your Email' name="your_email"/>
<textarea className ="msg" name="message" rows='5'placeholder='Your Message'/>
<button type='submit' value='send' className='submitbtn'>submit</button>
<diV className="links">
 <img src={facebookicon}   alt='Facebook'className='link'/>
 <img src={twitttericon}   alt='Twitter'className='link'/>
 <img src={youtubeicon}   alt='Youtube'className='link'/>
 <img src={instagramicon}   alt='Instagram'className='link'/>
</diV>
</form>
        </section>
    
  )
  
}

export default Contact
