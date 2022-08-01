import mira_footer from "../assets/images/mira_footer.svg";
import jam_facebook from "../assets/images/jam_facebook.svg";
import jam_linkedin from "../assets/images/jam_linkedin.svg";
import jam_twitter from "../assets/images/jam_twitter.svg";
import jam_youtube from "../assets/images/jam_youtube.svg";
import notify from "../assets/images/notify.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
          <img src={mira_footer} alt="" />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-4 ">
          <p className="e-footer-links">About</p>
          <p className="e-link-list">Blog</p>
          <p className="e-link-list">Forum</p>
          <p className="e-link-list">FAQ</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-4 ">
          <p className="e-footer-links">Others</p>
          <p className="e-link-list">Terms</p>
          <p className="e-link-list">Privacy</p>
          <p className="e-link-list">Grievance</p>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 ">
          <p className="e-footer-links">Subscribe to our newsletter</p>
          <div className="row">
            <div className="col-lg-8 ">
              <input
                type="email"
                className="e-input mt-1 py-2 pe-5 ps-2"
                placeholder="Enter email address"
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="col-lg-4 pt-1 ">
              <button type="button" class="btn btn-primary e-notify px-3 py-2">
                Notify me
              </button>
            </div>
          </div>
          <p className="e-footer-ans pt-4">
            Subscribe to get updates and latest information about us <br />
            straight to your mail.
          </p>
        </div>
      </div>
      <p className="e-reach">Contact</p>
      <div className="row">
        <div className="col-6 ">
          <p className="e-link-list">
            Reach us at - <br />
            <span style={{ color: "blue" }}>care@mirawealth.com</span>
          </p>
        </div>
        <div className="col-6 text-end">
          <img src={jam_facebook} alt="" className="p-2" />
          <img src={jam_twitter} alt="" className="p-2" />
          <img src={jam_youtube} alt="" className="p-2" />
          <img src={jam_linkedin} alt="" className="p-2" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="e-develop">Powered by: Evoque Innovative Lab</p>
        </div>
        <div className="col-6 text-end">
          <p className="e-develop" style={{ fontSize: "14px" }}>
            © 2022 Noble Wealth Technologies Pvt Ltd
          </p>
        </div>
      </div>
      <p className="e-develop">Disclaimer :</p>
      <p className="e-develop">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.{" "}
        <br />
        __ <br />
        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
        quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
        vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
        vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
        porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non
        ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
        Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem
        condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
        ac posuere leo.
      </p>
    </div>
  );
};
export default Footer;
