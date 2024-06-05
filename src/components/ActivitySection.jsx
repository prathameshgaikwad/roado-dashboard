import ActivityList from "./ActivityList";
import SectionHeader from "./SectionHeader";
import { Stack } from "@mui/material";

const ActivitySection = ({ activityTitle, isExpandable = false }) => {
  return (
    <Stack direction={"column"} mt={3}>
      <SectionHeader title={activityTitle} isExpandable={isExpandable} />
      <ActivityList />
    </Stack>
  );
};

export default ActivitySection;
