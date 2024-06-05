import { Card, CardContent, Divider, List } from "@mui/material";

import ActivityItem from "./ActivityItem";

const ActivityList = () => {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        borderRadius: "4px",
        mt: 2,
        borderColor: "#CBCBCB",
      }}>
      <CardContent sx={{ padding: 0 }}>
        <List>
          <ActivityItem
            content={
              "Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325"
            }
          />
          <Divider sx={{ borderColor: "#CBCBCB" }} />
          <ActivityItem
            content={
              "Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325"
            }
          />
          <Divider sx={{ borderColor: "#CBCBCB" }} />
          <ActivityItem
            content={
              "Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325"
            }
          />
          <Divider sx={{ borderColor: "#CBCBCB" }} />
          <ActivityItem
            content={
              "Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325"
            }
          />
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityList;
