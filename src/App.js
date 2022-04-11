import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import SideNav from "./components/SideNav/SideNav";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box>
        <SideNav />
      </Box>
    </BrowserRouter>
  );
};

export default App;
