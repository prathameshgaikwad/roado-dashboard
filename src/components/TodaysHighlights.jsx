import DataCard from "./DataCard";
import { Grid } from "@mui/material";
import SectionHeader from "./SectionHeader";

const TodaysHighlights = () => {
  return (
    <>
      <SectionHeader
        title={"Todays Highlights (14)"}
        variant="subtitle1"
        subtitle={"19 Mar 2024"}
        isLargeTitle
      />
      <Grid container spacing={2} mt={"14px"}>
        <Grid item xs={6}>
          <DataCard
            title={"Income"}
            color={"green"}
            subtitle={"100000 CAD"}
            moreInfo={"2 payments received"}
          />
        </Grid>
        <Grid item xs={6}>
          <DataCard
            title={"Expenses"}
            color={"error"}
            subtitle={"50000 CAD"}
            moreInfo={"5 payments paid"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TodaysHighlights;
