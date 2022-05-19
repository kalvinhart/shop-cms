import { useNavigate } from "react-router";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

const SideNav = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: "250px",
        "& .MuiDrawer-paper": {
          width: "250px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => navigate("/orders")}>
          <ListItemIcon>
            <ReceiptOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

        <Divider />

        <ListItem button onClick={() => navigate("/categories")}>
          <ListItemIcon>
            <CategoryOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>

        <ListItem button onClick={() => navigate("/products")}>
          <ListItemIcon>
            <InventoryOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;
