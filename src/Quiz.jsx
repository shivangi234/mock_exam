import { React, useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from "react-data-table-component";
import { Grid, Checkbox, Button, Chip, Paper, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


const customStyles = {
    rows: {
        style: {
            minHeight: "40px", // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: "5px", // override the cell padding for head cells
            paddingRight: "5px",
            paddingTop: "5px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "18px",
            minHeight: "50px",
            backgroundColor: "#CFD8DC",
            color: "black",
            borderMargin: "12px"
        },
    },
    cells: {
        style: {
            paddingLeft: "5px", // override the cell padding for data cells
            paddingRight: "5px",
            fontSize: "16px",
        },
    },
};
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

const baseURL = " https://demoexam.edusols.com/api/tassess/sync_quiz.php?oper=EXAM_LIST&org_code=STLIND&centre_code=STLIND&start_date=2022-01-01&end_date=2023-01-23&question_type=MCQ"

const Quiz = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState();
    const [filtereddata, setFiltereddata] = useState([]);
    const [progress, setProgress] = useState(0);
    const [pending, setPending] = useState(true);


    // const [rows, setRows] = React.useState([]);


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


    const columns = [
        {
            name: 'Sl No',
            cell: (row, index) => index + 1,
            width: "5%"
        },
        {
            name: 'Quiz Name',
            selector: (row) => row.quiz_name,
            sortable: "true",
            width: "25%"
        },
        {
            name: 'Quiz Open Time',
            selector: (row) => row.quiz_open_date_time,
            sortable: "true",
        },
        {
            name: 'Quiz Close Time',
            selector: (row) => row.quiz_close_date_time,
            sortable: "true",
        },
        {
            name: "Exam Status",
            selector: (row) => (
                <Chip label="fetched" variant='outlined' size='medium' color="success" />
            )
        },
        {
            name: "Photo Status",
            selector: (row) => (
                <Chip label="fetched" variant='outlined' size='medium' color="warning" />
            )
        },
        {
            name: "Actions ",
            cell: (row) => (
                <Button variant="contained" size="medium" color="warning">
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

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) =>
    //             prevProgress >= 100 ? 10 : prevProgress + 10);
    //     }, 500);
    //     return () => {
    //         clearInterval(timer);
    //     }
    // })

    return (
        <div>

            <Grid container justifyContent="center">
                <Grid item lg={10}>
                    <Paper elevation={3} >

                        <DataTable
                            title="Quiz Data"
                            customStyles={customStyles}
                            columns={columns}
                            data={data}
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


                </Grid>
            </Grid>
        </div>
    )
}

export default Quiz;