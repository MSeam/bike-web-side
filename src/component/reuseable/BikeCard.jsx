import React from "react";
import CommonBtn from "./CommonBtn";

function BikeCard(props) {
  const { itemData } = props;

  return (
    <div>
      <div class="card">
        <div className="card-img">
          <img src={itemData?.imgURL} class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">{itemData?.title}</h5>
          <p class="card-text">{itemData?.document}</p>
          <CommonBtn
            title="Read More"
            btnPadding="10px 30px"
            btnMargin="30px"
          />
        </div>
      </div>
    </div>
  );
}

export default BikeCard;
