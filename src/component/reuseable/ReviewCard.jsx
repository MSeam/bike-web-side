import React from "react";

function ReviewCard(props) {

  const { imgURL, name, profession, description } = props

  return (
    <div className="profile-card userReview">
      <img src={imgURL} alt={name} className="profile-img" />
      <p className="description">{description}</p>
      <h3 className="name">{name}</h3>

      <div className="stars">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9734;</span>
      </div>
      <p className="profession">{profession}</p>
    </div>
  );
}

export default ReviewCard;
