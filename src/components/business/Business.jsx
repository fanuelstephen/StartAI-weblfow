import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BusinessData } from "../startAIData/Data";


const Business=()=> {
  return (
    <div className="section">
    <div className="minimize_content">
            <img src={BusinessData[0].image} alt="" />
        <div>
        <span><strong>Minimize</strong>the costs and support your clients  <strong> better</strong></span>
        <div>
            <ul>
                <li> <IoCheckmarkCircleSharp  className="markIcon"/>{BusinessData[0].desc1}</li>
                <li> <IoCheckmarkCircleSharp  className="markIcon"/>{BusinessData[0].desc2}</li>
                <li> <IoCheckmarkCircleSharp className="markIcon" />{BusinessData[0].desc3}</li>
           
            </ul>
        </div>

            <div className="btn-group">
                <a href="#" className="btn">Start for free</a>
                <div className="btn_link">
                   <div> <a href="#">Book a demo </a></div>
                    <div>
                        <RiArrowRightSLine className="rightArrow" />
                    </div>
                </div>
            </div>
        </div>  
    </div>
</div>
  )
}

export default Business
