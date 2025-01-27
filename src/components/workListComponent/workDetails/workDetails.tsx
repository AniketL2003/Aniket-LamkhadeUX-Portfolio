import { GoBackButton } from "../../commonComponent/projectButton/backButton";
import "./workDetails.scss";
import coolTronImg from "../../../asset/svgs/coolTronWallaperDetails.svg";
import coolTronResearchImg1 from "../../../asset/images/coolTronResearchImg1.png";
import coolTronResearchImg2 from "../../../asset/images/coolTronResearchImg2.png";
import coolTronResearchUserFlow from "../../../asset/images/cooltronUserFlow.png";
import coolTronResearchUserFlow2 from "../../../asset/images/cooltronSample.png";
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
import { ProjectButton } from "../../commonComponent/projectButton/projectButton";
import { useNavigate } from "react-router-dom";
export const WorkDetails = () => {
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
          images: [
            coolTronResearchImg1,
            coolTronResearchImg2,
            coolTronResearchUserFlow,
            coolTronResearchUserFlow2,
          ],
          solutionDescription:
            "Solutions include intuitive dashboards, visual tracking indicators, and smart scheduling to ensure a user-friendly experience for all roles.",
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
const navigate = useNavigate();
  const renderSection = (section: any) => {
    switch (section.type) {
      case "problem":
        return (
          <div className="workProblemPageContainer">
            <div className="workTitleHeadingWrapper">
              <div className="headingContainer">
                <span className="Heading">{coolTron.workDetails.title}</span>
                <div className="subHeadingWrapper">
                  {coolTron.workDetails.subtitle.map(
                    (subHeading: any, index: any) => (
                      <span key={index} className="subHeading">
                        {subHeading}
                      </span>
                    )
                  )}
                  {/* <span className="subHeading">UX RESEARCH</span>
                  <span className="subHeading">UX RESEARCH</span>
                  <span className="subHeading">UX DESGIN </span>
                  <span className="subHeading">UI DESGIN </span>
                  <span className="subHeading">USABILITY TEST</span> */}
                </div>
              </div>
              <div className="dateContainer">
                <span className="date">{coolTron.workDetails.date}</span>
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
              {/* {section.images.map((image: any, index: any) => (
                <div key={index} className="imgContainer">
                  <img
                    src={image}
                    alt="workimage"
                    className={
                      index % 2 === 0
                        ? "prototypeImagPrimary"
                        : "prototypeImagSecondary"
                    }
                  />
                </div>
              ))} */}
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
          <GoBackButton onClickCallBack={()=>{
            navigate("/work");
          }} />
        </div>
        <div className="workDetailsContianer">
          {/* <div className="workProblemPageContainer">
            <div className="workTitleHeadingWrapper">
              <div className="headingContainer">
                <span className="Heading">Cool Tron</span>
                <div className="subHeadingWrapper">
                  <span className="subHeading">UX RESEARCH</span>
                  <span className="subHeading">UX DESGIN </span>
                  <span className="subHeading">UI DESGIN </span>
                  <span className="subHeading">USABILITY TEST</span>
                </div>
              </div>
              <div className="dateContainer">
                <span className="date">Dec 2024</span>
              </div>
            </div>
            <div className="workImageWrapper">
              <img src={coolTronImg} alt="workimage" className="workImage" />
            </div>
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">The</span> problem
              </span>
              <span className="description">
                Overcoming UI/UX challenges in navigation, real-time tracking,
                and role-specific interactions for seamless service management.
              </span>
            </div>
          </div> */}
          {coolTron.workDetails.sections.map((section: any, index: any) => (
            <div key={index}>{renderSection(section)}</div>
          ))}
          {/* <div className="workResearchPageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">Res</span>earch
              </span>
              <span className="description">
                Addressing UI/UX challenges in role-based navigation, real-time
                tracking, and seamless communication between customers, admins,
                and technicians for efficient service.
              </span>
            </div>
            <div className="researchImageWrapper">
              <img
                src={coolTronResearchImg1}
                alt="workimage"
                className="researchImage"
              />
              <img
                src={coolTronResearchImg2}
                alt="workimage"
                className="researchImageSecondry"
              />
              <div className="problemDescription">
                <span className="description">
                  Solutions include intuitive dashboards, visual tracking
                  indicators, and smart scheduling to ensure a user-friendly
                  experience for all roles.
                </span>
              </div>
              <img
                src={coolTronResearchUserFlow}
                alt="workimage"
                className="researchImage"
              />
              <img
                src={coolTronResearchUserFlow2}
                alt="workimage"
                className="researchImageSecondry"
              />
            </div>
          </div> */}
          {/* {coolTron.workDetails.sections.map((section: any, index: any) => (
            <div key={index}>{renderSection(section)}</div>
          ))} */}
          {/* <div className="workIdetionPageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">Ide</span>ation
              </span>
              <span className="description">
                Ideation for Cooltron includes role-specific dashboards,
                real-time tracking, smart scheduling, and streamlined
                communication to enhance user experience for customers, admins,
                and technicians.
              </span>
            </div>
            <div className="ideationImageWrapper">
              <img src={ideationImg} alt="" className="ideationImg" />
              <img src={ideationImg2} alt="" className="ideationImg" />
            </div>
          </div> */}
          {/* {coolTron.workDetails.sections.map((section: any, index: any) => (
            <div key={index}>{renderSection(section)}</div>
          ))} */}
          {/* <div className="workPrototypePageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">Pro</span>totype
              </span>
              <span className="description">
                The Cooltron prototype offers role-specific dashboards for
                customers, admins, and technicians, ensuring a tailored user
                experience. It integrates real-time tracking, smart scheduling,
                and seamless communication to streamline the repair service
                process.
              </span>
            </div>
            <div className="prototypeImageWrapper">
              <div className="imgContainer">
                <img
                  src={prototypeImg}
                  alt="workimage"
                  className="prototypeImagPrimary"
                />
                <img
                  src={prototypeImg2}
                  alt="workimage"
                  className="prototypeImagSecondary"
                />
              </div>
              <div className="imgContainer">
                <img
                  src={prototypeImg3}
                  alt="workimage"
                  className="prototypeImagSecondary"
                />
                <img
                  src={prototypeImg4}
                  alt="workimage"
                  className="prototypeImagPrimary"
                />
              </div>
            </div>
          </div>
          <div className="workToolsPageContainer">
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">Too</span>ls
              </span>
            </div>
            <div className="toolsContainer">
              <div className="tool">
                <img src={figmaIcon} alt="" className="icon" />
              </div>
              <div className="tool">
                <img src={miroIcon} alt="" className="icon" />
              </div>
              <div className="tool">
                <img src={sekectIcon} alt="" className="icon" />
              </div>
              <div className="tool">
                <img src={illustratorIcon} alt="" className="icon" />
              </div>
            </div>
            <ProjectButton
              buttonLabel="Prototype"
              className="primaryBtn"
              //   className="primaryBtn"
              //   buttonLabel={"View"}
              onClickCallBack={() => {}}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
