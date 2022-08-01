import right_arrow from "../assets/images/right-arrow.svg";
import question_mark from "../assets/images/question-mark.svg";
const Questions = () => {
  return (
    <>
      <p className="e-second-p text-center">Frequently asked questions</p>
      <p className="e-second-ans">Common queries we recieve.</p>
      <p className="e-read-more text-end">
        View more <img src={right_arrow} alt="Right Arrow" className="ps-2" />
      </p>
      <div className="row ">
        <div className=" col-lg-6 col-sm-12 pt-3 ps-4 ">
          <div className="e-card-question">
            <div className="row pt-3 ps-3">
              <div className="col-1">
                <img src={question_mark} alt="" />
              </div>
              <div className="col-10">
                <h5 className="e-card-question-title">
                  Can I withdraw my money anytime I want?
                </h5>

                <p className="e-card-question-text">
                  Yes! The money you invest in your Stacks can be withdrawn
                  anytime. There is no lock-in period for any Stack, except tax
                  saver as it has a lock-in period of 3 years.
                </p>
                <p className="e-readmore">Read more</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 col-sm-12 pt-3 ps-4 ">
          <div className="e-card-question">
            <div className="row pt-3 ps-3">
              <div className="col-1">
                <img src={question_mark} alt="" />
              </div>
              <div className="col-10">
                <h5 className="e-card-question-title">
                  Where does my money go?
                </h5>

                <p className="e-card-question-text">
                  Your money is invested into diversified portfolios of funds to
                  earn superior risk-adjusted returns. These funds form your
                  Stacks that are personalised to your life goals.
                </p>
                <p className="e-readmore">Read more</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 col-sm-12 pt-3 ps-4">
          <div className="e-card-question">
            <div className="row pt-3 ps-3">
              <div className="col-1">
                <img src={question_mark} alt="" />
              </div>
              <div className="col-10 ">
                <h5 className="e-card-question-title">
                  Where does my money go?
                </h5>

                <p className="e-card-question-text">
                  Your money is invested into diversified portfolios of funds to
                  earn superior risk-adjusted returns. These funds form your
                  Stacks that are personalised to your life goals.
                </p>
                <p className="e-readmore">Read more</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12 pt-3 ps-4">
          <div className="e-card-question">
            <div className="row pt-3 ps-3">
              <div className="col-1">
                <img src={question_mark} alt="" />
              </div>
              <div className="col-10">
                <h5 className="e-card-question-title">
                  Can I withdraw my money anytime I want?
                </h5>

                <p className="e-card-question-text">
                  Yes! The money you invest in your Stacks can be withdrawn
                  anytime. There is no lock-in period for any Stack, except tax
                  saver as it has a lock-in period of 3 years.
                </p>
                <p className="e-readmore">Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Questions;
