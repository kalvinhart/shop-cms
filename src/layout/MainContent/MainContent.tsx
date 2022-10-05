import { Box, Paper } from "@mui/material";

type Props = {
  children: JSX.Element;
};

const MainContent = ({ children }: Props) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "100px 80px 80px 80px",
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
