import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 99999 }}>
      <Toolbar>
        <Typography variant="h6">eShop CMS</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
