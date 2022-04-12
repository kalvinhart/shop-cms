import { Box } from "@mui/material";

const MainContent = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "40px 80px",
        backgroundColor: "#f9fbfd",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
