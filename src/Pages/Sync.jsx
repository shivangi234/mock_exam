import React, { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  CssBaseline,
  Chip,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  TextField,
  ButtonGroup, Modal, FormControl, InputLabel, MenuItem,
  Select,InputAdornment,OutlinedInput, Divider
} from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Helmet } from "react-helmet";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import moment from "moment/moment";
import AppBarDrawer from "../Components/AppBarDrawer";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import dayjs from 'dayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//Icons
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import NoteIcon from '@mui/icons-material/Note';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import DescriptionIcon from '@mui/icons-material/Description';
import TelegramIcon from '@mui/icons-material/Telegram';
import LockIcon from '@mui/icons-material/Lock';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
//MODAL Styles
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #616161',
  boxShadow: 24,
  p: 4,
};


//ProgressBar Function
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

const drawerWidth = 240;

//Search Datatable Style
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



const Dashboard = () => {
  const [valuesPassword, setValuesPassword] = useState({
    pass: "",
    showPass: false
  });

  const handleChangePassword = (e) => {
    setValuesPassword({
      ...valuesPassword,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordHide = () => {
    setValuesPassword({
      ...valuesPassword,
      showPass: !valuesPassword.showPass
    });
  };
  //States For Quiz
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtereddata, setFiltereddata] = useState([]);
  // const [pending, setPending] = React.useState(true);
  // const [rows, setRows] = React.useState([]);
  const [quizdata, setQuizdata] = useState({ org_code: "STLIND", centre_code: "STLIND", question_type: "MCQ", quiz_status: "ALL", start_date: "2022-01-01", end_date: "2022-08-29",quiz_code:"1F5F8E4F-BC70-EAE1-CEF6-6F6D3DDF66DC" })

  const  [modelData,setModelData] =  useState([]);
  const question_type = quizdata.question_type;
  const start_date = quizdata.start_date;
  const end_date = quizdata.end_date;
  const quiz_status =quizdata.quiz_status;
  const quiz_code =quizdata.quiz_code;
  // console.log(quiz_code)
  const baseURL = `https://demoexam.edusols.com/api/tassess/sync_quiz.php? 
  oper=EXAM_LIST&org_code=STLIND&centre_code=STLIND&start_date=${start_date}&end_date=${end_date}&question_type=${question_type}&quiz_status=${quiz_status}&quiz_code=${quiz_code}`;


  //States for Modals
  const [btnState, setBtnState] = React.useState(false);
  const [progressBar, setProgressBar] = React.useState(false);
  const [btnState2, setBtnState2] = React.useState(false);
  const [progressBar2, setProgressBar2] = React.useState(false);
  const [btnState3, setBtnState3] = React.useState(false);
  const [progressBar3, setProgressBar3] = React.useState(false);
  const [progress, setProgress] = useState(0);
  const [authorization,setAuthorization]=useState(0);
  const[values,setValues]=useState({amount: '',password: '',weight: '', weightRange: '',showPassword: false,});

  //States for Fetch

  const [open, setOpen] = React.useState(false);
  // const handleOpen = (row) =>
  // { 
  //  alert(row.quiz_code)
  //   setOpen(true)
  // };
  const handleClose = () => setOpen(false);

  //States for Update
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  //States for Update Attendance
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  //States for update result
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  //States for fetching exam name
  const [fetchQname,setFetchQname] = React.useState("");
  
  
  //States for api binding
  //const [loginFormData, setLoginFormData] = useState({ userName: "alok", password: "Ab@12345", orgCode: "STLIND"});


  //Methods


  const handleChange = (e) => {
    setQuizdata({ ...quizdata, [e.target.name]: e.target.value });

  }

  //for question syn password submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
    });
  };

  //API Call

  const loadData = async () => {
    try {
      const response = await axios.get(baseURL);
      const result = response.data;
      //console.log(result);
      setData(result.data);
      setShowDataTable(true)
    } catch (error) {
      console.log(error);
    }
  };

  //for Api binding
  const showDetails = (quiz_id) => {
    fetch (`http://demotqems.silicontechlab.com/api/assessment/common.php?oper=EXAMINFO&quiz_id=${quiz_id}`)
    .then(response => response.json())
    .then (res => setModelData(res))
    // console.log(modelData);
    setOpen(true)
  }

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


  //Button Click State
  const [showDataTable, setShowDataTable] = useState(false);
  const [value, setValue] = React.useState([null, null]);

  //Button Click Function Showdatatable
  const showResults = () => {
    setShowDataTable(true);
  };
  //showing progressbar Exam
  const showProgress = () => {
    // setBtnState(true);
    setProgressBar(true);
   console.log(data)
 
  };
  //showing progressbar Photo
    const showProgress2 = () => {
      // setBtnState(true);
      setProgressBar2(true);
    };

  //Result Update
        const showProgress3 = () => {
          setBtnState3(true);
          setProgressBar3(true);
        };
  //Authorization
    const syncPassword =()=>{
      setBtnState(true);
      setAuthorization(true);
    }
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  //Datable row and columns customStyles

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
        fontSize: "18px",
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
      cell: (row) => row.quiz_id,
      width: "4%",
    },
    {
      name: "Quiz Name",
      selector: (row) => row.quiz_name,
      sortable: "true",
      width: "35%",
    },
    {
      name: "Quiz Open Date",
      selector: (row) => moment(row.quiz_open_date_time).format('DD-MMM-YYYY h:mm A'),
      sortable: "true",
    },
    {
      name: "Quiz Close Date",
      selector: (row) => moment(row.quiz_close_date_time).format('DD-MMM-YYYY h:mm A'),
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
      name: "Action Buttons ",
      cell: (row) => (
      <>
      <Button
        variant="contained"
        size="small"
        color="warning"
        // onClick={showDetails(row.quiz_id)}
      // onClick={handleOpen}
      // onClick={() => handleOpen('quiz_code', this.quizCode.setOpen)}
        onClick={() =>
           {
            // alert(row.quiz_name);
            setOpen(true);
            setFetchQname(row.quiz_name);
          }}

      >
        {/* <DownloadForOfflineIcon/> */}
        Fetch
      </Button>&nbsp;&nbsp;
        <Button
          variant="contained"
          size="small"
          color="info"
          // onClick={handleOpen2}
          onClick={() =>
            {
             // alert(row.quiz_name);
             setOpen2(true);
             setFetchQname(row.quiz_name);
           }}
        >
          {/* <DriveFolderUploadRoundedIcon/> */}
          Update
        </Button>
        </>
      ),
    },
  ];

  useEffect(() => { loadData(); }, []);

  useEffect(() => {
    const result = data.filter((quiz) => { return quiz.quiz_name.toLowerCase().match(search.toLowerCase()); });
    // console.log(result);
    setFiltereddata(result);
  }, [search]);

  return (
    <>
      <Helmet> <title>Total Assesment | Sync</title></Helmet>
      <Box sx={{ display: "flex", height: "130vh", backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <CssBaseline />
        <AppBarDrawer />


        <Box component="main" sx={{ flexGrow: 2, p: 3, width: { sm: `calc(200% - ${drawerWidth}px)` }, }}>
          <Toolbar />
          <Box sx={{ margin: "2px", mb: 1 }}>
            <Grid container justifyContent="center">
              <Grid item lg={2}>
                <Typography variant="h5" fontWeight="bold" component="div" sx={{ ml: 1, color: "#1A237E" }} > Sync </Typography>
              </Grid>
              <Grid item lg={10}></Grid>
            </Grid>
          </Box>


          <Box sx={{ display: "flex", flexWrap: "wrap", "& > :not(style)": { m: 1, mt: 3, width: "100%", height: 120, }, }}>
            <Paper elevation={18}>
              <Card>
                <CardContent sx={{ margin: "15px" }}>
                  <Grid container spacing={8}>

                    <Grid item lg={3}>
                      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="question_type">Exam Type</InputLabel>
                        <Select fullWidth labelId="question_type" id="question_type" label="QuestionType" onChange={handleChange}
                          name="question_type" value={quizdata.question_type}>
                          <MenuItem value="ALL">All</MenuItem>
                          <MenuItem value="MCQ">MCQ</MenuItem>
                          <MenuItem value="LAQ">LAQ</MenuItem>
                          <MenuItem value="MCQ + LAQ">MCQ + LAQ</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item lg={2}>
                      <FormControl fullWidth sx={{ m: 1, minWidth: 150 }}>
                        <TextField
                          onChange={handleChange}
                          id="start_date"
                          name="start_date"
                          value={quizdata.start_date}
                          label="Start Date"
                          type="date"
                          defaultValue="2017-05-24"
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />

                      </FormControl>
                    </Grid>

                    <Grid item lg={2}>
                      <FormControl fullWidth sx={{ m: 1, minWidth: 150 }}>
                        <TextField
                          name="end_date"
                          onChange={handleChange}
                          id="end_date"
                          value={quizdata.end_date}
                          label="End Date"
                          type="date"
                          defaultValue="2017-05-24"
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />

                      </FormControl>
                    </Grid>

                    <Grid item lg={3}>
                      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="quiz-status">Status</InputLabel>
                        <Select fullWidth labelId="quiz-status" name="quiz_status" id="quiz_status" label="Status" value={quizdata.quiz_status}
                          onChange={handleChange}>
                          <MenuItem value="ALL" >All</MenuItem>
                          <MenuItem value="FETCHED" >Fetched</MenuItem>
                          <MenuItem value="NOT FETCHED" >Not Fetched</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item lg={2} sx={{ mt: 2 }}>
                      <Button variant="contained" fullWidth onClick={loadData}>View</Button>
                    </Grid>
                  </Grid>

                </CardContent>
              </Card>

              {showDataTable ? (
                <Paper elevation={8}>
                  <Grid container sx={{ mt: 2 }} justifyContent="center">
                    <Grid item lg={12} md={12} xs={12}>
                      <Card>
                        <Paper elevation={18}>
                          <CardContent>
                            <DataTable
                              customStyles={customStyles}
                              columns={columns}
                              data={data}
                              fixedHeaderScrollHeight="500px"
                              highlightOnHover
                              pagination
                              subHeader
                              // progressPending={pending}
                              progressComponent={<CircularProgress color="inherit" />}
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
                          </CardContent>
                        </Paper>
                      </Card>
                    </Grid>
                  </Grid>
                </Paper>

              ) : (
                ""
              )}
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Fetch Exam and Photo */}
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container>
            <Grid item lg={2}><Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "black" }}>
              Fetch Data
            </Typography></Grid>
            <Grid item lg={8}></Grid>

            <Grid item lg={2}>
              <Box sx={{ textAlign: "right" }}>
                <Button variant="contained" color="error" size="small" onClick={handleClose}><CloseIcon size="small" />
                  close
                </Button>
              </Box>
            </Grid>
          </Grid>
          <hr />
          <Card sx={{ mt: 3 }}>
            <Typography sx={{ background: "#0D47A1", height: "40px", padding: "10px", color: "white", }}>
            <Chip label="1" variant="contained" size="small" color="primary"/>&nbsp;
            Exam Fetch
            </Typography>
            <CardContent sx={{ margin: "5px" }}>
              <Grid container>
                <Grid item lg={10}>
                  <Typography variant="h7" component="div" float="left"><span style={{ fontWeight: "bold" }}>Exam Name:-</span>&nbsp;
                   {fetchQname}
                  </Typography>
                
                </Grid>
                <Grid item lg={2}>
                  {btnState ? (
                    <Button color="success" variant="contained" disabled><DownloadForOfflineIcon />&nbsp; Fetch Exam</Button>
                  ) : (
                    <Button color="success" variant="contained" onClick={syncPassword}><DownloadForOfflineIcon />&nbsp; Fetch
                      Exam</Button>
                  )}
                </Grid>
              </Grid>
                {authorization ?(

                  <Grid container justifyContent="center" spacing={2} >
                  <Grid item lg={3}>  
                    <TextField   placeholder=" Enter Exam Sync Password" variant="outlined"  type={valuesPassword.showPass ? "text" : "password"} size="small" float="center"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password"
                              edge="end"
                              onClick={togglePasswordHide}
                            >
                              {valuesPassword.showPass ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      onChange={handleChangePassword}  
                  fullWidth />
                    </Grid>
                  <Grid item lg={3}> <Button variant="contained" float="center" color="info" size="medium" fullWidth onClick={showProgress} >               <TelegramIcon/>&nbsp; 
                  Submit</Button> </Grid>
                  </Grid>
              ):(
                    
                ""
              )}

              {progressBar ? (
                <Box sx={{ width: "100%",mt:1 }}>
                  <LinearProgressWithLabel value={progress}  />
                </Box>
              ) : (
                ""
              )}
            </CardContent>
            <br />
          </Card>

          <Card sx={{ mt: 3 }}>
            <Typography sx={{ background: "#0D47A1", height: "40px", padding: "10px", color: "white", }}>
            <Chip label="2" variant="contained" size="small" color="primary"/>&nbsp;
             Photo Fetch
            </Typography>
            <CardContent sx={{ margin: "5px" }}>
              <Grid container>
                <Grid item lg={10}>
                  <Typography variant="h7" component="div" float="left"><span style={{ fontWeight: "bold" }}>Exam Name:-</span>&nbsp;
                    {fetchQname}
                  </Typography>
                </Grid>
          <br/>

                <Grid item lg={2}>
                  {btnState2 ? (
                    <Button color="success" variant="contained" disabled><DownloadForOfflineIcon />&nbsp; Fetch Photo</Button>
                  ) : (
                    <Button color="warning" variant="contained" onClick={showProgress2} ><DownloadForOfflineIcon />&nbsp;
                      Fetch Photo
                    </Button>
                  )}
                </Grid>
              </Grid>
              {progressBar2 ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </Box>
      </Modal>

      {/* Update  Result and Attendance  */}

      <Modal
        open={open2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item lg={2}><Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "black" }} >
              Update Data
            </Typography></Grid>
            <Grid item lg={8}></Grid>
            <Grid item lg={2}>
              <Box sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={handleClose2}
                ><CloseIcon size="small" />
                  close
                </Button>
              </Box>
            </Grid>
          </Grid>
          <hr />

          <Card sx={{ mt: 3 }}>
            <Typography
              sx={{
                background: "#0D47A1",
                height: "40px",
                padding: "10px",
                color: "white",
              }}
            >
            <Chip label="1" variant="contained" size="small" color="primary"/>&nbsp;
            Update  Result
            </Typography>
            <CardContent sx={{ margin: "5px" }}>
              <Grid container spacing={14}>
                <Grid item lg={9}>
                  <Typography variant="h7" component="div" float="left"><span style={{ fontWeight: "bold" }}>Exam Name:-</span>&nbsp;
                  {fetchQname}
                  </Typography>
                  <br/>
                  <Typography variant="h7">
                    <span style={{fontWeight: "bold",marginTop: "18px" }}>Examine Assigned -</span>&nbsp;
                    <Chip label="120" variant="contained" size="small" color="primary" />
                  </Typography>


                  <Typography variant="h7" style={{ padding: "10px", mt: 3, fontWeight: "" }}>
                    <b>Examine Attempt - </b>&nbsp;
                    <Chip label="100" variant="contained" size="small" color="success" />
                  </Typography>


                  <Typography variant="h7" style={{ padding: "10px", mt: 3, fontWeight: "" }}>
                    <b> Examine Absent -</b>&nbsp;
                    <Chip label="20" variant="contained" size="small" color="warning" />
                  </Typography>


                </Grid>
                <Grid item lg={3}>
                 {btnState3 ? (
                    <Button color="warning" variant="contained" ><DownloadForOfflineIcon />&nbsp;&nbsp;&nbsp;&nbsp;Reupdate</Button>
                  ) : (
                    <Button color="success" variant="contained" onClick={showProgress3} ><DownloadForOfflineIcon />&nbsp;
                     Update Result
                    </Button>
                  )}
                
                </Grid>
              </Grid>
              {progressBar3 ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box>
              ) : (
                ""
              )}
            </CardContent>
            <br />
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
            <Chip label="2" variant="contained" size="small" color="primary"/>&nbsp;
              Update Attendance
            </Typography>
            <CardContent sx={{ margin: "5px" }}>
              <Grid container spacing={-1.5}>
                <Grid item lg={10}>
                  <Typography variant="h7" component="div" float="left"><span style={{ fontWeight: "bold" }}>Exam Name:-</span>&nbsp;
                  {fetchQname}
                  </Typography>
                  <Typography variant="h7" component="div" float="left" sx={{ mt: 1 }} ><span style={{ fontWeight: "bold" }}> Status:-</span>&nbsp;
                    <Chip
                      label="Not Updated"
                      variant="outlined"
                      size="medium"
                      color="error"
                    />
                  </Typography>
                </Grid>
                <Grid item lg={2}>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={handleOpen3}
                  ><DriveFolderUploadRoundedIcon />&nbsp;
                    Attendance
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Modal>

      {/* Update Attendance */}

      <Modal
        open={open3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "right" }}>    <Button color="error" variant="contained" size="medium" onClick={handleClose3}> <CloseIcon />  Close</Button> </Box>
          <Card sx={{ mt: 1 }}>
            <Typography
              sx={{
                background: "#0D47A1",
                height: "40px",
                padding: "5px",
                color: "white",
              }}
            >
              <IconButton>
                <NoteIcon sx={{ color: "white" }} fontSize="small" />
              </IconButton>
              Attendance Form Download and Upload
            </Typography>
            <CardContent sx={{ margin: "5px" }} >
              <Grid container>
                <Grid item lg={10}>
                  <Typography variant="h7" component="div" float="left">&nbsp; Step 1. Download: Attendance Template</Typography>
                  <Typography variant="h7" component="div" float="left">&nbsp; Step 2. Take a printout of downloaded template</Typography>
                  <Typography variant="h7" component="div" float="left">&nbsp; Step 3. Collect Signature of Students</Typography>
                  <Typography variant="h7" component="div" float="left">&nbsp; Step 4. Browse and upload.</Typography>
                  <br />


                </Grid>
                <Grid item lg={3}>
                  <ButtonGroup ><Button variant="contained" disabled>    </Button><Button style={{ color: "#757575" }} ><FolderCopyIcon /> Choose Files</Button></ButtonGroup>
                </Grid>
                <Grid item lg={3}>
                  <Button color="info" variant="contained" size="medium" > <FileUploadIcon /> Upload</Button>&nbsp;

                </Grid>
                <Grid item lg={6}></Grid>
                <Typography sx={{ fontSize: "14px" }} component="div" float="left" color="primary" > File with following extensions are   allowed: .doc, .docx, .pdf, .xlsx, .jpg, .png, .jpeg
                  File must be less than 10MB </Typography>
              </Grid>
            </CardContent>
          </Card>

        </Box>
      </Modal>

      {/* Upload Result */}

      <Modal open={open4} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" color="error" size="small" onClick={handleClose4}><CloseIcon size="small" />
              close
            </Button>
          </Box>
          <Card sx={{ mt: 1 }}>
            <Typography sx={{ background: "#0D47A1", height: "40px", padding: "5px", color: "white" }} >
              <IconButton>
                <DescriptionIcon sx={{ color: "white" }} fontSize="small" />
              </IconButton>
              Update Exam Result
            </Typography>
            <CardContent>
              <Grid container>  
                <Grid item lg={9} >
                  <Typography variant="h7" style={{ padding: "10px", mt: 3 }}>
                    <b> Exam Name - </b>
                    <span style={{ color: "#424242", fontFamily: "sans-serif", fontSize: "20px" }}>
                      OPRB CBRE Warder- 27th Dec 2022-SL-3(C)
                    </span>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h7" style={{ padding: "10px", mt: 3, }}>
                    <b>Examine Assigned -</b>&nbsp;
                    <Chip label="120" variant="contained" size="small" color="primary" />
                  </Typography>


                  <Typography variant="h7" style={{ padding: "10px", mt: 3, fontWeight: "" }}>
                    <b>Examine Attempt - </b>&nbsp;
                    <Chip label="100" variant="contained" size="small" color="success" />
                  </Typography>


                  <Typography variant="h7" style={{ padding: "10px", mt: 3, fontWeight: "" }}>
                    <b> Examine Absent -</b>&nbsp;
                    <Chip label="20" variant="contained" size="small" color="warning" />
                  </Typography>
                </Grid>
                <Grid item lg={3}>
                {btnState3 ? (
                    <Button color="warning" variant="contained" ><DownloadForOfflineIcon />&nbsp; Reupdate Result</Button>
                  ) : (
                    <Button color="success" variant="contained" onClick={showProgress3} ><DownloadForOfflineIcon />&nbsp;
                     Update Result
                    </Button>
                  )}
                
                </Grid>
              </Grid>
          
              {progressBar3 ? (<>
              <Box>
              <Typography variant="h7" >2 row(s) processed
                  </Typography>
              </Box>
              <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box></>
                 
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
};
export default Dashboard;
