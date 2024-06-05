import {
  Button,
  Icon,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const ViewAllButton = ({ url, isLarge, hasArrow }) => {
  return (
    <Button variant={"text"} sx={{ p: 0 }}>
      <Stack direction={"row"} alignItems={"end"} justifyContent={"center"}>
        <Link href={url} sx={{ textDecoration: "none" }}>
          <Typography
            fontSize={isLarge ? "14px" : "12px"}
            sx={{
              textDecoration: !hasArrow ? "underline" : "none",
              textTransform: "capitalize",
              color: "#111",
            }}>
            View All
          </Typography>
        </Link>
        {hasArrow && (
          <IconButton sx={{ borderRadius: 0, p: 0, height: "20px" }}>
            <img src="public/arrow.svg" style={{ height: "100%" }} />
          </IconButton>
        )}
      </Stack>
    </Button>
  );
};

export default ViewAllButton;
