import { IntegrateData } from "../startAIData/Data";
const Integrate = () => {
  return (
    <div className="section">
      <div className="integrate-heading">
        <p>
          Integrate the AI support with <strong>1 line of code</strong>
        </p>
      </div>
      <div className="integer-content">
        <div>
          <img src={IntegrateData[0].IntegrateIcon} alt="" />
          <h5>{IntegrateData[0].IntegrateTittle}</h5>
          <span>{IntegrateData[0].IntegrateDesc}</span>
        </div>

        <div>
          <img src={IntegrateData[1].IntegrateIcon} alt="" />
          <h5>{IntegrateData[1].IntegrateTittle}</h5>
          <span>{IntegrateData[1].IntegrateDesc}</span>
        </div>

        <div>
          <img src={IntegrateData[2].IntegrateIcon} alt="" />
          <h5>{IntegrateData[2].IntegrateTittle}</h5>
          <span>{IntegrateData[2].IntegrateDesc}</span>
        </div>
      </div>
    </div>
  );
};
export default Integrate;
