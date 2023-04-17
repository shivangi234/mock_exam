import React, { useState } from "react";
import AppBarDrawer from "../Components/AppBarDrawer";
import SwipeableViews from "react-swipeable-views";
import {
  Autocomplete,
  AppBar,
  Button,
  Box,
  Card,
  CardContent,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  TextField,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import SwipeableViews from "react-swipeable-views";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";

//Icons
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

//select functions
//Subject Functions
const Subjects = [
  { label: "Aptitude" },
  { label: "Reasoning" },
  { label: "English" },
];
//Position Functions
const Position = [
  { label: "FRESHER" },
  { label: "SOFTWARE DEVELOPER" },
  { label: "INDUSTRY TRAINING" },
];
//Month Functions
const Month = [
  { label: "2019-20" },
  { label: "2020-21" },
  { label: "2021-22" },
  { label: "2022-23" },
];

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const drawerWidth = 240;

const Dashboard = () => {
  //States
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  //Date Range States
  const [item, setItem] = React.useState([null, null]);
  //Show ResultCard function
  const [showDataCard, setShowDataCard] = useState(false);

  //Tab function
  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  //Showdatatable
  const showResultCard = () => {
    setShowDataCard(true);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "rgba(0,0,0,0.1)",
          height: "100vh",
        }}
      >
        <CssBaseline />

        <AppBarDrawer />
        <Box
          component="main"
          sx={{
            flexGrow: 2,
            p: 3,
            width: { sm: `calc(200% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          {/* AppBar */}
          {/* <Box sx={{ margin: "2px", mb: 1 }}>
            <Grid container justifyContent="center">
              <Grid item lg={2}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  sx={{ ml: 2 }}
                >
                  Manage
                </Typography>
              </Grid>
              <Grid item lg={10}></Grid>
            </Grid>
          </Box> */}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                mt: 3,
                width: "100%",
                height: 320,
              },
            }}
          >
            <Paper elevation={24}>
              <Card>
                <CardContent>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="MCQ"
                      {...a11yProps(0)}
                      sx={{ fontWeight: "bold" }}
                    />
                    <Tab
                      label="LAQ"
                      {...a11yProps(1)}
                      sx={{ fontWeight: "bold" }}
                    />
                    <Tab
                      label="MCQ & SAQ"
                      {...a11yProps(2)}
                      sx={{ fontWeight: "bold" }}
                    />
                  </Tabs>

                  {/* MCQ Tab */}
                  <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                    <TabPanel value={value} index={0}  dir={theme.direction}>
                      <Box sx={{ height: "200px" }}>
                        <Grid container spacing={0}>
                          <Grid item lg={4}>
                            <Box>
                              <Typography variant="h7" fontWeight="bold">
                                Subject:
                                <Autocomplete
                                  disablePortal
                                  id="combo-box-demo"
                                  options={Subjects}
                                  sx={{ width: 300 }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Select subject"
                                    />
                                  )}
                                />
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item lg={4}>
                            <Box>
                              <Typography variant="h7" fontWeight="bold">
                                Position:
                                <Autocomplete
                                  disablePortal
                                  id="combo-box-demo"
                                  options={Position}
                                  sx={{ width: 300 }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Select subject"
                                    />
                                  )}
                                />
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item lg={4}>
                            <Box>
                              <Typography variant="h7" fontWeight="bold">
                                Month/Year:
                                <Autocomplete
                                  disablePortal
                                  id="combo-box-demo"
                                  options={Month}
                                  sx={{ width: 300 }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Select Month/Year"
                                    />
                                  )}
                                />
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid container sx={{ mt: 3 }}>
                            <Grid item lg={4}>
                              <FormControl>
                                <Box>
                                  <Typography variant="h7" fontWeight="bold">
                                    Start Date:
                                    <br />
                                    <TextField
                                      onChange={handleChange}
                                      id="start_date"
                                      name="start_date"
                                      // value={quizdata.start_date}
                                      // label="Start Date"
                                      type="date"
                                      // defaultValue="2017-05-24"
                                      sx={{ width: 300 }}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                    />
                                  </Typography>
                                </Box>
                              </FormControl>
                            </Grid>

                            <Grid item lg={4}>
                              <FormControl>
                                <Box>
                                  <Typography variant="h7" fontWeight="bold">
                                    End Date:
                                    <br />
                                    <TextField
                                      name="end_date"
                                      onChange={handleChange}
                                      id="end_date"
                                      // value={quizdata.end_date}
                                      // label="End Date"
                                      type="date"
                                      // defaultValue="2017-05-24"
                                      sx={{ width: 300 }}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                    />
                                  </Typography>
                                </Box>
                              </FormControl>
                            </Grid>
                            <Grid item lg={3}>
                              <Box sx={{ mt: 3 }}>
                                <Button
                                  size="large"
                                  variant="contained"
                                  onClick={showResultCard}
                                  startIcon={<InsertDriveFileIcon />}
                                  sx={{
                                    backgroundColor: "#2979FF",
                                    padding: "8px 121px",
                                    color: "white",
                                  }}
                                >
                                  View
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </TabPanel>
                  {/* LAQ Tab */}
                  <TabPanel value={value} index={1}  dir={theme.direction}>
                    <Box sx={{ height: "200px" }}>
                      <Grid container spacing={0}>
                        <Grid item lg={4}>
                          <Box>
                            <Typography variant="h7" fontWeight="bold">
                              LAQ Subject:
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Subjects}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select subject"
                                  />
                                )}
                              />
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item lg={4}>
                          <Box>
                            <Typography variant="h7" fontWeight="bold">
                              Position:
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Position}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select subject"
                                  />
                                )}
                              />
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item lg={4}>
                          <Box>
                            <Typography variant="h7" fontWeight="bold">
                              Month/Year:
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Month}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select Month/Year"
                                  />
                                )}
                              />
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid container sx={{ mt: 3 }}>
                          <Grid item lg={4}>
                            <FormControl>
                              <Box>
                                <Typography variant="h7" fontWeight="bold">
                                  Start Date:
                                  <br />
                                  <TextField
                                    onChange={handleChange}
                                    id="start_date"
                                    name="start_date"
                                    // value={quizdata.start_date}
                                    // label="Start Date"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    sx={{ width: 300 }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                </Typography>
                              </Box>
                            </FormControl>
                          </Grid>

                          <Grid item lg={4}>
                            <FormControl>
                              <Box>
                                <Typography variant="h7" fontWeight="bold">
                                  End Date:
                                  <br />
                                  <TextField
                                    name="end_date"
                                    onChange={handleChange}
                                    id="end_date"
                                    // value={quizdata.end_date}
                                    // label="End Date"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    sx={{ width: 300 }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                </Typography>
                              </Box>
                            </FormControl>
                          </Grid>
                          <Grid item lg={3}>
                            <Box sx={{ mt: 3 }}>
                              <Button
                                size="large"
                                variant="contained"
                                onClick={showResultCard}
                                startIcon={<InsertDriveFileIcon />}
                                sx={{
                                  backgroundColor: "#2979FF",
                                  padding: "8px 121px",
                                  color: "white",
                                }}
                              >
                                View
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </TabPanel>
                  {/* MCQ & SAQ Tab */}
                  <TabPanel value={value} index={2}  dir={theme.direction}>
                    <Box sx={{ height: "200px" }}>
                      <Grid container spacing={0}>
                        <Grid item lg={4}>
                          <Box>
                            <Typography variant="h7" fontWeight="bold">
                              MCQ + SAQ Subject:
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Subjects}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select subject"
                                  />
                                )}
                              />
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item lg={4}>
                          <Box>
                            <Typography variant="h7" fontWeight="bold">
                              Position:
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Position}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select subject"
                                  />
                                )}
                              />
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item lg={4}>
                          <Box>
                            <Typography variant="h7" fontWeight="bold">
                              Month/Year:
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Month}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Select Month/Year"
                                  />
                                )}
                              />
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid container sx={{ mt: 3 }}>
                          <Grid item lg={4}>
                            <FormControl>
                              <Box>
                                <Typography variant="h7" fontWeight="bold">
                                  Start Date:
                                  <br />
                                  <TextField
                                    onChange={handleChange}
                                    id="start_date"
                                    name="start_date"
                                    // value={quizdata.start_date}
                                    // label="Start Date"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    sx={{ width: 300 }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                </Typography>
                              </Box>
                            </FormControl>
                          </Grid>

                          <Grid item lg={4}>
                            <FormControl>
                              <Box>
                                <Typography variant="h7" fontWeight="bold">
                                  End Date:
                                  <br />
                                  <TextField
                                    name="end_date"
                                    onChange={handleChange}
                                    id="end_date"
                                    // value={quizdata.end_date}
                                    // label="End Date"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    sx={{ width: 300 }}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />
                                </Typography>
                              </Box>
                            </FormControl>
                          </Grid>
                          <Grid item lg={3}>
                            <Box sx={{ mt: 3 }}>
                              <Button
                                size="large"
                                variant="contained"
                                onClick={showResultCard}
                                startIcon={<InsertDriveFileIcon />}
                                sx={{
                                  backgroundColor: "#2979FF",
                                  padding: "8px 121px",
                                  color: "white",
                                }}
                              >
                                View
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </TabPanel>
                  </SwipeableViews>

                </CardContent>
              </Card>
            </Paper>
          </Box>

          {/* The  Card main Content */}
          {showDataCard ? (
                    <>
                      <Card sx={{ mt: 3 }}>
                        <Typography
                          sx={{
                            background: "#A5D6A7",
                            height: "40px",
                            padding: "10px",
                            color: "black",
                          }}
                        >
                          1) demo_09_09_22 | 09-Sep-2022 10:00 AM TO 11-Sep-2022
                          12:00 AM
                        </Typography>
                        <CardContent sx={{ margin: "5px" }}>
                          <Typography>
                            <b>SUBJECTS:</b>15AC5T [5/5]
                          </Typography>
                          <Typography>
                            <b>EXAMINEE:</b> 5
                          </Typography>
                          <Typography>
                            <b>STATUS:</b>Published
                          </Typography>
                          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                            <Button
                              color="success"
                              variant="contained"
                              startIcon={<ThumbUpAltIcon />}
                            >
                              Preview Result
                            </Button>
                            <Button
                              color="warning"
                              variant="contained"
                              startIcon={<GroupsIcon />}
                            >
                              Manage Room
                            </Button>
                            <Button
                              variant="contained"
                              startIcon={<ControlCameraIcon />}
                              sx={{
                                backgroundColor: "#2979FF",
                                color: "white",
                              }}
                            >
                              Control Center
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                      <Card sx={{ mt: 3 }}>
                        <Typography
                          sx={{
                            background: "#A5D6A7",
                            height: "40px",
                            padding: "10px",
                            color: "black",
                          }}
                        >
                          2) demo_23_09_22 | 09-Sep-2022 10:00 AM TO 11-Sep-2022
                          10:00 AM
                        </Typography>
                        <CardContent sx={{ margin: "5px" }}>
                          <Typography>
                            <b>SUBJECTS: </b>15AC5T [5/5]
                          </Typography>
                          <Typography>
                            <b>EXAMINEE:</b> 5
                          </Typography>
                          <Typography>
                            <b>STATUS:</b> Published
                          </Typography>
                          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                            <Button
                              color="success"
                              variant="contained"
                              startIcon={<ThumbUpAltIcon />}
                            >
                              Preview Result
                            </Button>
                            <Button
                              color="warning"
                              variant="contained"
                              startIcon={<GroupsIcon />}
                            >
                              Manage Room
                            </Button>
                            <Button
                              variant="contained"
                              startIcon={<ControlCameraIcon />}
                              sx={{
                                backgroundColor: "#2979FF",
                                color: "white",
                              }}
                            >
                              Control Center
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    ""
                  )}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
