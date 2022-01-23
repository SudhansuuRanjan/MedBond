import {React , useState} from 'react'
import NavBar2 from '../partials/NavBar2'
import './Main.css'
import { Link } from 'react-router-dom';


   const data = [
      {
          subject: "General Microbiology",
          links:[
              {
               li:"Bacterial Morphology 1",
               ln:"iinxxx1" 
               },
               {
               li:"Bacterial morphology 2",
               ln:"iinxxx2" 
               },
               {
               li:"Bacterial Physiology",
               ln:"iinxxx3" 
               },
               {
               li:"Bacterial Genetics 1",
               ln:"iinxxx3" 
               },
               {
               li:"General Virology 1",
               ln:"iinxxx3" 
               },
               {
               li:"General Virology 2",
               ln:"iinxxx3" 
               },
               {
               li:"General Parasitology",
               ln:"iinxxx3" 
               },
               {
               li:"Overview of Parasitic Infections",
               ln:"iinxxx3" 
               },
               {
               li:"General Mycology",
               ln:"iinxxx3" 
               },
               {
               li:"Overview of fungal Infections",
               ln:"iinxxx3" 
               },
               {
               li:"Epidemiology of Infectious Diseases",
               ln:"iinxxx3" 
               },
               {
               li:"Normal Human Microbiota",
               ln:"iinxxx3" 
               },
          ],
      },
       {
          subject: "tutorials1",
          links:[
              {
               li:"link11",
               ln:"iinxxx1" 
               },
               {
               li:"link22",
               ln:"iinxxx2" 
               },
               {
               li:"link3",
               ln:"iinxxx3" 
               },
          ],
      },
       {
          subject: "tutorials2",
          links:[
              {
               li:"link111",
               ln:"iinxxx111" 
               },
               {
               li:"link2",
               ln:"iinxxx2" 
               },
               {
               li:"link3",
               ln:"iinxxx3" 
               },
          ],
      },
    ]

const Microbiology = () => {

 const [dataState , setDataState] = useState(0);


 function listResources(){
     
     

    return(
        <div>
        <div className="subject-topic-cont">
            <h1 className='subject-topic'>{data[dataState].subject}</h1>
        </div>
        {
           data[dataState].links.map((link,id)=>{
              return(
                <div className="container" key={id}>
                <h3>{link.li}</h3> 
                <h3>{link.ln}</h3>
                </div> 
              )
           }) 
        }
       </div>
     )
    }


    return (
        <>
            <NavBar2/>
            <div className='path'>  <Link to="/"> Home </Link>  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg> <p>Microbiology</p></div>

            <div className="subject-body-container">
             <div className='subject-lists'>
               <h3 className='table-head'>Table of Contents</h3>
               <div className='popup'>
                   <ul className='table-of-contents'>
                       <li className='subject-li' value={0} onClick={(e) => {
                           setDataState(e.target.value)
                       }}>General Microbiology</li>
                       <li className='subject-li' value={1} onClick={(e) => setDataState(e.target.value)}>Immunology</li>
                       <li className='subject-li' value={2} onClick={(e) => setDataState(e.target.value)}>Hospital Infection Control</li>
                   </ul>
               </div> 
            </div>
            <div className="subject-body">
                {listResources()} 
            </div>
            </div>
        </>
    )
}

export default Microbiology
