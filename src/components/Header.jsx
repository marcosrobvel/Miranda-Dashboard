import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { Divider, Menu } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { BiBell, BiCommentDetail } from "react-icons/bi";
import { IoLogOutOutline, IoSearchOutline } from "react-icons/io5";
import MenuDrawer from "./MenuDrawer";
import { FaRegHeart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { useDarkTheme } from "../context/DarkTheme";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pageTitle, setPageTitle] = React.useState("Dashboard");
  const location = useLocation();
  const { logout } = useAuth(); 
  const navigate = useNavigate();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("Dashboard");
        break;
      case "/bookings":
        setPageTitle("Bookings");
        break;
      case "/rooms":
        setPageTitle("Rooms");
        break;
      case "/contact":
        setPageTitle("Contact");
        break;
      case "/users":
        setPageTitle("Users");
        break;
      default:
        setPageTitle("Dashboard");
    }
  }, [location.pathname]);

  const { darkTheme, toggleTheme } = useDarkTheme();

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" noWrap component="div">
            {pageTitle}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{display: 'flex', gap: '25px'}}>
            <IconButton size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={toggleTheme}>
              <BsFillMoonStarsFill />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MdOutlineEmail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <BiBell />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleLogout}
              aria-label="logout"
              size="large"
              color="inherit"
              data-testid="logout-icon">
              <TbLogout />
            </IconButton>
            
          </Box>
        </Toolbar>
      </AppBar>
      
      {renderMenu}
    </Box>
  );
}
