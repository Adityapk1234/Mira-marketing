import muthoot from "../assets/images/muthoot.svg";
import bajaj from "../assets/images/bajaj.svg";
import fulltron from "../assets/images/fulltron.svg";
import hdfc from "../assets/images/hdfc.svg";

const Sponsors = () => {
  return (
    <div>
      <p className="e-second-p text-center">Our partners</p>
      <p className="e-second-ans mb-5">
        Backed by the best of the fintech world
      </p>
      <div
        className="row "
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="col-lg-2 col-md-3 col-sm-4 col-4  ">
          <div className="e-sponsor-card mb-3">
            <img
              className="card-img-top p-2"
              src={muthoot}
              alt="Interview of Joe root ( CEO of Prolep ) about MIRA."
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-4  ">
          <div className="e-sponsor-card mb-3">
            <img
              className="card-img-top p-2"
              src={bajaj}
              alt="Interview of Joe root ( CEO of Prolep ) about MIRA."
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-4  ">
          <div className="e-sponsor-card mb-3">
            <img
              className="card-img-top p-2"
              src={hdfc}
              alt="Interview of Joe root ( CEO of Prolep ) about MIRA."
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-4  ">
          <div className="e-sponsor-card mb-3">
            <img
              className="card-img-top p-2"
              src={fulltron}
              alt="Interview of Joe root ( CEO of Prolep ) about MIRA."
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-4 ">
          <div className="e-sponsor-card mb-3">
            <img
              className="card-img-top p-2"
              src={bajaj}
              alt="Interview of Joe root ( CEO of Prolep ) about MIRA."
            />
          </div>
        </div>
      </div>
      <p className="e-sponsor-text mt-5">
        + 15 more companies and brands from all over India.
      </p>
    </div>
  );
};

export default Sponsors;
