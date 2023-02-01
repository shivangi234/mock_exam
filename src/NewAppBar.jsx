import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GradingIcon from "@mui/icons-material/Grading";
import SyncIcon from "@mui/icons-material/Sync";
import UpdateIcon from "@mui/icons-material/Update";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import {
  Grid,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Grow,Badge,Tooltip,Avatar,Menu,MenuItem,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";       
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Logout from "@mui/icons-material/Logout";

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

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    // backgroundColor:theme.backgroundColor("black"),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const NewAppBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();


 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <ThemeProvider theme={darkModeTheme}>
        <Box sx={{ display: "flex" ,}}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{backgroundColor:"#01579B",color:"white"}}>
            <Toolbar>
              <IconButton
                size="large"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 0.5, ...(open && { display: "none" }) }}
              >
                <MenuIcon sx={{ height: "40px", width: "35px" }} />
              </IconButton>
              <Typography variant="h5" noWrap fontWeight="bold" sx={{color:"",}}
              >
                    Silicon Techlab Pvt Ltd.
              </Typography>
              <Box sx={{ marginLeft: "auto" }}>
                {/* <IconButton
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
                </IconButton> */}
                <Tooltip title="Account Settings">
                  <IconButton
                    // onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png"
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
       
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 1,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <img
                src={"https://media.glassdoor.com/sqll/503743/silicon-techlab-squarelogo-1643983959442.png"}
                alt="Logo"
                style={{ height: "65px", width: "100%" }}
              />
              <IconButton onClick={handleDrawerClose} sx={{color:"blue"}}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
        <ListItem
          button
          key="dashboard"
          component={Link}
          to="/dashboard"
        //   selected={location.pathname === "/dashboard"}
          className="ListItem"
        >
          <ListItemIcon className="ListIcon">
            <DashboardIcon color="primary" />
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
                  <Grid item lg={2}>
                <ExpandMoreIcon/>
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
                    // selected={location.pathname === "/sync"}
                    className="ListItem"
                  >
                    <ListItemIcon className="ListIcon">
                      <SyncIcon  color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Sync" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    key="update"
                    component={Link}
                    to="/update"
                    // selected={location.pathname === "/update"}
                    className="ListItem"
                    sx={{ mt: 1 }}
                  >
                    <ListItemIcon className="ListIcon">
                      <UpdateIcon  color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Update" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    key="sync"
                    component={Link}
                    to="/manage"
                    // selected={location.pathname === "/manage"}
                    className="ListItem"
                    sx={{ mt: 1 }}
                  >
                    <ListItemIcon className="ListIcon">
                      <ManageSearchIcon  color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Manage" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItemText>
        </List>
      </List>
          </Drawer>

          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0 0" }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Main open={open}>
              <DrawerHeader />
            </Main>
          </Grow>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default NewAppBar;
