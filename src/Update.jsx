import axios from "axios";
import { React, useEffect, useState } from "react";
import NewAppBar from "./NewAppBar";
import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  Chip,
  CardContent,
  Fab,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  Paper,
  Divider,
  Tooltip,
} from "@mui/material";
import DataTable from "react-data-table-component";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import HomeIcon from "@mui/icons-material/Home";
import UpdateIcon from "@mui/icons-material/Update";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import {  Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

//Search Bar Styles

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

//Data Table Styles

const customStyles = {
  rows: {
    style: {
      minHeight: "30px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "5px", // override the cell padding for head cells
      paddingRight: "5px",
      paddingTop: "5px",
      fontWeight: "bold",
      fontFamily: "monospace",
      fontSize: "20px",
      minHeight:"50px",
      backgroundColor: "#283593",
      color:"white"
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
const drawerWidth = 240;

const Dashboard = () => {
    const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all ");
      // console.log(response.data);
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Table Header


  const columns = [
    {
      name: "Country Name ",
      selector: (row) => row.name,
      sortable: "true",
    },
    {
      name: "Country Native ",
      selector: (row) => row.nativeName,
      sortable: "true",
    },
    {
      name: "Alpha2 Code ",
      selector: (row) => row.alpha2Code,
      sortable: "true",
    },
    {
      name: "Alpha3 Code ",
      selector: (row) => row.alpha3Code,
      sortable: "true",
    },
    {
      name: "Country Flag ",
      selector: (row) => <img width={150} height={50} src={row.flag} />,
    },
    {
      name: "Actions ",
      cell: (row) => (
        <Button variant="contained" size="medium" color="warning">
          Edit
        </Button>
      ),
    },
  ];

  useEffect(() => {
    getCountries();

    const timeout = setTimeout(() => {
      setRows(countries);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      if (country.name.toLowerCase().match(search.toLowerCase())) {
        return country.name.toLowerCase().match(search.toLowerCase());
      }
      else if (country.alpha2Code.toLowerCase().match(search.toLowerCase())) {
        return country.alpha2Code.toLowerCase().match(search.toLowerCase());
      }
      else if (country.alpha3Code.toLowerCase().match(search.toLowerCase())) {
        return country.alpha3Code.toLowerCase().match(search.toLowerCase());
      }


      return country.nativeName.toLowerCase().match(search.toLowerCase());

    });
    // console.log(result);
    setFilteredCountries(result);

  }, [search]);


  return (
    <Box sx={{ display: "flex", backgroundColor: "#E0E0E0", height: "170vh" }}>
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
        <Box sx={{ margin: "2px", mb: 5 }}>
          <Grid container justifyContent="center">
            <Grid item lg={2}>
              <Typography
                variant="h5"
                fontWeight="bold"
                component="div"
                sx={{ ml: 2 }}
              >
                Update
              </Typography>
            </Grid>
            <Grid item lg={8}></Grid>
            <Grid item lg={1}>
              <Typography variant="h7">
                <HomeIcon sx={{ mb: -0.6, fontSize: "20px", padding: "2px" }} />
                Home
              </Typography>
            </Grid>
            <Grid item lg={1}>
              <Typography variant="h7">
                <UpdateIcon
                  sx={{ mb: -0.6, fontSize: "20px", padding: "2px" }}
                />
                Update
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Grid container justifyContent="center">
          <Grid item lg={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: 570,
                },
              }}
            >            
              <Paper
                elevation={24}
                sx={///////////////////////////////////////////////////////////
                  {
                    // boxShadow: "1px 1px 0px 2px #E0E0E0",
                    // backgroundColor: "#E4EAF6",
                  }
                }
              >
                {/* <Typography vatiant="h7" color="#FF3D00" fontFamily="cursive" fontWeight="bold">
                     Today's Exam Details
                          </Typography>   */}
               <CardContent>
                
               </CardContent>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
