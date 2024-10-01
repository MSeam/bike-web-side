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
      </div>
    </div>
  );
}

export default SectionTitle;
