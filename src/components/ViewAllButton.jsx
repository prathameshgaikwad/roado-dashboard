import { Button, Typography } from "@mui/material";

const ViewAllButton = () => {
  return (
    <Button variant={"text"} color="inherit" sx={{ p: 0 }}>
      <Typography
        fontSize={"12px"}
        sx={{ textDecoration: "underline", textTransform: "capitalize" }}>
        View All
      </Typography>
    </Button>
  );
};

export default ViewAllButton;
