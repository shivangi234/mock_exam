import React, { useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useEffect } from "react";
import { Button, Checkbox, Grid, Avatar, Paper, Box } from "@mui/material";
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
      fontFamily: "sans",
      fontSize: "20px",
      minHeight: "50px",
      backgroundColor: "#0D47A1",
      color: "white",
    },
  },
  cells: {
    style: {
      paddingLeft: "5px", // override the cell padding for data cells
      paddingRight: "5px",
      fontSize: "16px",
      backgroundColor: "#021D51",
      color: "white",
      opacity: 0.8,
    },
  },
  pagination: {
    style: {
      paddingLeft: "5px", // override the cell padding for data cells
      paddingRight: "5px",
      fontSize: "16px",
      backgroundColor: "#0F308E",
      color: "white",
    },
    svg: {
      style: {
        color: "white",
      },
    },
  },
};

const Countries = () => {
  //States

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
      name: "Flag ",
      selector: (row) => (
        <Box
          sx={{
            display: "flex",
            borderRadius: "40px",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 38,
              height: 35,
            },
          }}
        >
          <Paper elevation={24}>
            <Avatar width="30px" height="30px" src={row.flag} />
          </Paper>
        </Box>
      ),
    },
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
      name: "Actions ",
      cell: (row) => (
        <Button variant="contained" size="small" color="warning">
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
      } else if (country.alpha2Code.toLowerCase().match(search.toLowerCase())) {
        return country.alpha2Code.toLowerCase().match(search.toLowerCase());
      } else if (country.alpha3Code.toLowerCase().match(search.toLowerCase())) {
        return country.alpha3Code.toLowerCase().match(search.toLowerCase());
      }

      return country.nativeName.toLowerCase().match(search.toLowerCase());
    });
    // console.log(result);
    setFilteredCountries(result);
  }, [search]);

  return (
    <Box sx={{ backgroundColor: "#E1F5FE", height: "170vh" }}>
      <Grid container justifyContent="center">
        <Grid item lg={11}>
          <div>
            <DataTable
              customStyles={customStyles}
              title="Country Tables"
              columns={columns}
              data={filteredCountries}
              fixedHeaderScrollHeight="300px"
              pagination
              selectableRows
              selectableRowsComponent={Checkbox}
              selectableRowsHighlight
              highlightOnHover
              subHeader
              progressPending={pending}
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
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Countries;
