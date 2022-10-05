import { Provider } from "react-redux";

import { store } from "./store";

import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "../routing/AppRoutes";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppRoutes />
    </Provider>
  );
};

export default App;
