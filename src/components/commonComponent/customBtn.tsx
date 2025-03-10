import { forwardRef } from "react";
import { Button, styled } from "@mui/material";
import buttonIcon from "../../asset/svgs/buttonLogo.svg";
import "./customeBtn.scss";
import { handleCustomButtonClickWithAnalytics } from "../../utils/mixpanel";
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
        handleCustomButtonClickWithAnalytics(
          onClickCallBack,
          event,
          buttonLabel
        );
      }}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon || <img src={buttonIcon} alt="btn Icon" />}
      size="large"
    >
      {buttonLabel}
    </CustomLoadingButton>
  );
});

export default LoadingButtonCustom;
