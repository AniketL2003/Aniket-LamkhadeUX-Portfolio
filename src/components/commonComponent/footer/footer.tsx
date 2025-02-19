import "./footer.scss";
import footerIcon from "../../../asset/images/footerIcon.png";
// import whatsAppIcon from "../../../asset/images/whatsappIcon.png";
import lindekinIcon from "../../../asset/images/linkedinIcon.png";
import behanceIcon from "../../../asset/images/beIcon.png";
export const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerContent">
        <div className="footerUpperSectionWrapper">
          <div className="iconContainer">
            <img src={footerIcon} alt="icon" className="footerIcon" />
          </div>
          <div className="contactContainer">
            {/* <img
              src={whatsAppIcon}
              alt="whatsAppIcon"
              className="contactIcons"
            /> */}
            <img
              src={lindekinIcon}
              alt="lindekinIcon"
              className="contactIcons"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/aniketlamkhade?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXJ%2BcUHF4RpWgRIBjr%2FzpEw%3D%3D"
                );
              }}
            />
            <img
              src={behanceIcon}
              alt="behanceIcon"
              className="contactIcons"
              onClick={() => {
                window.open("https://www.behance.net/aniketlamkhade1");
              }}
            />
          </div>
        </div>
        <span className="footerText">
          Crafted with passion by Aniket Lamkhade | UI/UX Designer | © 2025
        </span>
      </div>
    </div>
  );
};
