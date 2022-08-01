import google from "../assets/images/googlePlay.svg";
import apple from "../assets/images/apple.svg";

const FooterImage = () => {
  return (
    <div className="p-3 mb-5 ">
      <span className="e-footer-heading">
        Sounds interesting! let’s get into it.
      </span>
      <div className="row mt-5">
        <div className="col-lg-8 col-md-12 col-sm-12">
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
      <p className="e-footer-ans pt-3">
        More than 1200 people have already signed up, and only a few spots
        remain. Get access today.
      </p>
      <button className="e-google m-3">
        <img src={google} alt="" />
      </button>
      <button className="e-google m-3">
        <img src={apple} alt="" />
      </button>
    </div>
  );
};

export default FooterImage;
