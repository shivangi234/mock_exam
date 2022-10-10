import axios from "axios";
import { React, useEffect, useState } from "react";
import AppBarDrawer from "./AppBarDrawer";
import {
  Button,
  Box,
  CssBaseline,
  Chip,
  Fab,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import DataTable from "react-data-table-component";
import HomeIcon from "@mui/icons-material/Home";
import UpdateIcon from "@mui/icons-material/Update";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
const drawerWidth = 240;

const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filteredCountries, setfilteredCountries] = useState([]);

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
      name: "Result Status",
      selector: (row) => (
        <Chip
          label="Published"
          variant="outlined"
          size="medium"
          color="success"
        />
      ),
    },
    {
      name: "Attendance Status",
      selector: (row) => (
        <Chip
          label="Not Published"
          variant="outlined"
          size="medium"
          color="error"
        />
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <Tooltip title="Attendance">
            <Button  sx={{ color: "orange" }} 
            >
              <CoPresentIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Result">
            <IconButton sx={{ color: "blue" }}>
              <SimCardDownloadIcon />
            </IconButton>
          </Tooltip>
        </>
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
      </Box>
    </Box>
  );
};

export default Dashboard;
