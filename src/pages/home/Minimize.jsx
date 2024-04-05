import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { MinimizeData } from "../../startAIData/Data";

const Minimize = () => {
  return (
    <div className="section">
      <div className="minimize_content">
        <div className="content">
          <span>
            <strong>Minimize</strong>the costs and support your clients
            <strong> better</strong>
          </span>
          <div>
            <ul>
              <li>
                <IoCheckmarkCircleSharp className="markIcon" />
                {MinimizeData[0].desc1}
              </li>
              <li>
                <IoCheckmarkCircleSharp className="markIcon" />
                {MinimizeData[0].desc2}
              </li>
              <li>
                <IoCheckmarkCircleSharp className="markIcon" />
                {MinimizeData[0].desc3}
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <a href="/" className="btn">
              Start for free
            </a>
            <div className="btn_link">
              <div>
                <a href="/">Book a demo </a>
              </div>
              <div>
                <RiArrowRightSLine className="rightArrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="min-image">
          <img src={MinimizeData[0].image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Minimize;
