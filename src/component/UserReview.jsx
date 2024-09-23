import React, { useEffect, useState } from "react";
import ReviewCard from "./reuseable/ReviewCard";
import SectionTitle from "./reuseable/SectionTitle";

function UserReview() {
  const cardsData = [
    {
      imgURL: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid",
      name: "Regina Miles",
      profession: "Banker",
      description:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      imgURL: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid",
      name: "Regina Miles",
      profession: "Banker",
      description:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
      imgURL: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid",
      name: "Regina Miles",
      profession: "Banker",
      description:
        "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
  ];
  const [card, setData] = useState(null);

  useEffect(() => {
    setData(cardsData);
  }, []);



  return (
    <div className="profile-cards-section container">
      <SectionTitle firstTitleName={"Happy"} secondTitleName={"Clients says"} />
      <div className="row">
        {card?.map((item) => (
          <div key={setData} className="col-lg-4 col-md-6 col-sm-6 mt-4">
            <ReviewCard
              imgURL={item.imgURL}
              name={item.name}
              profession={item.profession}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserReview;

