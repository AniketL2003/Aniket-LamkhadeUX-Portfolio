import { forwardRef } from "react";
import { Button, styled } from "@mui/material";
import buttonIcon from "../../asset/svgs/buttonLogo.svg";
import "./customeBtn.scss";

const CustomLoadingButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#E27022",
  textTransform: "none",
  height: "55px",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#000",
    boxShadow: "0px 4px 0px 0px #5C6168",
  },
  "&.MuiLoadingButton-loading": {
    backgroundColor: "#cccbcb",
  },
  "&.Mui-disabled": {
    backgroundColor: "#cccbcb",
  },
}));

const LoadingButtonCustom = forwardRef<any, any>((props, ref) => {
  const {
    className,
    onClickCallBack,
    buttonLabel,
    type,
    disabled,
    startIcon,
    endIcon,
  } = props;

  return (
    <CustomLoadingButton
      ref={ref}
      className={className}
      type={type}
      onClick={(event: any) => {
        onClickCallBack(event);
      }}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon || <img src={buttonIcon} alt="btn Icon" />}
      size="large"
    >
      {buttonLabel}
    </CustomLoadingButton>
    // <button
    //   // className="button"
    //   style={{ color: "white", backgroundColor: "#E27022" }}
    //   className={`${className} button`}
    // >
    //   <span className="button__icon-wrapper">
    //     <svg
    //       viewBox="0 0 14 15"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="button__icon-svg"
    //       width="10"
    //     >
    //       <path
    //         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
    //         fill="currentColor"
    //       ></path>
    //     </svg>

    //     <svg
    //       viewBox="0 0 14 15"
    //       fill="none"
    //       width="10"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="button__icon-svg button__icon-svg--copy"
    //     >
    //       <path
    //         d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
    //         fill="currentColor"
    //       ></path>
    //     </svg>
    //   </span>
    //   Expoler
    // </button>
  );
});

export default LoadingButtonCustom;
