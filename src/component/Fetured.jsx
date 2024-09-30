import React from "react";
import SectionTitle from "./reuseable/SectionTitle";

function Fetured() {
  return (
    <div className="feturedBike">
      <SectionTitle firstTitleName={"Fetured Bike"} secondTitleName={"2021"} />
      <div className="container">
        <p className="feturedBike-text text-center mt-2">
          Best bike collection
        </p>
        <div className="row mt-5 mb-5">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="feturedBike-img">
              <img
                src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1619511154_12_253652.jpeg"
                alt="Bike 1"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="feturedBike-img">
              <img
                src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1619511154_12_253652.jpeg"
                alt="Bike 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="feturedBike-img">
              <img
                src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1619511154_12_253652.jpeg"
                alt="Bike 3"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetured;
