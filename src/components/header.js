import rupay from "../assets/images/rupay.svg";
const Header = () => {
  return (
    <>
      <h1 className="e-header-title">Expert designed portfolios</h1>
      <h2 className="e-header-subtitle">
        With fall-protection mechanism for market-
        <br />
        beating returns
      </h2>
      <div className="row my-5 gx-2">
        {/* 12% */}
        <img
          src={rupay}
          className=" img-fluid col-lg-3 col-md-3 col-sm-3 col-3 p-1 mt-1"
        />

        <div className=" col-lg-9 col-md-9 col-sm-9 col-9 e-p pt-3 ">
          <span>
            Our average returns for last 3 years. <br />
          </span>
          <span
            style={{
              fontWeight: "500",
              color: "#121212",
              whiteSpace: "inherit",
            }}
          >
            68% more returns than Nifty 50 benchmark.
          </span>
        </div>
      </div>

      <p className="e-phone ">Enter your phone no.</p>
      <div className="row">
        <div className="col-8">
          <div className=" input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="00 00 000 000"
              aria-label="Enter phone number"
              aria-describedby="button-1"
            />
            <button type="button" id="button-1" className="btn btn-primary p-3">
              Get access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
