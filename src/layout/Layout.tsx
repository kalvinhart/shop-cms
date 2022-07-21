import { Box } from "@mui/system";
import MainContent from "../components/MainContent/MainContent";
import SideNav from "../components/SideNav/SideNav";
import { Header } from "./Header";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SideNav />
        <MainContent>{children}</MainContent>
      </Box>
    </>
  );
};

export default Layout;
