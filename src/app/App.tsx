import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store";

import CssBaseline from "@mui/material/CssBaseline";

import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Categories from "../pages/Categories/Categories";
import Layout from "../layout/Layout";
import RequireAuth from "../routing/components/RequireAuth/RequireAuth";
import Login from "../pages/Login/Login";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Authorised Routes */}
          <Route element={<RequireAuth allowedRoles={[1987]} />}>
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products/*" element={<Products />} />
              <Route path="categories/*" element={<Categories />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
