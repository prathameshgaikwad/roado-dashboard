import ActivityList from "./ActivityList";
import SectionHeader from "./SectionHeader";
import { Stack } from "@mui/material";

const ActivitySection = ({ activityTitle, isExpandable = false, list }) => {
  return (
    <Stack direction={"column"} mt={3}>
      <SectionHeader title={activityTitle} isExpandable={isExpandable} />
      <ActivityList list={list} />
    </Stack>
  );
};

export default ActivitySection;
