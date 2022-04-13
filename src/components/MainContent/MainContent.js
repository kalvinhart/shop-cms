import { Box, Paper } from "@mui/material";

const MainContent = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "40px 80px",
        backgroundColor: "#f9fbfd",
      }}
    >
      <Paper sx={{ display: "flex", flexDirection: "column", padding: "40px" }}>
        {children}
      </Paper>
    </Box>
  );
};

export default MainContent;
