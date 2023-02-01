import React, { useState } from "react";
import NewAppBar from "./NewAppBar";
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
  Paper,
  Toolbar,
  Typography,
  TextField,
  Tooltip,
} from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
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
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

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
  { label: "All" },
  { label: "MCQ" },
  { label: "MCQ & SAQ" },
  { label: "LAQ" },
];
//For Fetch select
const FetchType = [{ label: "Fetched" }, { label: "Not Fetched" }];

const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#EEEEEE",
  "&:hover": {
    backgroundColor: "#E3F2FD",
  },
  marginLeft: 0,
  width: "100%",
  height: "45px",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontWeight: "regular",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const baseURL =
  " https://demoexam.edusols.com/api/tassess/sync_quiz.php?oper=EXAM_LIST&org_code=STLIND&centre_code=STLIND&start_date=2022-01-01&end_date=2023-01-23&question_type=MCQ";

const Dashboard = () => {
  //States
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [btnState, setBtnState] = React.useState(false);
  // const [progress, setProgress] = React.useState(10);
  const [progressBar, setProgressBar] = React.useState(false);
  const [data, setData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);
  const [progress, setProgress] = useState(0);
  const [pending, setPending] = useState(true);

  const loadData = async () => {
    try {
      const response = await axios.get(baseURL);
      const result = response.data;
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
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

  const customStyles = {
    rows: {
      style: {
        minHeight: "40px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#0D47A1",
        color: "white",
        minHeight: "35px",
        fontSize: "15px",
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
      name: "Sl No",
      cell: (row, index) => index + 1,
      width: "5%",
    },
    {
      name: "Quiz Name",
      selector: (row) => row.quiz_name,
      sortable: "true",
      width: "25%",
    },
    {
      name: "Quiz Open Time",
      selector: (row) => row.quiz_open_date_time,
      sortable: "true",
    },
    {
      name: "Quiz Close Time",
      selector: (row) => row.quiz_close_date_time,
      sortable: "true",
    },
    {
      name: "Exam Status",
      selector: (row) => (
        <Chip
          label="fetched"
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
          label="fetched"
          variant="outlined"
          size="medium"
          color="warning"
        />
      ),
    },
    {
      name: "Actions ",
      cell: (row) => (
        <Button
          variant="contained"
          size="small"
          color="warning"
          onClick={handleClickOpen}
        >
          Fetch
        </Button>
      ),
    },
  ];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const result = data.filter((quiz) => {
      return quiz.quiz_name.toLowerCase().match(search.toLowerCase());
    });
    // console.log(result);
    setFiltereddata(result);
  }, [search]);

  return (
    <>
      <Helmet>
        <title>Sync</title>
      </Helmet>
      <Box
        sx={{ display: "flex", backgroundColor: "#E0E0E0", height: "170vh" }}
      >
        <CssBaseline />
        <NewAppBar />
        <Box
          component="main"
          sx={{
            flexGrow: 2,
            p: 3,
            width: { sm: `calc(200% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                mt: 3,
                width: "100%",
                height: 120,
              },
            }}
          >
            <Paper elevation={24}>
              <Card>
                <CardContent sx={{ margin: "15px" }}>
                  <Grid container justifyContent="center" spacing={7}>
                    <Grid item lg={2}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={QuestionType}
                        sx={{ width: 230 }}
                        data={data}
                        renderInput={(params) => (
                          <TextField {...params} placeholder="Question Type"   label="All"/>
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
                          <TextField {...params} placeholder="Select Type"  label="Not Fetched " />
                        )}
                      />
                    </Grid>
                    <Grid item lg={2}>
                      <Box sx={{ textAlign: "center" }}>
                        <Button
                          fullWidth
                          size="large"
                          variant="contained"
                          onClick={showResults}
                          sx={{ backgroundColor: "#2979FF", color: "white" }}
                          startIcon={<InsertDriveFileIcon />}
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
                        {/* <div > */}
                        <Paper elevation={0}>
                          {" "}
                          <DataTable
                            title="Quiz Data"
                            customStyles={customStyles}
                            columns={columns}
                            data={filtereddata}
                            fixedHeaderScrollHeight="500px"
                            selectableRows
                            selectableRowsHighlight
                            highlightOnHover
                            subHeader
                            // progressPending={pending}
                            // progressComponent={<CircularProgress color='inherit' />}
                            pagination
                            subHeaderComponent={
                              <Search>
                                <SearchIconWrapper>
                                  <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                  placeholder="Search here"
                                  value={search}
                                  onChange={(e) => setSearch(e.target.value)}
                                />
                              </Search>
                            }
                          />
                        </Paper>

                        {/* </div> */}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Paper>
          </Box>
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
