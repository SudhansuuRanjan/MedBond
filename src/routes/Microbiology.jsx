import {React , useState, useEffect } from 'react'
import NavBar2 from '../partials/NavBar2'
import './Main.css'
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from 'react-icons/md'
import {MdSchool} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import NavBar from '../partials/NavBar';


   const data = [ { subject: "General Microbiology", links:[ { li:"Bacterial Morphology", ln:"iinxxx1" }, { li:"Bacterial Physiology", ln:"iinxxx2" }, { li:"Bacterial Genetics", ln:"iinxxx3" }, { li:"Antimicrobial Agents and Antimicrobial Resistance", ln:"iinxxx3" }, { li:"General Virology", ln:"iinxxx3" }, { li:"Overview of Viral Infections", ln:"iinxxx3" }, { li:"General Parasitology", ln:"iinxxx3" }, { li:"Clinical Parasitology (Parasitic Infections)", ln:"iinxxx3" }, { li:"General Mycology", ln:"iinxxx3" }, { li:"Overview of Fungal Infections", ln:"iinxxx3" }, ], }, { subject: "Immunology", links:[ { li:"Immunty (Innate and Acquired)", ln:"iinxxx1" }, { li:"Antigen", ln:"iinxxx2" }, { li:"Antibody", ln:"iinxxx3" }, ], }, { subject: "Hospital Infection Control", links:[ { li:"Sterilization and Disinfectant", ln:"iinxxx1" }, { li:"Biomedical waste Management", ln:"iinxxx2" }, { li:"Needle Stick Injury", ln:"iinxxx3" }, ], }, { subject: "Bloodstream and CVS Infections", links:[ { li:"CVS Infections: Infective Endocarditis and Acute Rheumatic Fever ", ln:"iinxxx111" }, { li:"Bloodstream Infections", ln:"iinxxx2" }, { li:"Enteric Fever", ln:"iinxxx3" }, ], }, { subject: "GI Infections", links:[ { li:"GI syndrome", ln:"iinxxx111" }, { li:"link2", ln:"iinxxx2" }, { li:"link3", ln:"iinxxx3" }, ], }, { subject: "Hepatobilary System Infections", links:[ { li:"link111", ln:"iinxxx111" }, { li:"link2", ln:"iinxxx2" }, { li:"link3", ln:"iinxxx3" }, ], }, { subject: "Skin, Soft Tissue and Muskuloskeletal System Infections", links:[ { li:"link111", ln:"iinxxx111" }, { li:"link2", ln:"iinxxx2" }, { li:"link3", ln:"iinxxx3" }, ], }, { subject: "Respiratory Tract Infections", links:[ { li:"link111", ln:"iinxxx111" }, { li:"link2", ln:"iinxxx2" }, { li:"link3", ln:"iinxxx3" }, ], }, { subject: "CNS Infections", links:[ { li:"link111", ln:"iinxxx111" }, { li:"link2", ln:"iinxxx2" }, { li:"link3", ln:"iinxxx3" }, ], }, { subject: "Urogenital Tract Infections", links:[ { li:"link111", ln:"iinxxx111" }, { li:"link2", ln:"iinxxx2" }, { li:"link3", ln:"iinxxx3" }, ], }, ]

const Microbiology = () => {

 const [dataState , setDataState] = useState(0);
 const [popup , setPopup] = useState(0);

  useEffect(() => listResources(), );

  function listTopics(){
      return(
          <ul className='table-of-contents'>
              {
                  data.map((topic , id)=>{
                      return(
                    <li className='subject-li' key={id} value={id} onClick={(e) => {
                        setDataState(e.target.value)
                        setPopup(0)
                    }}>{topic.subject}</li>  
                      )
                  })
              }
          </ul>
      )
  }

 function listResources(){
    return(
        <div>
        {
           data[dataState].links.map((link,id)=>{
              return(
  
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=""
                        iconStyle={{ background: '#005142', color: '#fff' }}
                        icon={<MdWork />}
                        key={id}
                    >
                        <h3 className="vertical-timeline-element-title">{link.li}</h3>
                        <p className='resource-type'>
                        Comprehensive handwritten notes.
                        </p>
                        <a href={link.ln}><button className='resource-btn'>Click Here</button></a>
                    </VerticalTimelineElement>
              );
           }) 
        }
       </div>
     )
    }


    return (
        <>
            <NavBar2/>
            <div className="subject-body-container">
             <div className='subject-lists'>
                 <div className='popup-cover'><button className='popup-btn' onClick={() => setPopup(1)}>Choose Subtopic</button></div>
               <div className={ popup ? 'popup' : 'popup display-none'}>
                 <div className='path'>  <Link to="/"> Home </Link>  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg> <p>Microbiology</p></div>

                <h3 className='table-head'>Table of Contents</h3>
                   {listTopics()}
               </div> 
            </div>
            <div className="subject-body">
            <div className="subject-topic-cont">
            <h1 className='subject-topic'>{data[dataState].subject}</h1>
            </div>

            <div className='chemistry'>
                <VerticalTimeline>
                    {listResources()}
                    <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<AiFillStar />}
                />
                </VerticalTimeline>
            </div> 
            <p>Hemlo</p>
            </div>
            </div>
        </>
    )
}

export default Microbiology
