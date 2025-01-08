import React from "react";
import "./GlassCards.scss";
import mobileImg from "../../../asset/images/mobileProject.png";
import laptop from "../../../asset/images/laptopProject.png";
import tab from "../../../asset/images/tabProject.png";

const GlassCards = () => {
  const cards = [
    {
      text: "Github",
      rotation: -15,
      imgSrc: mobileImg, // Replace with your image URL
      extraCss: "",
    },
    {
      text: "Code",
      rotation: 5,
      imgSrc: laptop, // Replace with your image URL
      extraCss: "imgHeightForLaptop",
    },
    {
      text: "Earn",
      rotation: 25,
      imgSrc: tab, // Replace with your image URL
      extraCss: "",
    },
  ];

  return (
    <div className="cardProjectWrapper">
      <div className="container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="glass"
            // data-text={card.text}
            style={{ transform: `rotate(${card.rotation}deg)` }}
          >
            <img
              src={card.imgSrc}
              alt={card.text}
              className={`glass-image ${card.extraCss}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassCards;
