import { Grid, Stack, Typography } from "@mui/material";

import DashboardActions from "./DashboardActions";
import SummaryCard from "./SummaryCard";

const Dashboard = () => {
  return (
    <Stack direction={"column"} width={"100%"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          fontSize={"24px"}
          fontWeight={"500"}
          sx={{ fontFamily: "Montserrat" }}>
          Dashboard
        </Typography>
        <DashboardActions />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <SummaryCard
              title="Orders"
              total={123456}
              labels={["Upcoming", "Ongoing", "Completed"]}
              dataValues={[50, 100, 50]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SummaryCard
              title="Trips"
              total={123456}
              labels={["Upcoming", "Ongoing", "Completed"]}
              dataValues={[50, 100, 50]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SummaryCard
              title="Revenue"
              total={123456}
              labels={["Upcoming", "Ongoing", "Completed"]}
              dataValues={[50, 100, 50]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SummaryCard
              title="Expenses"
              total={123456}
              labels={["Upcoming", "Ongoing", "Completed"]}
              dataValues={[50, 100, 50]}
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
