import mobile from "../assets/images/mobile.svg";
import geometry from "../assets/images/geometry.svg";
import numbers from "../assets/images/numbers.svg";
import recording from "../assets/images/recording.svg";

const FeaturedVideos = () => {
  return (
    <>
      <p className="e-second-p">Featured videos</p>
      <div className="row">
        <figure className="col-lg-3 col-md-6 col-sm-6 col-6">
          <img
            src={recording}
            alt="Interview of Joe root ( CEO of Prolep ) about MIRA."
            style={{ width: "100%" }}
          />
          <figcaption
            className="e-types1-details"
            style={{ lineHeight: "142%", textAlign: "center" }}
          >
            Interview of <br /> Joe root ( CEO of Prolep ) about MIRA.
          </figcaption>
        </figure>
        <figure className="col-lg-3 col-md-6 col-sm-6 col-6">
          <img
            src={numbers}
            alt="How fintech world has been changed in the last couple years.?"
            style={{ width: "100%" }}
          />
          <figcaption
            className="e-types1-details"
            style={{ lineHeight: "142%", textAlign: "center" }}
          >
            How fintech world has been changed in the last couple years.?
          </figcaption>
        </figure>
        <figure className="col-lg-3 col-md-6 col-sm-6 col-6">
          <img
            src={mobile}
            alt="Video explanation of our app MIRA ( Quick walkthrough )"
            style={{ width: "100%" }}
          />
          <figcaption
            className="e-types1-details"
            style={{ lineHeight: "142%", textAlign: "center" }}
          >
            Video explanation of our app MIRA ( Quick walkthrough )
          </figcaption>
        </figure>
        <figure className="col-lg-3 col-md-6 col-sm-6 col-6">
          <img
            src={geometry}
            alt="More about how and where to invest .!"
            style={{ width: "100%" }}
          />
          <figcaption
            className="e-types1-details"
            style={{ lineHeight: "142%", textAlign: "center" }}
          >
            More about how and where to invest .!
          </figcaption>
        </figure>
      </div>
    </>
  );
};
export default FeaturedVideos;
