import {React , useState} from 'react'
import NavBar2 from '../partials/NavBar2'
import './Main.css'
import { Link } from 'react-router-dom';


   const data = [
      {
          subject: "tutorials",
          links:[
              {
               li:"link1",
               ln:"iinxxx1" 
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

const Physics = () => {

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
                  <>
                <h3 key='id'>{link.li}</h3> 
                <h3 key='id'>{link.ln}</h3> 
                  </>
              )
           }) 
        }
       </div>
     )
    }


    return (
        <>
            <NavBar2/>
            <div className='path'>  <Link to="/"> Home </Link>  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg> <p>Physics</p></div>

            <div>
               <h3>Table of Contents</h3>
               <div className='popup'>
                   <ul className='table-of-contents'>
                       <li value={0} onClick={(e) => setDataState(e.target.value)}>Tutorials</li>
                       <li value={1} onClick={(e) => setDataState(e.target.value)}>Reference</li>
                       <li value={2} onClick={(e) => setDataState(e.target.value)}>Tools & resources</li>
                   </ul>
               </div> 
            </div>


            <div>
                {listResources()} 
            </div>
        </>
    )
}

export default Physics
