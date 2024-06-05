import { CssBaseline, Stack } from "@mui/material";

import ActivityPanel from "./components/ActivityPanel";
import QuickActions from "./components/QuickActions";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Stack direction={"row"} sx={{ height: "100vh", width: "100vw" }}>
      <CssBaseline />
      <Sidebar />
      <QuickActions />
      <ActivityPanel />
    </Stack>
  );
}

export default App;
