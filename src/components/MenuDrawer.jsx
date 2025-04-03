import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { SlKey } from "react-icons/sl";
import { FaRegCalendarCheck, FaUsers } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { PermanentDrawer } from "./styled-components/Drawer";

export default function MenuDrawer({drawerOpen, setDrawerOpen}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
  };


  const list = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard style={{ width: "25px", height: "25px" }} />,
      path: "/",
    },
    { name: "Bookings", icon: <FaRegCalendarCheck style={{ width: "25px", height: "25px" }} />,
    path: "/bookings", 
  },
    {
      name: "Rooms",
      icon: <SlKey style={{ width: "25px", height: "25px" }} />,
      path: "/rooms",
    },
    {
      name: "Contact",
      icon: <FiAtSign  style={{ width: "25px", height: "25px" }} />,
      path: "/contact",
    },
    {
      name: "Users",
      icon: <FaUsers style={{ width: "25px", height: "25px"}} />,
      path: "/users",
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {list.map((item) => (
          <ListItem key={item.name} disablePadding onClick={() => handleNavigation(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <HiOutlineMenuAlt2 />
      </IconButton>
      <PermanentDrawer variant="temporary"
          open={open}
          onClose={toggleDrawer(false)}
          ModalProps={{
          keepMounted: true, 
          BackdropProps: {
            invisible: true, 
          },
        }}>
        {DrawerList}
      </PermanentDrawer>
    </div>
  );
}
