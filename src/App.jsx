import { CssBaseline, Stack } from "@mui/material";

import ActivityPanel from "./components/ActivityPanel";
import Dashboard from "./components/Dashboard";
import QuickActions from "./components/QuickActions";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Stack direction={"row"} sx={{ height: "100vh", width: "100vw" }}>
      <CssBaseline />
      <Sidebar />
      <Stack
        direction={"column"}
        sx={{ width: "100%", px: 2, mt: "22px" }}
        spacing={4}>
        <Dashboard />
        <QuickActions />
      </Stack>
      <ActivityPanel />
    </Stack>
  );
}

export default App;
