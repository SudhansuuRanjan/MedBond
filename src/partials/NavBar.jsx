import {React , useState} from 'react'
import './Partials.css'
import {MdMenu} from 'react-icons/md'
import {MdMenuOpen} from 'react-icons/md'
import logo from '../images/medbond-logo.png'

const NavBar = () => {

    const [navState , setNavState] = useState(false);
    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 50){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
      <div className={colorChange?"navbar drop-shadow":"navbar"} >
          <div className="nav-up">
          <div className='navbar-img'>
               <img src={logo} alt=""  className='medbond-logo'/>
          </div>
          <div className='nav-mid nav-up-comp'> 
            <ul>
                <a href="#home"><li className='nav-sub home-nav'>Home</li></a>
                <a href="#about"><li className='nav-sub home-nav'>About</li></a>
               <a href="#resources"> <li className='nav-sub home-nav'>Resources</li></a>
                <a href="#team"><li className='nav-sub home-nav'>Team</li></a>
                <a href="#contact"><li className='nav-sub home-nav'>Contact</li></a>

            </ul>
          </div>
          <div className='nav-search nav-up-comp'>
            <button className='get-started'>Get started</button>
          </div>
          <div className='hamburger'>
             {navState ? <MdMenuOpen size={34} onClick={()=> setNavState(false)}/> : <MdMenu size={34}  onClick={()=> setNavState(true)}/>} 
          </div>
          </div>
          <div className= { navState ? "nav-bottom": "display-block"}>
             <div className='nav-mid'> 
                <ul>
                    <li className='nav-sub'>Microbiology</li>
                    <li className='nav-sub'>Pathology</li>
                    <li className='nav-sub'>Pharmacology</li>
                </ul>
             </div>
            <div className='nav-search'>
              <button className='get-started'>Get started</button>  
            </div> 
          </div>
            
        </div>
  );
};

export default NavBar;
