import React from "react";

const Textcard = ({ type }) => {
  return (
    <>
      <div className="cmnCard">
        <div className="cmnCardTop">
          <div className="cmnCardTop_left">
            <h2>FAQ’s</h2>
            <p>Ask Your Query without any fear!</p>
          </div>
          <div className="cmnCardTop_right">
            <i>
              <img src="/assets/images/faq-icon.svg" alt="" />
            </i>
          </div>
        </div>
        {type === "faq" && (
          <>
            <div className="cmnCardBot">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. Lorem Ipsum is simply dummy text of the printing and
                      typesetting. 
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and.  
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. Lorem Ipsum is simply dummy text of the printing and
                      typesetting. 
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faqViewAll">
              <a href="/" className="cmnBtnSm">
                View all
              </a>
            </div>
            <div className="faqBg">
              <img src="/assets/images/faqBg.svg" alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Textcard;
