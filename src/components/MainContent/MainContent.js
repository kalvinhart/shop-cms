import { Box } from "@mui/material";

const MainContent = ({ children }) => {
  return (
    <Box component="main" sx={{ display: "flex", flexDirection: "column" }}>
      {children}
    </Box>
  );
};

export default MainContent;
