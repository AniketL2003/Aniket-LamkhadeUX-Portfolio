import "./about.scss";
import photo from "../../asset/images/aboutSectionImg.png";
import container1Img from "../../asset/images/IMG_0613 (2)-Photoroom 2.png";
import container2Img from "../../asset/images/IMG_0613 (2)-Photoroom 3.png";
import container3Img1 from "../../asset/images/IMG_0613 (2)-Photoroom 4.png";
import container3Img2 from "../../asset/images/IMG_0613 (2)-Photoroom 5.png";
import container4Img1 from "../../asset/images/IMG_0613 (2)-Photoroom 6.png";
import container4Img2 from "../../asset/images/IMG_0613 (2)-Photoroom 7.png";
import { useEffect } from "react";
export const AboutPage = () => {
  const tools = [
    "Figma",
    "Sketch",
    "Adobe Illustrator",
    "Photoshop",
    "Invision",
    "Dora",
    "Figjam",
    "Miro",
    "Lottie Files",
    "Webflow",
  ];
  const uxSkillset = [
    "User Centered Design",
    "User Research",
    "InformationArchitecture",
    "Interactive Prototyping",
    "Wireframing",
    "Visual Design",
    "Typography",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutWrapper">
      <div className="aboutpageParent">
        <div className="aboutPageContainer">
          <div className="aboutHeader">
            <span className="headerText">
              Some Interesting Facts About me —
            </span>
          </div>
          <div className="textContainer">
            <span className="subText">
              Hi👋, I'm Aniket Lamkhade😊, a dedicated UI/UX designer from Pune,
              India, with a passion for creating intuitive and visually
              appealing digital experiences. I focus on designing user-friendly
              interfaces and enhancing user satisfaction, With a Bachelor's
              degree in Computer Applications and certifications in UI/UX
              design.
            </span>
            <span className="subText">
              I bring a blend of technical knowledge and creative flair to my
              work. I thrive on solving complex design challenges and am
              particularly passionate about user-centric design and consistency.
            </span>
            <span className="subText">
              When I'm not immersed in design, you'll find me capturing the
              beauty of nature through my camera lens. I believe that great
              design, like nature, should be simple yet profound.
            </span>
          </div>
        </div>
        <div className="aboutPageImgWrapper">
          <img src={photo} alt="" className="aboutImg" />
        </div>
      </div>
      <div className="aboutInfoParent">
        <div className="infoContainer">
          <div className="toolsWrapper">
            <span className="toolsHeader">Tools</span>
            <div className="toolsList">
              {tools.map((item, index) => {
                return (
                  <span className="tools" key={index}>
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="toolsWrapper">
            <span className="toolsHeader">UX SKILLSET</span>
            <div className="toolsList">
              {uxSkillset.map((item, index) => {
                return (
                  <span className="tools" key={index}>
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="toolsWrapper">
            <span className="toolsHeader">Contact</span>
            <div className="toolsList">
              <span className="headingText">Address</span>
              <span className="subText">Pune, India</span>
              <span className="headingText">Email</span>
              <span className="subText">aniketlamkhade934@gmail.com</span>
              <span className="headingText">CV</span>
              {/* <span className="subText">View My CV</span>  */}
              <span className="subText">
                <a
                  href={require("../../asset/pdf/Aniket_Lamkhade_UI_UX_Designer.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subText"
                >
                  View My CV
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutGalleryParent">
        <div className="galleryHeader">
          <span className="headerText">#Through my Lens</span>
        </div>
        <div className="galleryWrapper">
          <div className="imgContainer">
            <img
              src={container1Img}
              alt=""
              className="container1Img imageHeighWidth"
            />
          </div>
          <div className="imgContainer">
            <img
              src={container2Img}
              alt=""
              className="container2Img imageHeighWidth"
            />
          </div>
          <div className="imgContainer">
            <img
              src={container3Img1}
              alt=""
              className="container3Img imageHeighWidth paddingClass"
            />
            <img
              src={container3Img2}
              alt=""
              className="container3Img imageHeighWidth"
            />
          </div>
          <div className="imgContainer">
            <img
              src={container4Img1}
              alt=""
              className="container4Img imageHeighWidth paddingClass"
            />
            <img
              src={container4Img2}
              alt=""
              className="container4Img imageHeighWidth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
