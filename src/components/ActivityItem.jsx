import { ListItem, Typography } from "@mui/material";

const ActivityItem = ({ content }) => {
  return (
    <ListItem sx={{ display: "inline-flex", flexDirection: "row", my: 1 }}>
      <Typography fontSize={"12px"} lineHeight={"16px"}>
        {content}
      </Typography>
    </ListItem>
  );
};

export default ActivityItem;
