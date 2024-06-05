import { ButtonGroup, Divider, Stack, Typography } from "@mui/material";

import QuickActionItem from "./QuickActionItem";

const QuickActions = () => {
  const quickActionButtons = [
    { src: "create-indents", title: "Create Indents" },
    { src: "add-vehicle", title: "Add Vehicle" },
    { src: "add-trailer", title: "Add Trailer" },
    { src: "add-driver", title: "Add Driver" },
    { src: "add-indents", title: "Add Indents" },
  ];
  return (
    <Stack direction={"column"} width={"100%"} sx={{ mx: 2 }}>
      <Typography fontSize={"16px"} fontWeight={"bold"}>
        Quick Actions
      </Typography>
      <ButtonGroup
        variant="contained"
        elevation={2}
        sx={{
          width: "100%",
          borderRadius: "16px",
          justifyContent: "space-around",
          mt: "14px",
          py: "14px",
          bgcolor: "#FFF",
        }}>
        {quickActionButtons.map((button, i) => {
          return (
            <>
              <QuickActionItem
                key={i}
                action={button.src}
                title={button.title}
              />
              {i !== quickActionButtons.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{ borderColor: "#CBCBCB", height: 46, my: "auto" }}
                />
              )}
            </>
          );
        })}
      </ButtonGroup>
    </Stack>
  );
};

export default QuickActions;
