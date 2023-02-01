import * as React from "react";
// import { decryptData } from './utils';
import PropTypes from "prop-types";
import {
  Menu,
  Paper,
  Badge,
  MenuItem,
  Avatar,
  Tooltip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";                                                                     
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";       
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate, Link, useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GradingIcon from "@mui/icons-material/Grading";
import SyncIcon from "@mui/icons-material/Sync";
import UpdateIcon from "@mui/icons-material/Update";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";1
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import {
  amber,                                            
  deepOrange,
  grey,
  indigo,
  blueGrey,
  lightBlue,
  cyan,
  deepPurple,
  pink,
} from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...blue,
      ...(mode === "dark" && {
        main: blue[900],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: grey[50],
        paper: grey[50],
      },
    }),
    text: {
      ...(mode === "dark"
        ? {
            primary: blue[900],
            secondary: blue[900],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const drawerWidth = 240;

function AppBarDrawer(props) {
  // const profileData = JSON.parse(decryptData(localStorage.getItem("pd"),process.env.REACT_APP_LOCAL_STORAGE_KEY));
  const navigate = useNavigate();
  const location = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // React.useEffect(() => {
  //   if(profileData.userCode === null)
  //     navigate('/login');
  // },[profileData.userCode,navigate]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img
          src="https://media.glassdoor.com/sqll/503743/silicon-techlab-squarelogo-1643983959442.png"
          alt="Logo"
          style={{ height: "65px", width: "100%" }}
        />
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          button
          key="dashboard"
          component={Link}
          to="/dashboard"
          selected={location.pathname === "/dashboard"}
          className="ListItem"
        >
          <ListItemIcon className="ListIcon">
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />

        <Divider />
        <List>
          <ListItemText>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container>
                  <Grid item lg={4}>
                    <GradingIcon />
                  </Grid>
                  <Grid item lg={6}>
                    <Typography>Test</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem
                    button
                    key="sync"
                    component={Link}
                    to="/sync"
                    selected={location.pathname === "/sync"}
                    className="ListItem"
                  >
                    <ListItemIcon className="ListIcon">
                      <SyncIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sync" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    key="update"
                    component={Link}
                    to="/update"
                    selected={location.pathname === "/update"}
                    className="ListItem"
                    sx={{ mt: 1 }}
                  >
                    <ListItemIcon className="ListIcon">
                      <UpdateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Update" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    key="sync"
                    component={Link}
                    to="/manage"
                    selected={location.pathname === "/manage"}
                    className="ListItem"
                    sx={{ mt: 1 }}
                  >
                    <ListItemIcon className="ListIcon">
                      <ManageSearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItemText>
        </List>
      </List>
    </div>
  );
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <Box>
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              backgroundColor: "#FAFAFA",
            }}
          >
            <Toolbar sx={{ paddingRight: "0px" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  color: "#1A237E",
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: "cursive",
                }}
              >
                Silicon Techlab Pvt Limited
                {/* {profileData.organisationName} */}
              </Typography>

              <Box sx={{ marginLeft: "auto" }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="error"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon color="primary" />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="primary"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <Tooltip title="Account Settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBQ52n5dbAw8HmzKX6FbnrmK_3MXSSWJmog&usqp=CAU"
                      sx={{ bgcolor: "#C5CAE9 " }}
                      // alt={profileData.first_name+' '+profileData.last_name}
                      // src={profileData.profile_image_url}
                    ></Avatar>
                    <Typography
                      variant="body1"
                      noWrap
                      color="white"
                      sx={{ marginLeft: "5px" }}
                    >
                      {/* {profileData.first_name+' '+profileData.last_name} */}
                    </Typography>
                    <br />
                    <ArrowDropDownIcon
                      fontSize="medium"
                      sx={{ color: "#fff" }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ManageAccountsIcon fontSize="small" />
                  </ListItemIcon>
                  Change Your Password
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => navigate("/logout")}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

AppBarDrawer.propTypes = {
  window: PropTypes.func,
};

export default AppBarDrawer;
