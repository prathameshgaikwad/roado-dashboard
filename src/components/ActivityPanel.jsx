import { Card, CardContent, Drawer } from "@mui/material";

import ActivitySection from "./ActivitySection";
import TodaysHighlights from "./TodaysHighlights";

const ActivityPanel = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        bgcolor: "#fffff",
        height: "100vh",
        position: "absolute",
      }}>
      <Card>
        <CardContent sx={{ width: 360, height: "100vh", overflowY: "auto" }}>
          <TodaysHighlights />
          <ActivitySection
            activityTitle={"Completed Activities (14)"}
            isExpandable
          />
          <ActivitySection
            activityTitle={"Scheduled Activities (14)"}
            isExpandable
          />
        </CardContent>
      </Card>
    </Drawer>
  );
};

export default ActivityPanel;
