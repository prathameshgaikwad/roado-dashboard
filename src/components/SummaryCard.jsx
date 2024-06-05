import "chart.js/auto";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import { Doughnut } from "react-chartjs-2";

const SummaryCard = ({ title, total, labels, dataValues }) => {
  const data = {
    datasets: [
      {
        data: dataValues,
        backgroundColor: ["#FFCB49", "#4FD2B5", "#7464FF"],
      },
    ],
  };

  return (
    <Card
      sx={{
        borderRadius: "12px",
        // width: "196px",
        height: "266px",
        boxShadow: "0px 2px 8px 0px #1A38750D",
      }}>
      <CardContent>
        <Typography fontSize={"14px"} gutterBottom>
          {title}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          sx={{ height: "110px", width: "110px", mx: "auto" }}>
          <Doughnut
            data={data}
            options={{
              cutout: "70%",
              plugins: {
                tooltip: {
                  enabled: true,
                },
              },
            }}
          />
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            top="50%"
            left="50%"
            style={{ transform: "translate(-50%, -40%)" }}>
            <Stack direction={"column"} alignItems={"center"}>
              <Typography fontSize={"12px"} color={"#676666"}>
                Total
              </Typography>
              <Typography fontSize={"12px"} fontWeight={"bold"}>
                {total}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box mt={2}>
          {labels.map((label, index) => {
            let color = "#FFCB49";
            switch (label) {
              case "Upcoming":
                color = "#FFCB49";
                break;
              case "Ongoing":
                color = "#7464FF";
                break;
              case "Completed":
                color = "#4FD2B5";
                break;
              default:
                color = "#222222";
            }
            return (
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                sx={{
                  backgroundImage: `linear-gradient(90deg, #FFFFFF 0%, ${color} 100%)`,
                  borderRadius: "4px",
                  px: 1,
                  height: "24px",
                  alignItems: "center",
                }}
                mt={1}>
                <Typography fontSize={"12px"}>{label}</Typography>
                <Typography fontSize={"12px"}>{dataValues[index]}</Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
