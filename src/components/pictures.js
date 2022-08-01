import pic1 from "../assets/images/pic1.svg";
import pic2 from "../assets/images/pic2.svg";
import pic3 from "../assets/images/pic3.svg";
import pic4 from "../assets/images/pic4.svg";
import pic5 from "../assets/images/pic5.svg";
import pic6 from "../assets/images/pic6.svg";

const Pictures = () => {
  return (
    <div className="row">
      <figure className="col-6">
        <img src={pic1} alt="Buy your dream house" style={{ width: "100%" }} />
        <figcaption className="e-pic-title">Buy your dream house</figcaption>
      </figure>
      <figure className="col-6 pt-4 ">
        <img src={pic2} alt="Own dream car" style={{ width: "100%" }} />
        <figcaption className="e-pic-title" style={{ textAlign: "right" }}>
          Own dream car
        </figcaption>
      </figure>

      <figure className="col-6">
        <img
          src={pic3}
          alt="Save for kids’ education"
          style={{ width: "100%" }}
        />
        <figcaption className="e-pic-title">
          Save for kids’ education
        </figcaption>
      </figure>
      <figure className="col-6 pt-4">
        <img src={pic4} alt="Retire early" style={{ width: "100%" }} />
        <figcaption
          className="e-pic-title text-left"
          style={{ textAlign: "right" }}
        >
          Retire early
        </figcaption>
      </figure>

      <figure className="col-6">
        <img src={pic5} alt="Your first crore" style={{ width: "100%" }} />
        <figcaption className="e-pic-title">Your first crore</figcaption>
      </figure>
      <figure className="col-6 pt-4">
        <img src={pic6} alt="Grow your money" style={{ width: "100%" }} />
        <figcaption className="e-pic-title" style={{ textAlign: "right" }}>
          Grow your money
        </figcaption>
      </figure>
    </div>
  );
};

export default Pictures;
