import { Card, CardContent } from "@mui/material";

import ActivitySection from "./ActivitySection";
import TodaysHighlights from "./TodaysHighlights";

const ActivityPanel = () => {
  return (
    <Card
      sx={{ ml: "auto", minWidth: 360, height: "100vh", overflowY: "auto" }}>
      <CardContent>
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
  );
};

export default ActivityPanel;
