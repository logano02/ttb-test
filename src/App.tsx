import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Confirm from "./pages/confirm";
import { Outlet } from "@mui/icons-material";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box width={'100%'}>
        <Confirm />
      </Box>
    </>
  );
}

export default App;
