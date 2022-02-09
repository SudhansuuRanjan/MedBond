import {React , useState} from 'react'
import './Partials.css'
import {MdMenu} from 'react-icons/md'
import {MdMenuOpen} from 'react-icons/md'
import logo from '../images/medbond2.png'

const NavBar2 = () => {
    
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
                <li className='nav-sub'>Notes</li>
                <li className='nav-sub'>Lectures</li>
                <li className='nav-sub'>Questions</li>
            </ul>
          </div>
          <div className='nav-search nav-up-comp'>
            <input type="text" placeholder='Search Topics' />
          </div>
          <div className='hamburger'>
             {navState ? <MdMenuOpen size={34} onClick={()=> setNavState(false)}/> : <MdMenu size={34}  onClick={()=> setNavState(true)}/>} 
          </div>
          </div>
          <div className= { navState ? "nav-bottom": "display-block"}>
             <div className='nav-mid'> 
                <ul>
                    <li className='nav-sub'>Notes</li>
                    <li className='nav-sub'>Lectures</li>
                    <li className='nav-sub'>Questions</li>
                </ul>
             </div>
            <div className='nav-search'>
                <input type="text" placeholder='Search Topics' />
            </div> 
          </div>
            
        </div>
    )
}

export default NavBar2

