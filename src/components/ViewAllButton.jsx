import { Button, Link, Typography } from "@mui/material";

const ViewAllButton = ({ url, isLarge }) => {
  return (
    <Button variant={"text"} sx={{ p: 0 }}>
      <Link href={url}>
        <Typography
          fontSize={isLarge ? "14px" : "12px"}
          sx={{ textDecoration: "underline", textTransform: "capitalize" }}>
          View All
        </Typography>
      </Link>
    </Button>
  );
};

export default ViewAllButton;
