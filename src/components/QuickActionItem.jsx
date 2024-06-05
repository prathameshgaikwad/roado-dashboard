import { IconButton, Typography } from "@mui/material";

const QuickActionItem = ({ action, title }) => {
  return (
    <IconButton sx={{ flexDirection: "column", borderRadius: 0, p: 0 }}>
      <img
        src={`public/${action}.svg`}
        style={{ height: "20px", width: "20px" }}
      />
      <Typography
        fontSize={"12px"}
        fontWeight={"bold"}
        color={"#000"}
        mt={"8px"}>
        {title}
      </Typography>
    </IconButton>
  );
};

export default QuickActionItem;
