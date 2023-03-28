import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Tooltip, IconButton, Avatar, Menu, MenuItem, Divider, Grid, Accordion, AccordionSummary, Typography, AccordionDetails, Grow, Toolbar, List, ListItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, Link } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GradingIcon from "@mui/icons-material/Grading";
import SyncIcon from "@mui/icons-material/Sync";
import UpdateIcon from "@mui/icons-material/Update";
import Logout from '@mui/icons-material/Logout';
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: "#01579B" }} >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Silicon Techlab Pvt Ltd.
                    </Typography>

                    <Box sx={{ marginLeft: 'auto' }}>
                        <Tooltip title="Account Settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar
                                    sx={{ backgroundColor: "#E91E63" }}
                                >
                                </Avatar>
                                <ArrowDropDownIcon fontSize="medium" sx={{ color: '#fff' }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open2}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
                        <MenuItem onClick={() => navigate('/logout')}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <img
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURL9ljlnYY_BEe2mkIOO-41WoR-3LOV-Nu0J22DxDTQ&s"}
                        alt="Logo"
                        style={{ height: "65px", width: "100%" }}
                    />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />


                <List>
                    <ListItem
                        
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

                    <List>
                        <ListItemText  >
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid container>
                                        <Grid item lg={4}>
                                            <GradingIcon color='primary' />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <Typography>Test</Typography>
                                        </Grid>
                                        <Grid item lg={2}>
                                            {/* <ExpandMoreIcon /> */}
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <List  >
                                        <ListItem
                                            key="sync"
                                            component={Link}
                                            to="/sync"
                                            // selected={location.pathname === "/sync"}
                                            className="ListItem"
                                        >
                                            <ListItemIcon className="ListIcon">
                                                <SyncIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText primary="Sync" />
                                        </ListItem>
                                        <ListItem
                                            
                                            key="update"
                                            component={Link}
                                            to="/update"
                                            // selected={location.pathname === "/update"}
                                            className="ListItem"
                                            sx={{ mt: 1 }}
                                        >
                                            <ListItemIcon className="ListIcon">
                                                <UpdateIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText primary="Update" />
                                        </ListItem>
                                        <ListItem
                                            
                                            key="manage"
                                            component={Link}
                                            to="/manage"
                                            // selected={location.pathname === "/manage"}
                                            className="ListItem"
                                            sx={{ mt: 1 }}
                                        >
                                            <ListItemIcon className="ListIcon">
                                                <ManageSearchIcon color="primary" />
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
                <Main open={open}  >
                    <DrawerHeader />


                </Main>
            </Grow>
        </Box>
    );
}
