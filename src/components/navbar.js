import HeadImg from "../assets/images/mira.svg";
import Download from "../assets/images/download.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
        <img src={HeadImg} alt="Mira" className="img-fluid" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="btn btn-dark"
          style={{ fontWeight: "600" }}
        >
          Download
          <img src={Download} className="ps-2" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
