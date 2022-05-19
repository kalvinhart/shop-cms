import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import SideNav from "./components/SideNav/SideNav";
import MainContent from "./components/MainContent/MainContent";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";

const App = () => {
  return (
    <Provider store={store}>
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
              <Route path="/products/*" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </MainContent>
        </Box>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
