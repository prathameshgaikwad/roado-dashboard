import { ListItem, Typography } from "@mui/material";

const ActivityItem = ({ content }) => {
  return (
    <ListItem sx={{ display: "inline-flex", flexDirection: "row", my: 0 }}>
      <Typography fontSize={"12px"} lineHeight={"16px"} fontWeight={"400"}>
        {content}
      </Typography>
    </ListItem>
  );
};

export default ActivityItem;
