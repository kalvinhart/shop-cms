import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store";

import CssBaseline from "@mui/material/CssBaseline";

import Dashboard from "../components/Dashboard/Dashboard";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Layout from "../layout/Layout";
import RequireAuth from "../components/RequireAuth/RequireAuth";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Routes>
            {/* Authorised Routes */}
            <Route element={<RequireAuth allowedRoles={[1987]} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products/*" element={<Products />} />
              <Route path="/categories/*" element={<Categories />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
