import { BrowserRouter, Route, Routes } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import SideNav from "./components/SideNav/SideNav";
import MainContent from "./components/MainContent/MainContent";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";

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
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </MainContent>
      </Box>
    </BrowserRouter>
  );
};

export default App;
