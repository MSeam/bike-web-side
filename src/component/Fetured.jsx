  import React from "react";
  import SectionTitle from "./reuseable/SectionTitle";

  function Fetured() {
    return (
      <div className="feturedBike">
        <SectionTitle firstTitleName={"Fetured Bike"} secondTitleName={"2021"} />
        <div className="container">
            <p className="feturedBike-text d-flex justify-content-center align-items-center mt-2">
              Best bike collection
            </p>
          <div className="d-flex fetureBike-allImages mt-5 mb-5">
            <div className="feturedBike-img">
              <img
                src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1619511154_12_253652.jpeg"
                alt=""
              />
            </div>
            <div className="feturedBike-img">
              <img
                src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1619511154_12_253652.jpeg"
                alt=""
              />
            </div>
            <div className="feturedBike-img">
              <img
                src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1619511154_12_253652.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Fetured;
