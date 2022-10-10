import React, { useState } from "react";
import AppBarDrawer from "./AppBarDrawer";
import {
  Autocomplete,
  Button,
  Box,
  Card,
  CardContent,
  CssBaseline,
  Chip,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Tooltip,
} from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

import axios from "axios";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Helmet } from "react-helmet";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import SyncIcon from "@mui/icons-material/Sync";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
//select functions
//For Question select
const QuestionType = [
  { label: "MCQ" },
  { label: "MCQ & SAQ" },
  { label: "LAQ" },
];
//For Fetch select
const FetchType = [{ label: "Fetched" }, { label: "Not Fetched" }];

const drawerWidth = 240;

const Dashboard = () => {
  //States
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [btnState, setBtnState] = React.useState(false);
  const [progress, setProgress] = React.useState(10);
  const [progressBar, setProgressBar] = React.useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Button Click State
  const [showDataTable, setShowDataTable] = useState(false);

  const [value, setValue] = React.useState([null, null]);

  //Button Click Function Showdatatable
  const showResults = () => {
    setShowDataTable(true);
  };
  //showing progressbar
  const showProgress = () => {
    setBtnState(true);
    setProgressBar(true);
  };

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setfilteredCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "70px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#0D47A1",
        color: "white",
        minHeight: "70px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  const columns = [
    {
      name: "Serial No",
      selector: (row) => row.name,
      sortable: "true",
      maxWidth: "20px",
    },
    {
      name: "Test  Name",
      selector: (row) => row.name,
      sortable: "true",
      maxWidth: "350px",
    },
    {
      name: "Open Date",
      selector: (row) => row.nativeName,
    },
    {
      name: "Close Date",
      selector: (row) => row.capital,
    },
    {
      name: "Exam Status",
      selector: (row) => (
        <Chip
          label="Fetched"
          variant="outlined"
          size="medium"
          color="success"
        />
      ),
    },
    {
      name: "Photo Status",
      selector: (row) => (
        <Chip
          label="Not Fetched"
          variant="outlined"
          size="medium"
          color="error"
        />
      ),
    },

    {
      name: "Actions",
      cell: (row) => (
        <Button
          variant="contained"
          size="medium"
          color="warning"
          onClick={handleClickOpen}
        >
          Fetch
        </Button>
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setfilteredCountries(result);
  }, [search]);
  return (
    <>
      <Helmet>
        <title>Sync</title>
      </Helmet>
      <Box sx={{ display: "flex" }}>
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
          <Box sx={{ margin: "2px" }}>
            <Grid container justifyContent="center">
              <Grid item lg={2}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  sx={{ ml: 2 }}
                >
                  Sync
                </Typography>
              </Grid>
              <Grid item lg={8}></Grid>
              <Grid item lg={1}>
                <Typography variant="h7">
                  <HomeIcon
                    sx={{ mb: -0.6, fontSize: "20px", padding: "2px" }}
                  />
                  Home
                </Typography>
              </Grid>
              <Grid item lg={1}>
                <Typography variant="h7">
                  <SyncIcon
                    sx={{ mb: -0.6, fontSize: "20px", padding: "2px" }}
                  />
                  Sync
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <Card>
            <CardContent sx={{ margin: "15px" }}>
              <Grid container justifyContent="center" spacing={7}>
                <Grid item lg={2}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={QuestionType}
                    sx={{ width: 230 }}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Question Type" />
                    )}
                  />
                </Grid>
                <Grid item lg={5}>
                  <Box sx={{ ml: 4 }}>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      localeText={{ start: "Start Date", end: "End Date" }}
                    >
                      <MobileDateRangePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField {...startProps} />
                            <Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Box>
                            <TextField {...endProps} />
                          </React.Fragment>
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item lg={3} sx={{ ml: -4 }}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={FetchType}
                    sx={{ width: 230 }}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Select Type" />
                    )}
                  />
                </Grid>
                <Grid item lg={2}>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={showResults}
                      sx={{ backgroundColor: "#2979FF", color: "white" }}
                      endIcon={<InsertDriveFileIcon />}
                    >
                      View
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {showDataTable ? (
            <Grid container sx={{ mt: 1 }} justifyContent="center">
              <Grid item lg={12}>
                <Card>
                  <CardContent>
                    <div>
                      <DataTable
                        customStyles={customStyles}
                        columns={columns}
                        data={countries}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="500px"
                        selectableRows
                        selectableRowsHighlight
                        highlightOnHover
                        // actions ={<Button variant="contained">Views</Button>}
                        subHeader
                        // subHeaderAlign="left"
                        subHeaderComponent={
                          <input
                            type="text"
                            placeholder="Search here"
                            style={{ width: "200px" }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Box>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Box sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleClose}
            >
              close
            </Button>
          </Box>
          <Card sx={{ mt: 1 }}>
            <Typography
              sx={{
                background: "#0D47A1",
                height: "40px",
                padding: "10px",
                color: "white",
              }}
            >
              Exam Fetch
            </Typography>

            <CardContent sx={{ margin: "5px" }}>
              <Grid container>
                <Grid item lg={10}>
                  <Typography variant="h7" component="div" float="left">
                    BS Abdur Rehman Unversity Engineering Entrance Examination
                    (BSAUEEE 2012)
                  </Typography>
                </Grid>
                <Grid item lg={2}>
                  <Tooltip title="Exam Fetched On: 2022-04-19 15:21:59">
                    <IconButton>
                      <Button color="success" variant="contained" disabled>
                        Fetch
                      </Button>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ mt: 3 }}>
            <Typography
              sx={{
                background: "#0D47A1",
                height: "40px",
                padding: "10px",
                color: "white",
              }}
            >
              Photo Fetch
            </Typography>
            <CardContent sx={{ margin: "5px" }}>
              <Grid container>
                <Grid item lg={10}>
                  <Typography variant="h7" component="div" float="left">
                    BS Abdur Rehman Unversity Engineering Entrance Examination
                    (BSAUEEE 2012)
                  </Typography>
                </Grid>
                <Grid item lg={2}>
                  {btnState ? (
                    <Button color="success" variant="contained" disabled>
                      Fetch
                    </Button>
                  ) : (
                    <Button
                      color="success"
                      variant="contained"
                      onClick={showProgress}
                    >
                      Fetch
                    </Button>
                  )}
                </Grid>
              </Grid>
              {progressBar ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
