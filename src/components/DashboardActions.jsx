import { ButtonGroup, Divider, IconButton } from "@mui/material";

const DashboardActions = () => {
  return (
    <ButtonGroup
      variant="contained"
      sx={{
        borderRadius: "16px",
        bgcolor: "#FFFFFF",
        height: "32px",
        width: "132px",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxShadow: "0px 2px 8px 0px #1A38750D",
      }}>
      <IconButton>
        <img src="public/search.svg" />
      </IconButton>
      <Divider
        orientation="vertical"
        sx={{ height: "16px", borderColor: "#CBCBCB" }}
      />
      <IconButton>
        <img src="public/notifications.svg" />
      </IconButton>
      <Divider
        orientation="vertical"
        sx={{ height: "16px", borderColor: "#CBCBCB" }}
      />
      <IconButton>
        <img src="public/options.svg" />
      </IconButton>
    </ButtonGroup>
  );
};

export default DashboardActions;
