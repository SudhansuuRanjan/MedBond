import React from 'react'
import {FaMedrt} from 'react-icons/fa'

const SelectSubject = () => {
  return (
    <div className='select-sub'>

        <div className="sub-cont">
            <div className="sub-imgg">
                 <div className="sub-svg">
                     <FaMedrt/>
                 </div>
            </div>
            <h3 className="sub-name">Anatomy</h3>
            <h6 className="sub-mod">20 modules</h6>
        </div>

        <div className="sub-cont">
            <div className="sub-imgg">
                 <div className="sub-svg">
                     <FaMedrt/>
                 </div>
            </div>
            <h3 className="sub-name">Anatomy</h3>
            <h6 className="sub-mod">20 modules</h6>
        </div>

        <div className="sub-cont">
            <div className="sub-imgg">
                 <div className="sub-svg">
                     <FaMedrt/>
                 </div>
            </div>
            <h3 className="sub-name">Anatomy</h3>
            <h6 className="sub-mod">20 modules</h6>
        </div>
    </div>
  )
}

export default SelectSubject