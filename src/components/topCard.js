const TopCard = () => {
  return (
    <>
      <div className="e-white-card p-1">
        <span className="e-white-card-percent">73 %</span>{" "}
        <span className="e-white-card-text">
          more returns <br /> than
        </span>{" "}
        <span className="e-white-card-bold">Nifty 50 </span>
      </div>
      <div className="e-card p-3 pe-3">
        <span className="e-card-title">
          Rising Alpha PMS <br />
        </span>
        <span className="e-card-subtitle mb-2">
          3y CAGR* : 22.4% <br />
        </span>
        <span className="e-card-text">
          Portfolio with all-equity <br />
          multicap d&I index funds
        </span>
      </div>
      <div className="e-white-card1 p-2 ">
        <span className="e-white-card-percent">63 % </span>{" "}
        <span className="e-white-card-text">
          more returns <br />
          than
        </span>{" "}
        <span className="e-white-card-bold">Nifty 50 </span>
      </div>

      <div className="card1 p-3 pe-3 ">
        <span className="e-card-title">
          Growth Baskets <br />
        </span>
        <span className="e-card-subtitle mb-2">
          3y CAGR* : 20.5% <br />
        </span>
        <span className="e-card-text">
          Curated portfolio with very <br />
          good risk adjusted returns.
        </span>
      </div>
      <p
        className="e-header-subtitle mt-5 pt-5"
        style={{ fontSize: "12px", color: " rgba(18, 18, 18, 0.5)" }}
      >
        *Returns are based on backtesting data. Past performance doesn’t
        guarantee <br /> future results.
      </p>
    </>
  );
};

export default TopCard;
