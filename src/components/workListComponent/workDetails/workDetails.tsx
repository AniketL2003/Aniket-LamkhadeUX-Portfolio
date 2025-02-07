import { GoBackButton } from "../../commonComponent/projectButton/backButton";
import "./workDetails.scss";

//image for coolTron project
import coolTronImg from "../../../asset/svgs/coolTronWallaperDetails.svg";
import coolTronResearchImg1 from "../../../asset/images/coolTronResearchImg1.png";
import coolTronResearchImg2 from "../../../asset/images/coolTronResearchImg2.png";
import coolTronResearchUserFlow from "../../../asset/images/coolTronResearchImg3.png";
import coolTronResearchUserFlow2 from "../../../asset/images/coolTronResearchImg4.png";
import ideationImg from "../../../asset/images/ideationImg.png";
import ideationImg2 from "../../../asset/images/ideationImg2.png";
import prototypeImg from "../../../asset/images/prototypeImg.png";
import prototypeImg2 from "../../../asset/images/prototypeImg2.png";
import prototypeImg3 from "../../../asset/images/prototypeImg3.png";
import prototypeImg4 from "../../../asset/images/prototypeImg4.png";
import figmaIcon from "../../../asset/images/figmaIcon.png";
import sekectIcon from "../../../asset/images/sketchIcon.png";
import illustratorIcon from "../../../asset/images/illustratorIcon.png";
import miroIcon from "../../../asset/images/miroIcon.png";

//Imagesfor InGate
import InGateImg from "../../../asset/images/inGateBackgroundImg.svg";
import inGateResearchImg1 from "../../../asset/images/inGateResearchImg1.png";
import inGateResearchImg2 from "../../../asset/images/inGateResearchImg2.png";
import inGateResearchImg3 from "../../../asset/images/inGateResearchImg3.png";
import inGateResearchImg4 from "../../../asset/images/inGateResearchImg4.png";
import inGateIdeationImg1 from "../../../asset/images/inGateIdeationImg1.png";
import inGateIdeationImg2 from "../../../asset/images/inGateIdeationImg2.png";
import inGatePrototypeImg1 from "../../../asset/images/inGatePrototypeImg1.png";
import inGatePrototypeImg2 from "../../../asset/images/inGatePrototypeImg2.png";
import inGatePrototypeImg3 from "../../../asset/images/inGatePrototypeImg3.png";
import inGatePrototypeImg4 from "../../../asset/images/inGatePrototypeImg4.png";
import behanceIcon from "../../../asset/images/behanceImg.png";

