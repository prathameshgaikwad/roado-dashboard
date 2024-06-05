import { Drawer, List, ListItemButton } from "@mui/material";

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
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        bgcolor: "#fffff",
        height: "100vh",
      }}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 64,
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
    </Drawer>
  );
};

export default Sidebar;
