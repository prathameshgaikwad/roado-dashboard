import { Card, CardContent, List, ListItemButton } from "@mui/material";

import Logo from "./Logo";

const Sidebar = () => {
  const buttons = [
    "dashboard",
    "add-to-queue",
    "label-important",
    "assignment",
    "parcel-with-time",
    "local-shipping",
    "parcel-tracking",
    "business-center",
    "account-balance-wallet",
    "dynamic-feed",
    "settings",
  ];

  return (
    <Card
      sx={{
        bgcolor: "#fffff",
        height: "100vh",
        minWidth: 64,
      }}>
      <CardContent sx={{ p: 0 }}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Logo />
          {buttons.map((button, i) => {
            return (
              <ListItemButton
                key={i}
                onClick={() => {
                  alert(`go to ${button}`);
                }}
                sx={{ py: "10px" }}>
                <img src={`public/${button}.svg`} alt={button} />
              </ListItemButton>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
