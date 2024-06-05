import { Grid, Stack } from "@mui/material";

import CustomAlert from "./CustomAlert";
import SectionHeader from "./SectionHeader";

const AlertsSection = () => {
  return (
    <Stack direction={"column"} width={"100%"}>
      <SectionHeader
        title={"High Priority Alerts (14)"}
        isLargeTitle
        isExpandable
      />
      <Grid container spacing={2} mt={"14px"}>
        <Grid item xs={12} md={6}>
          <CustomAlert
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
            }
            title={"Driver Raised Concern"}
            imgSrc={"add-driver"}
            loadNo={"12454"}
            billTo={"RoaDo demo Bangalore"}
            date={"13 Feb 2024"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomAlert
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua"
            }
            title={"Reefer Temp. out of range"}
            imgSrc={"device-thermostat"}
            loadNo={"12454"}
            billTo={"RoaDo demo Bangalore"}
            date={"13 Feb 2024"}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AlertsSection;
