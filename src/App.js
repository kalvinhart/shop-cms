import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import SideNav from "./components/SideNav/SideNav";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SideNav />
        <MainContent></MainContent>
      </Box>
    </BrowserRouter>
  );
};

export default App;
