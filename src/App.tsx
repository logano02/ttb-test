import "./App.css";
import Confirm from "./pages/confirm";
import { Outlet } from "@mui/icons-material";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Outlet />
      <Box width={"100%"}>
        <Confirm />
      </Box>
    </>
  );
}

export default App;
