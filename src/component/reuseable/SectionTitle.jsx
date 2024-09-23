import React from "react";

function SectionTitle(props) {

  const { firstTitleName, secondTitleName } = props

  return (
    <div>
      <div className="container">
        <div className="section-title d-flex justify-content-center align-items-center mt-4">
          <div className="section-title-one d-flex">
            <p>{firstTitleName}</p>
            <p className="ms-3 text-2">{secondTitleName}</p>
          </div>
        </div>
        {/* <div>
          <div className="all-images">
            <div className="images">
              <img
                src="https://static.autox.com/uploads/2022/04/2015-Yamaha-R15-Streaking-Cyan-12-438x3361-500x261.jpg"
                alt=""
              />
            </div>
            <div className="images">
              <img
                src="https://static.autox.com/uploads/2022/04/2015-Yamaha-R15-Streaking-Cyan-12-438x3361-500x261.jpg"
                alt=""
              />
            </div>
            <div  className="images">
              <img
                src="https://static.autox.com/uploads/2022/04/2015-Yamaha-R15-Streaking-Cyan-12-438x3361-500x261.jpg"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SectionTitle;