//Components
import { ProjectButton } from "../../commonComponent/projectButton/projectButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const WorkDetails = () => {
  const [projectDetails, setProjectDetails] = useState<any>(null);
  const [searchParams] = useSearchParams();
  const userParam = searchParams.get("project");
  const coolTron = {
    workDetails: {
      title: "Cool Tron",
      subtitle: ["UX RESEARCH", "UX DESGIN", "UI DESGIN", "USABILITY TEST"],
      date: "Dec 2024",
      sections: [
        {
          type: "problem",
          heading: "The problem",
          description:
            "Overcoming UI/UX challenges in navigation, real-time tracking, and role-specific interactions for seamless service management.",
          image: coolTronImg,
        },
        {
          type: "research",
          heading: "Research",
          description:
            "Addressing UI/UX challenges in role-based navigation, real-time tracking, and seamless communication between customers, admins, and technicians for efficient service.",
          images: [coolTronResearchImg1, coolTronResearchImg2],
          solutionDescription:
            "Solutions include intuitive dashboards, visual tracking indicators, and smart scheduling to ensure a user-friendly experience for all roles.",
          solutionImages: [coolTronResearchUserFlow, coolTronResearchUserFlow2],
        },
        {
          type: "ideation",
          heading: "Ideation",
          description:
            "Ideation for Cooltron includes role-specific dashboards, real-time tracking, smart scheduling, and streamlined communication to enhance user experience for customers, admins, and technicians.",
          images: [ideationImg, ideationImg2],
        },
        {
          type: "prototype",
          heading: "Prototype",
          description:
            "The Cooltron prototype offers role-specific dashboards for customers, admins, and technicians, ensuring a tailored user experience. It integrates real-time tracking, smart scheduling, and seamless communication to streamline the repair service process.",
          images: [
            [prototypeImg, prototypeImg2],
            [prototypeImg3, prototypeImg4],
          ],
        },
        {
          type: "tools",
          heading: "Tools",
          tools: [figmaIcon, miroIcon, sekectIcon, illustratorIcon],
          buttonLabel: "Prototype",
          buttonCallback: () => {},
        },
      ],
    },
  };
  const inGate = {
    workDetails: {
      title: "InGate",
      subtitle: ["UX RESEARCH", "UX DESGIN", "UI DESGIN", "USABILITY TEST"],
      date: "July 2024",
      sections: [
        {
          type: "problem",
          heading: "The problem",
          description:
            "Overcoming UI/UX challenges in navigation, real-time tracking, and role-specific interactions for seamless visitor management.",
          image: InGateImg,
        },
        {
          type: "research",
          heading: "Research",
          description:
            "Addressing UI/UX challenges in role-based navigation, real-time tracking, and seamless communication between host, admins, security persons, and visitors for efficient journey.",
          images: [inGateResearchImg1, inGateResearchImg2],
          solutionDescription:
            "Solutions include intuitive dashboards, visual tracking indicators, and smart scheduling to ensure a user-friendly experience for all roles.",
          solutionImages: [inGateResearchImg3, inGateResearchImg4],
        },
        {
          type: "ideation",
          heading: "Ideation",
          description:
            "Ideation for Investor includes role-specific dashboards, real-time tracking, smart scheduling, and streamlined communication to enhance user experience for investors, admins, and buyers.",
          images: [inGateIdeationImg1, inGateIdeationImg2],
        },
        {
          type: "prototype",
          heading: "Prototype",
          description:
            "The Investor prototype offers role-specific dashboards for investors, admins, and buyers, ensuring a tailored user experience. It integrates real-time tracking, smart investing, and seamless communication to streamline the investment process.",
          images: [
            [inGatePrototypeImg1, inGatePrototypeImg2],
            [inGatePrototypeImg3, inGatePrototypeImg4],
          ],
        },
        {
          type: "tools",
          heading: "Tools",
          tools: [figmaIcon, miroIcon, behanceIcon, sekectIcon],
          buttonLabel: "Prototype",
          buttonCallback: () => {},
        },
      ],
    },
  };
  useEffect(() => {
    if (userParam === "coolTron") {
      setProjectDetails(coolTron);
    } else if (userParam === "inGate") {
      setProjectDetails(inGate);
    } else {
      navigate("/work");
    }
  }, []);
  const navigate = useNavigate();
  const renderSection = (section: any) => {
    switch (section.type) {
      case "problem":
        return (
          <div className="workProblemPageContainer">
            <div className="workTitleHeadingWrapper">
              <div className="headingContainer">
                <span className="Heading">
                  {projectDetails.workDetails.title}
                </span>
                <div className="subHeadingWrapper">
                  {projectDetails.workDetails.subtitle.map(
                    (subHeading: any, index: any) => (
                      <span key={index} className="subHeading">
                        {subHeading}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="dateContainer">
                <span className="date">{projectDetails.workDetails.date}</span>
              </div>
            </div>
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">
                  {section.heading.split(" ")[0]}
                </span>{" "}
                {section.heading.split(" ").slice(1).join(" ")}
              </span>
              <span className="description">{section.description}</span>
            </div>
            <div className="workImageWrapper">
              <img src={section.image} alt="workimage" className="workImage" />
            </div>
          </div>
        );
      case "research":
        return (
          <div className="workResearchPageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">
                  {section.heading.split(" ")[0]}
                </span>{" "}
                {section.heading.split(" ").slice(1).join(" ")}
              </span>
              <span className="description">{section.description}</span>
            </div>
            <div className="researchImageWrapper">
              {section.images.map((image: any, index: any) => (
                <img
                  key={index}
                  src={image}
                  alt="workimage"
                  className={
                    index % 2 === 0 ? "researchImage" : "researchImageSecondry"
                  }
                />
              ))}
              <div className="problemDescription">
                <span className="description">
                  {section.solutionDescription}
                </span>
                <div className="researchImageWrapper">
                  {section.solutionImages.map((image: any, index: any) => (
                    <img
                      key={index}
                      src={image}
                      alt="workimage"
                      className={
                        index % 2 === 0
                          ? "researchImage"
                          : "researchImageSecondry"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "ideation":
        return (
          <div className="workIdetionPageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">
                  {section.heading.split(" ")[0]}
                </span>{" "}
                {section.heading.split(" ").slice(1).join(" ")}
              </span>
              <span className="description">{section.description}</span>
            </div>
            <div className="ideationImageWrapper">
              {section.images.map((image: any, index: any) => (
                <img key={index} src={image} alt="" className="ideationImg" />
              ))}
            </div>
          </div>
        );
      case "prototype":
        return (
          <div className="workPrototypePageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">
                  {section.heading.split(" ")[0]}
                </span>{" "}
                {section.heading.split(" ").slice(1).join(" ")}
              </span>
              <span className="description">{section.description}</span>
            </div>
            <div className="prototypeImageWrapper">
              {section.images.map((image: any, index: any) => (
                <div key={index} className="imgContainer">
                  {image.map((img: any, index: any) => (
                    <img
                      key={index}
                      src={img}
                      alt="workimage"
                      className={
                        index % 2 === 0
                          ? "prototypeImagPrimary"
                          : "prototypeImagSecondary"
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      case "tools":
        return (
          <div className="workToolsPageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">
                  {section.heading.split(" ")[0]}
                </span>{" "}
                {section.heading.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <div className="toolsContainer">
              {section.tools.map((tool: any, index: any) => (
                <div key={index} className="tool">
                  <img src={tool} alt="" className="icon" />
                </div>
              ))}
            </div>
            <ProjectButton
              buttonLabel={section.buttonLabel}
              className="primaryBtn"
              onClickCallBack={section.buttonCallback}
            />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="workDetailsWrapper">
        <div className="buttonWrapper">
          <GoBackButton
            onClickCallBack={() => {
              navigate("/work");
            }}
          />
        </div>
        <div className="workDetailsContianer">
          {projectDetails !== null &&
            projectDetails.workDetails.sections.map(
              (section: any, index: any) => (
                <div key={index}>{renderSection(section)}</div>
              )
            )}
        </div>
      </div>
    </>
  );
};
