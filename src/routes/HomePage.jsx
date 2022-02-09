import {React,useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NavBar2 from '../partials/NavBar2';
import ToggleSelect from '../partials/ToggleSelect';
import subjectImg from '../images/subjectImg.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import SelectSubject from '../partials/SelectSubject';


const HomePage = () => {

    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div>
            <NavBar2/>
            <ToggleSelect/>
            <SelectSubject/>
                    
        </div>
    )
}

export default HomePage
