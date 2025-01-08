import "./serviceComponent.scss";
import webDesignImg from "../../asset/images/webDesgin.png";
import mobileDesignImg from "../../asset/images/mobileDesign.png";
import adaptiveDesignImg from "../../asset/images/adaptiveDesign.png";
export const ServiceComponent = () => {
  const serviceList = [
    {
      highlightText: "We",
      header: "b Design",
      info: "I offer professional web design services to help businesses establish a strong online presence. My designs are tailored to meet the unique needs of each client, ensuring a perfect balance of aesthetics and functionality!",
      img: webDesignImg,
    },
    {
      highlightText: "Mo",
      header: "bile Design",
      info: "I provide expert mobile design services to ensure your website or app looks great and functions seamlessly on any device. My designs are optimized for mobile responsiveness, offering smooth navigation and a user-friendly experience!",
      img: mobileDesignImg,
    },
    {
      highlightText: "Ad",
      header: "aptive Design",
      info: "I offer adaptive design solutions to ensure your digital products look and work flawlessly on any device. With user-friendly layouts and responsive precision, I create seamless experiences that boost engagement. Let's make your design consistent and impactful!",
      img: adaptiveDesignImg,
    },
  ];
  return (
    <div className="serviceParent">
      <div className="serviceWrapper">
        <div className="serviceContainer">
          <div className="serviceHeadingandInfoWrapper">
            <div className="headerContainer">
              <span className="serviceHeadingText">
                Crafting Exceptional UI. Seamless UX. and User Centric Products
              </span>
            </div>
            <div className="serviceInfoContainer">
              <span className="serviceInfoText">
                I am Aniket, a
                <span className="highlightText"> Product Designer</span> helping
                tech startups passionately for reshaping their brands, user
                experiences, and app/website designs.
              </span>
            </div>
          </div>
          {serviceList.map((service,index) => {
            return (
              <div className="serviceLists" key={index}>
                <div className="infoContainer">
                  <div className="serviceHeader">
                    <span className="serviceHeaderText">
                      <span className="underLineHighlightTExt">
                        {service.highlightText}
                      </span>
                      {service.header}
                    </span>
                  </div>
                  <span className="serviceInfoText">{service.info}</span>
                </div>
                <div className="serviceImgContainer">
                  <img src={service.img} alt="web" className="serviceImg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
