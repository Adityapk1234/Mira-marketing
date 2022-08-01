import Fifth from "./fifth";
import FourthPage from "./fourth";
import Header from "./header";
import NavBar from "./navbar";
import Pictures from "./pictures";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import TopCard from "./topCard";

import picc from "../assets/images/vertical-pic.svg";
import Sixth from "./sixth";
import Typess from "./types";
import FeaturedVideos from "./featured";
import Questions from "./questions";
import Sponsors from "./sponsors";
import FooterImage from "./footerImage";

import Footer from "./footer";
import PicNext from "./picnext";
import Pictext from "./picText";
// import Cylinder from "./cylinder";

const Mira = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <NavBar />
          </div>
        </div>
        <div className="row position-relative">
          <div className="e-bg"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <Header />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 e-bg-img">
            <TopCard />
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-12">
            <SecondPage />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-lg-4 ">
        <div className="row">
          <div className="col-12 e-bg-cylinder">
            <PicNext />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <Pictext />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 pt-5">
            <ThirdPage />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 pt-5">
            <Pictures />
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <FourthPage />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={picc} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col">
            <Fifth />
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Sixth />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Typess />
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col">
            <FeaturedVideos />
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col">
            <Questions />
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col">
            <Sponsors />
          </div>
        </div>
        <div className="row mt-5 px-2 ">
          <div className=" e-footer">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 pt-5 ">
                <FooterImage />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 pe-0">
                {/* <img src={footerImage} alt="" /> */}
                <div className="e-footer-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5 "
        style={{ backgroundColor: "black" }}
      >
        <div className="row pt-5  ">
          <div className="col gx-0">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mira;
