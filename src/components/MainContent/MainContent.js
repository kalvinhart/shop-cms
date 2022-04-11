import { Box } from "@mui/material";

const MainContent = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "40px 40px",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
