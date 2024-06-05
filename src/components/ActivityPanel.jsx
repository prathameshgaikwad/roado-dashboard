import { Card, CardContent } from "@mui/material";

import ActivitySection from "./ActivitySection";
import TodaysHighlights from "./TodaysHighlights";

const ActivityPanel = () => {
  const completedActivities = [
    "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
    "Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325",
    "Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325",
    "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  ];
  const scheduledActivities = [
    "Load No. I-I-AAA-1325 will be delivered by Aman (Driver)",
    "Aman (Driver) will Picked Up goods at Location_Name for Load No. I-I-AAA-1325",
    "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
    "Load No. I-I-AAA-1325 will start added by Gurpreet Singh",
  ];
  return (
    <Card
      sx={{
        ml: "auto",
        minWidth: 360,
        height: "100vh",
        overflowY: "auto",
        boxShadow: "0px 2px 8px 0px #1A38750D",
      }}>
      <CardContent>
        <TodaysHighlights />
        <ActivitySection
          activityTitle={"Completed Activities (14)"}
          isExpandable
          list={completedActivities}
        />
        <ActivitySection
          activityTitle={"Scheduled Activities (14)"}
          isExpandable
          list={scheduledActivities}
        />
      </CardContent>
    </Card>
  );
};

export default ActivityPanel;
