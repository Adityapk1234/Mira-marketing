import pic from "../assets/images/photo.svg";
import right_arrow from "../assets/images/right-arrow.svg";
import left_arrow from "../assets/images/left-arrow.svg";

const Fifth = () => {
  return (
    <div className="e-testimonial">
      <div>
        <p className="e-second-p">Testimonials</p>
        <p className="e-second-ans " style={{ textAlign: "left" }}>
          What our clients <br /> have to say about us.
        </p>
      </div>
      <div className="e-center col-8  offset-lg-4 ">
        <p className="ps-5">
          “ Rem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <br />{" "}
          eu turpis molLonsectetur adipiscing elit. Etiam euLoLorem <br /> ipsum
          dolor sit amet, consectetur adipiscing elit. Etiam eu <br /> turpis
          molLonsectetur. “
        </p>
        <img
          src={right_arrow}
          alt="right arrow"
          style={{ float: "right", display: "flex" }}
        />
        <img
          src={left_arrow}
          alt="left arrow"
          style={{
            float: "right",
            display: "flex",
            clear: "both",
            paddingTop: "9px",
          }}
        />
        <div className="row pt-3 mt-5 ">
          <div className="col-lg-2 col-md-2 col-sm-2 col-3 me-5">
            <img src={pic} alt="Girl" />
          </div>
          <div className="col-lg-9 col-md-6 col-sm-9 col-9  ps-lg-0">
            <p
              className="e-second-ans"
              style={{ fontSize: "24px", textAlign: "left" }}
            >
              Naruto Uzumaki
            </p>
            <p
              className="e-card-text"
              style={{ lineHeight: "155%", color: "rgba(18, 18, 18, 0.56)" }}
            >
              {" "}
              General manager at NextBooks.
            </p>
          </div>
        </div>
        {/* <div className="d-flex pt-5">
          <p>
            {" "}
            <img
              src={pic}
              alt="Girl"
              style={{
                float: "left",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            Naruto Uzumaki <br />
            General manager at NextBooks.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Fifth;
