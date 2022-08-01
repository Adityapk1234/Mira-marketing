import coins from "../assets/images/coins.svg";
import building from "../assets/images/building.svg";
import cpr from "../assets/images/cpr.svg";
const Typess = () => {
  return (
    <>
      <div className="row border-bottom pb-4">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
          <img src={coins} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12  pe-0">
          <p className="e-types1 mt-3">Investment</p>
          <p className="e-types1-details">
            Guide for designing better mobile apps typography
          </p>
        </div>
      </div>
      <div className="row border-bottom mt-4 pb-4">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
          <img src={cpr} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12  pe-0">
          <p className="e-types1 mt-3" style={{ background: "#198A8A" }}>
            Mutual funds
          </p>
          <p className="e-types1-details">
            What are the types of SIPs available, and how they work?
          </p>
        </div>
      </div>
      <div className="row  mt-4">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
          <img src={building} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12  pe-0">
          <p className="e-types1 mt-3" style={{ background: " #E1BE66" }}>
            IPO
          </p>
          <p className="e-types1-details">
            What is ESOP? - Benefits and Detailed Explanation with Example.
          </p>
        </div>
      </div>
    </>
  );
};

export default Typess;
