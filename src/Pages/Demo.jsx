import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
    Grid,
    Button,
    Box,
    Card,
    CardContent,
    FormControl, InputLabel, MenuItem,
    Select,
    TextField, Chip,
} from "@mui/material";
import DataTable from "react-data-table-component";
// import { DatePicker } from '@mui/x-date-pickers';
import moment from "moment/moment";

const Demo = () => {
    const [quizdata, setQuizdata] = useState({ org_code: "STLIND", centre_code: "STLIND", question_type: "MCQ", quiz_status: "all", start_date: "2022-01-01", end_date: "2022-08-29" })
    const [data, setData] = useState();
    const [showDataTable, setShowDataTable] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    const handleChange = (e) => {
        setQuizdata({ ...quizdata, [e.target.name]: e.target.value });


    }
    const start_date = quizdata.start_date;
    const end_date = quizdata.end_date;



    const baseURL = `https://demoexam.edusols.com/api/tassess/sync_quiz.php?oper=EXAM_LIST&org_code=STLIND&centre_code=STLIND&start_date=${start_date}&end_date=${end_date}&question_type=MCQ`;


    console.log(baseURL);

    //API Call

    const loadData = async () => {
        try {
            const response = await axios.get(baseURL);
            const result = response.data;
            console.log(result);
            setData(result.data);
            setShowDataTable(true)
        } catch (error) {
            console.log(error);
        }
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
            cell: (row, index) => index + 1,
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
            selector: (row) => moment(row.quiz_open_date_time).format('DD-MMM -YYYY h:mm A'),
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
            cell: (row) => (<><Button
                variant="contained"
                size="small"
                color="warning"
            >
                {/* <DownloadForOfflineIcon/> */}
                Fetch
            </Button>&nbsp;&nbsp;
                <Button
                    variant="contained"
                    size="small"
                    color="info"

                >
                    {/* <DriveFolderUploadRoundedIcon/> */}
                    Update
                </Button></>
            ),
        },
    ];
    useEffect(() => {
        loadData();

        // const timeout = setTimeout(() => {
        //   setRows(data);
        //   setPending(false);
        // }, 1000);
        // return () => clearTimeout(timeout);
    }, []);

    return (
        <div sx={{ backgroundColor: "#E0E0E0", height: "100vh" }} >
            <Card>
                <CardContent sx={{ margin: "15px", mt: 20, }}>
                    <FormControl fullWidth>
                        <Grid container justifyContent="center" spacing={7}>

                            <Grid item lg={2}>

                                <InputLabel sx={{ marginTop: '133px' }} id="demo-simple-select-label">Question Type</InputLabel>
                                <Select
                                    sx={{ marginTop: '10px', width: '100%', textAlign: 'left' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="question_type"
                                    value={quizdata.question_type}
                                    onChange={handleChange}
                                >

                                    <MenuItem name="question_type" value={quizdata.question_type}
                                    >All</MenuItem>
                                    <MenuItem name="question_type"
                                    >MCQ</MenuItem>
                                    <MenuItem name="question_type"
                                    >LAQ</MenuItem>
                                    <MenuItem name="question_type"
                                    >MCQ+LAQ</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item lg={2}>
                                <Box sx={{ ml: 4 }}>

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



                                    {/* <TextField label="Start Date"
                                        onChange={handleChange}
                                        id="start_date"
                                        name="start_date"
                                        value={quizdata.start_date}
                                    /> */}

                                </Box>
                            </Grid>
                            <Grid item lg={2}>
                                <Box sx={{ ml: 4 }}>

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
                                    {/* <TextField label="End Date"
                                        name="end_date"
                                        onChange={handleChange}
                                        id="end_date"
                                        name="end_date"
                                        value={quizdata.end_date}
                                    /> */}
                                </Box>
                            </Grid>
                            <Grid item lg={2} sx={{ ml: -4 }}>
                                <InputLabel sx={{ marginTop: '133px' }} id="demo-simple-select-label">status</InputLabel>
                                <Select
                                    sx={{ marginTop: '10px', width: '100%', textAlign: 'left' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="quiz_status"
                                    onChange={handleChange}
                                    value={quizdata.quiz_status}

                                >
                                    <MenuItem value={quizdata.quiz_status}>All</MenuItem>
                                    <MenuItem value={quizdata.quiz_status}>FETCHED</MenuItem>
                                    <MenuItem value={quizdata.quiz_status}>Not FETCHED</MenuItem>

                                </Select>

                            </Grid>
                            <Grid item lg={2}>
                                <Box sx={{ textAlign: "center" }}>
                                    <Button variant="contained" fullWidth onClick={loadData}>View</Button>
                                </Box>
                            </Grid>
                        </Grid>

                    </FormControl>
                </CardContent>
            </Card>
            <br />
            {showDataTable ? (<>
                <DataTable
                    customStyles={customStyles}
                    columns={columns}
                    data={data}
                    fixedHeaderScrollHeight="500px"
                    highlightOnHover
                    pagination
                    subHeader
                // progressPending={pending}

                /></>) : ("")}
            {/* 
            <Box>
                <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                /></Box> */}


        </div>
    )
}

export default Demo