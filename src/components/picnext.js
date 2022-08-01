import play from "../assets/images/play.svg";
import secure from "../assets/images/secure.svg";
import suitcase from "../assets/images/case.svg";
import magni from "../assets/images/Magnifier.svg";

const PicNext = () => {
  return (
    <>
      <div className="row ">
        <div className="col-lg-3 ms-lg-5 mt-5 pe-1 position-relative ">
          <div className="e-icon-bg ">
            <img src={secure} alt="" />
          </div>

          <div className="e-cylinder-card px-3 pt-3 pb-2">
            <div className="e-cylinder-card-body">
              <h5 className="e-cylinder-card-title">
                Passive fund based portfolio
              </h5>

              <p className="e-cylinder-card-text">
                Rapid has the highest return percentage compared to what others
                have to offer thus making it the most reliable .
              </p>
              <div className="row">
                <div className="col-6">
                  <a className="e-cylinder-view-more ">View more </a>
                </div>
                <div className="col-6 text-end">
                  <img src={play} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offset-lg-5 col-lg-3  my-5 pt-5 pe-1 position-relative">
          <div className="e-icon-bg " style={{ top: "1px" }}>
            <img src={suitcase} alt="" />
          </div>
          <div className="e-cylinder-card px-3 pt-3 pb-2">
            <div className="e-cylinder-card-body">
              <h5 className="e-cylinder-card-title">
                Personalized goal based investments
              </h5>

              <p className="e-cylinder-card-text">
                Rapid has the highest return percentage compared to what others
                have to offer thus making it the most reliable .
              </p>
              <div className="row">
                <div className="col-6">
                  <a className="e-cylinder-view-more ">View more </a>
                </div>
                <div className="col-6 text-end">
                  <img src={play} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-3 ms-lg-5 mt-5 pe-1 position-relative">
          <div className="e-icon-bg ">
            <img src={magni} alt="" />
          </div>
          <div className="e-cylinder-card px-3 pt-3 pb-2">
            <div className="e-cylinder-card-body">
              <h5 className="e-cylinder-card-title">
                Active management and monitoring of funds
              </h5>

              <p className="e-cylinder-card-text">
                Rapid has the highest return percentage compared to what others
                have to offer thus making it the most reliable .
              </p>
              <div className="row">
                <div className="col-6">
                  <a className="e-cylinder-view-more ">View more </a>
                </div>
                <div className="col-6 text-end">
                  <img src={play} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offset-lg-4 col-lg-3  mt-5 pt-5 pe-1">
          <div className="e-cylinder-card px-3 pt-3 pb-2">
            <div className="e-cylinder-card-body">
              <h5 className="e-cylinder-card4-title">Returns calculator</h5>
              <div className="row">
                <div className="col-6">
                  <h6 className="e-cylinder-card-subtitle mb-2 ">Invest now</h6>
                </div>
                <div className="col-6 text-end">
                  <p className="e-cylinder-card-subtitle-number">₹2,80,000</p>
                </div>
              </div>

              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="0.01"
                id="years_range"
              />

              <div className="row pt-2">
                <div className="col-3">
                  <p className="e-cylinder-card-subtitle">Time period</p>
                </div>
                <div className="col-9 e-cylinder-card-subtitle text-end ">
                  <button className="e-target " id="3years" name="years">
                    3 years
                  </button>
                  <button className="e-target" name="years" id="5years">
                    5 years
                  </button>
                  <button className="e-target" name="years" id="10years">
                    10 years
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PicNext;
