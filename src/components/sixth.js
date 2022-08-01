import right_arrow from "../assets/images/right-arrow.svg";

const Sixth = () => {
  return (
    <>
      <p className="e-second-p">Know latest happenings around you.</p>
      <p className="e-second-ans " style={{ textAlign: "left" }}>
        Resources that help you learn and invest in right assets.
      </p>
      <a className="e-read-more">
        Read more <img src={right_arrow} alt="Right Arrow" className="ps-2" />
      </a>
    </>
  );
};

export default Sixth;
