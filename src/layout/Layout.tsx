import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import MainContent from "../components/MainContent/MainContent";
import SideNav from "../components/SideNav/SideNav";
import { Header } from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SideNav />
        <MainContent>
          <Outlet />
        </MainContent>
      </Box>
    </>
  );
};

export default Layout;
