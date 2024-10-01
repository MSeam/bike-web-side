import React, { useEffect, useState } from "react";
import SectionTitle from "./reuseable/SectionTitle";
import BikeCard from "./reuseable/BikeCard";

function News() {
  const dataState = [
    {
      id: 1,
      title: "Ducati XDIAVEL S-73",
      document:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,fermentum amet faucibus sed id nisi lectus at.",
      imgURL:
        "https://paultan.org/image/2017/06/Ducati-XDIAVEL-S-73-1200x800.jpg",
    },
    {
      id: 2,
      title: "Motorcycles",
      document:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,fermentum amet faucibus sed id nisi lectus at.",
      imgURL:
        "https://www.roadracingworld.com/wp-content/uploads/2024/02/STUDIO-V302-C-00020-2200x1481-edeef21a-bd00-422c-8c25-717508affcc1_1708969451.jpg",
    },
    {
      id: 3,
      title: "2021 Honda CBR500R",
      document:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,fermentum amet faucibus sed id nisi lectus at.",
      imgURL:
        "https://ultimatemotorcycling.com/wp-content/uploads/2020/10/2021-Honda-CBR500R-ABS-Buyers-Guide-sport-motorcycle-3.jpg",
    },
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(dataState);
  }, []);


  return (
    <div className="news-section">
      <SectionTitle firstTitleName={"Latest"} secondTitleName={"News"}/>
      <div className="container">
        <div className="row mt-5">
          {data?.slice(0, 3).map((item) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="mt-3">
                <BikeCard itemData={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
