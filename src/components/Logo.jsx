import { Icon } from "@mui/material";

const Circle = ({ color, top, left, zIndex }) => {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        border: "2px solid",
        borderColor: color,
        borderRadius: "50%",
        position: "absolute",
        top,
        left,
        zIndex,
      }}></div>
  );
};
const Logo = () => {
  return (
    <Icon
      sx={{
        width: "32px",
        height: "29px",
        mb: "27px",
      }}>
      <Circle color={"#2429A9"} top={"24px"} left={"22px"} zIndex={3} />
      <Circle color={"#EA1414"} top={"33px"} left={"28px"} zIndex={2} />
      <Circle color={"#1AEA22"} top={"33px"} left={"16px"} zIndex={1} />
    </Icon>
  );
};

export default Logo;
