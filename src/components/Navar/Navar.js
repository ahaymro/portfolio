import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Navar.css';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
const Navar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className='Navbar'>
   <img src={logo} alt='logo' className='logo'/>
   <div className='desktopMenu'>
<Link className='desktopMenuItemList'activeClass='active' to="intro" smooth ={true} offset={-100} duration={500}>Home</Link>
<Link className='desktopMenuItemList'activeClass='active' to="skills" smooth ={true} offset={-50} duration={500}>About</Link>
<Link className='desktopMenuItemList'activeClass='active' to="works" smooth ={true} offset={-50} duration={500}>Portfolio</Link>
<Link className='desktopMenuItemList'activeClass='active' to="client" smooth ={true} offset={-50} duration={500}>Client</Link>
   </div>
   <button className='desktopMenuBtn' onClick={()=>{
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
   }}>
   <img src={contactImg} alt='' className='desktoMenuImg'/>Contact Me </button>
   <img src={menu} alt='menu' className='mobmeanu'onClick={()=>setShowMenu(!showMenu)}/>
   <div className='navmenu' style={ {display:showMenu? 'flex':'none'}}>
<Link className='ItemList'activeClass='active' to="intro" smooth ={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Home</Link>
<Link className='ItemList'activeClass='active' to="skills" smooth ={true} offset={-50} duration={500}onClick={()=>setShowMenu(false)}>About</Link>
<Link className='ItemList'activeClass='active' to="works" smooth ={true} offset={-50} duration={500}onClick={()=>setShowMenu(false)}>Portfolio</Link>
<Link className='ItemList'activeClass='active' to="client" smooth ={true} offset={-50} duration={500}onClick={()=>setShowMenu(false)}>Client</Link>
<Link className='ItemList'activeClass='active' to="client" smooth ={true} offset={-50} duration={500}onClick={()=>setShowMenu(false)}>Contact</Link>
   </div>
    </nav>
  )
}

export default Navar
