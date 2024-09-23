import React from "react";
import NavSection from "./reuseable/NavSection";
import CommonBtn from "./reuseable/CommonBtn";

const Banner = () => {
  return (
    <div>
      <div className="banner-bg pt-3">
        <NavSection />
        <div className="container">
          <div className="d-flex gap-5 banner-gap">
            <div className="banner-card">
              <p>Computer-controlled digital transistorized with electronic advance</p>
              <h1 className="banner-title">Honda CBR 600R</h1>
              <p className="banner-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <CommonBtn
                    title="Purchase"
                    btnPadding="10px 46px"
                    btnMargin="30px"
                  />
            </div>
            <div className="banner-img">
              <img src="https://cdn.shopify.com/s/files/1/1636/7019/collections/honda_CBR600RR_P3_Tuning_1024x1024_754ea46b-8dad-4152-b081-7e94b4d8e5a8.png?v=1679088608" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
