import React from "react";

const Card = () => {
  return (
    <>
      <div className="col-md-6 col-xxl-4 analyticsCard_col">
        <div className="analyticsCard">
          <div className="analyticsCard_top">
            <h5>Add New Products</h5>
            <a href="/" className="analyticsLink">
              <img src="/assets/images/analyticsLink-icon.svg" alt="" />
            </a>
          </div>
          <div className="analyticsNumer_wrap">
            <p className="analyticsNumer">500</p>
            <a href="/" className="cmnBtnSm">
              View all
            </a>
          </div>

          <img
            src="/assets/images/analyticsCard-rightBg.svg"
            alt=""
            className="analyticsRightBg"
          />
          <img
            src="/assets/images/analyticsCard-leftBg.svg"
            alt=""
            className="analyticsLeftBg"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
