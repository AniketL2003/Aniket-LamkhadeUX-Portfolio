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
import openAi from "../../../asset/svgs/openAI.svg";
import behanceIcon from "../../../asset/images/behanceImg.png";
import invision from "../../../asset/svgs/invision.svg";

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

// Images for RetroRing
import retroRingImg from "../../../asset/svgs/retroRingDetailWallpaper.svg";
import retroRingResearchImg1 from "../../../asset/images/retroRingResearchImg1.png";
import retroRingResearchImg2 from "../../../asset/images/retroRingResearchImg2.png";
import retroRingResearchImg3 from "../../../asset/images/retroRingResearchImg3.png";
import retroRingResearchImg4 from "../../../asset/images/retroRingResearchImg4.png";
import retroRingIdeationImg1 from "../../../asset/images/retroRingIdeation1.png";
import retroRingIdeationImg2 from "../../../asset/images/retroRingIdeation2.png";
import retrpRingProtoTypeImg1 from "../../../asset/images/retroRingProtoType1.png";
import retrpRingProtoTypeImg2 from "../../../asset/images/retroRingProtoType2.png";
import retrpRingProtoTypeImg3 from "../../../asset/images/retroRingProtoType3.png";
import retrpRingProtoTypeImg4 from "../../../asset/images/retroRingProtoType4.png";

//investor
import investorImg from "../../../asset/svgs/investorWorkDetailsWallpaper.svg";
import investorResearchImg1 from "../../../asset/images/investorResearchImg1.png";
import investorResearchImg2 from "../../../asset/images/investorResearchImg2.png";
import investorResearchImg3 from "../../../asset/images/investorResearchImg3.png";
import investorResearchImg4 from "../../../asset/images/investorResearchImg4.png";
import investorIdeationImg1 from "../../../asset/images/investorIdeationImg1.png";
import investorIdeationImg2 from "../../../asset/images/investorIdeationImg2.png";
import investorPrototypeImg1 from "../../../asset/images/investorProtoTypeImg1.png";
import investorPrototypeImg2 from "../../../asset/images/investorProtoTypeImg2.png";
import investorPrototypeImg3 from "../../../asset/images/investorProtoTypeImg3.png";
import investorPrototypeImg4 from "../../../asset/images/investorProtoTypeImg4.png";

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
      date: "Aug 2024",
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
            "The InGate prototype offers role-specific dashboards for  host, admins, security persons, and visitors, ensuring a tailored user experience. It integrates real-time tracking, smart scheduling, and seamless communication to streamline the visitor visit process.",
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
          buttonCallback: () => {
            window.open(
              "https://www.behance.net/gallery/216047277/InGate-Visitor-Management-System"
            );
          },
        },
      ],
    },
  };
  const retroRing = {
    workDetails: {
      title: "RetroRing",
      subtitle: ["UX RESEARCH", "UX DESGIN", "UI DESGIN", "USABILITY TEST"],
      date: "May 2024",
      sections: [
        {
          type: "problem",
          heading: "The problem",
          description:
            "Social media apps struggle with seamless user engagement due to complex navigation, lack of real-time engagement tracking, and ineffective role-based interactions.",
          image: retroRingImg,
        },
        {
          type: "research",
          heading: "Research",
          description:
            "Addressing UI/UX challenges in real-time engagement tracking, & communication between users, and creators for an efficient social media experience in Retroring.",
          images: [retroRingResearchImg1, retroRingResearchImg2],
          solutionDescription:
            "Solutions include seamless navigation, real-time engagement indicators, and smart content scheduling to enhance user experience and interaction in Retroring.",
          solutionImages: [retroRingResearchImg3, retroRingResearchImg4],
        },
        {
          type: "ideation",
          heading: "Ideation",
          description:
            "Ideation for Retroring includes personalized user experiences, real-time engagement tracking, smart content scheduling, and seamless communication to enhance interactions for users, creators, and communities.",
          images: [retroRingIdeationImg1, retroRingIdeationImg2],
        },
        {
          type: "prototype",
          heading: "Prototype",
          description:
            "The Retroring prototype offers a personalized user experience for creators, communities, and users. It integrates real-time engagement tracking, smart content scheduling, and seamless communication to enhance social interactions.",
          images: [
            [retrpRingProtoTypeImg1, retrpRingProtoTypeImg2],
            [retrpRingProtoTypeImg3, retrpRingProtoTypeImg4],
          ],
        },
        {
          type: "tools",
          heading: "Tools",
          tools: [figmaIcon, miroIcon, behanceIcon, openAi],
          buttonLabel: "Prototype",
          buttonCallback: () => {
            window.open(
              "https://www.behance.net/gallery/200075317/RetroRing-Community-App-Case-Study"
            );
          },
        },
      ],
    },
  };
  const investor = {
    workDetails: {
      title: "Investor",
      subtitle: ["UX RESEARCH", "UX DESGIN", "UI DESGIN", "USABILITY TEST"],
      date: "May 2024",
      sections: [
        {
          type: "problem",
          heading: "The problem",
          description:
            "Enhance seamless navigation with intuitive UI, real-time property tracking, and role-specific dashboards for investors, agents, and admins. Ensure a frictionless experience.",
          image: investorImg,
        },
        {
          type: "research",
          heading: "Research",
          description:
            "Optimizing role-based navigation, real-time tracking, and seamless communication for investors, admins, and buyers to ensure an efficient real estate investment journey.",
          images: [investorResearchImg1, investorResearchImg2],
          solutionDescription:
            "Implementing intuitive dashboards, visual tracking indicators, and smart scheduling to streamline user flow, enhancing efficiency for investors, admins, and buyers.",
          solutionImages: [investorResearchImg3, investorResearchImg4],
        },
        {
          type: "ideation",
          heading: "Ideation",
          description:
            "Ideating role-specific dashboards, real-time tracking, smart scheduling, and streamlined communication to enhance the investor's experience and ensure seamless collaboration with admins and buyers.",
          images: [investorIdeationImg1, investorIdeationImg2],
        },
        {
          type: "prototype",
          heading: "Prototype",
          description:
            "The Retroring prototype offers a personalized user experience for creators, communities, and users. It integrates real-time engagement tracking, smart content scheduling, and seamless communication to enhance social interactions.",
          images: [
            [investorPrototypeImg1, investorPrototypeImg2],
            [investorPrototypeImg3, investorPrototypeImg4],
          ],
        },
        {
          type: "tools",
          heading: "Tools",
          tools: [figmaIcon, miroIcon, behanceIcon, invision],
          buttonLabel: "Prototype",
          buttonCallback: () => {
            window.open(
              "https://www.behance.net/gallery/217938145/Real-Estate-Investment-System"
            );
          },
        },
      ],
    },
  };
  useEffect(() => {
    if (userParam === "coolTron") {
      setProjectDetails(coolTron);
    } else if (userParam === "inGate") {
      setProjectDetails(inGate);
    } else if (userParam === "retroRing") {
      setProjectDetails(retroRing);
    } else if (userParam === "investor") {
      setProjectDetails(investor);
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
