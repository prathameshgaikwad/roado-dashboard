import { Divider, List, Paper } from "@mui/material";

import ActivityItem from "./ActivityItem";

const ActivityList = ({ list }) => {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        borderRadius: "4px",
        mt: 2,
        borderColor: "#CBCBCB",
      }}>
      <List>
        {list.map((activity, i) => (
          <>
            <ActivityItem key={i} content={activity} />
            {i !== list.length - 1 && (
              <Divider sx={{ borderColor: "#CBCBCB" }} />
            )}
          </>
        ))}
      </List>
    </Paper>
  );
};

export default ActivityList;
