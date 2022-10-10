import React from "react";
import "./Style.css";
import AppBarDrawer from "./AppBarDrawer";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  CssBaseline,
  Grow,
  Grid,
  Chip,
  Divider,
  Button,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const drawerWidth = 240;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.common.white,
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function createData(serialno, testname, subject, date, status) {
  return { serialno, testname, subject, date, status };
}

const rows = [
  createData(
    "01",
    "MCA MidTerm 2022-2023 Software Engineering Architecture",
    "Aptitude",
    "2022-08-29 10:06:00",
    "10:06 AM"
  ),
  createData(
    "02",
    "MCA MidTerm 2022-2023 Android Architecture",
    "Reasoning",
    "2022-08-29 10:06:00",
    "12:06 PM"
  ),
  createData(
    "03",
    "MCA MidTerm 2022-2023 Computer Organisation Architecture",
    "Mathematics",
    "2022-08-29 10:06:00",
    "10:06 AM"
  ),
];
const Dashboard = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarDrawer />
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Grid container columnSpacing={5}>
              <Grid item lg={4}>
                <Card
                  className="animation"
                  sx={{
                    boxShadow: "1px 1px 2px 2px #C19728",
                  }}
                >
                  <CardHeader
                    title=" Exam Fetch Count"
                    className="examfetch"
                  ></CardHeader>
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Total Examination
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#0D47A1",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Synced Examination
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#2E7D32",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Not Synced Examination
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#FF6D00",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Grid container justifyContent="center">
                      <Grid item lg={4}>
                        <Button
                          variant="contained"
                          sx={{ color: "white", backgroundColor: "#C19728" }}
                        >
                          Know More
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item lg={4}>
                <Card
                  sx={{
                    boxShadow: "1px 1px 2px 2px #089988",
                  }}
                >
                  <CardHeader
                    title="Exam Type Count"
                    className="examtype"
                    sx={{ backgroundColor: "#009688", color: "white" }}
                  ></CardHeader>
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Total MCQ Exam
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#0D47A1",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Total MCQ+SAQ Exam
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#2E7D32",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Total LAQ Exam
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#FF6D00",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Grid container justifyContent="center">
                      <Grid item lg={4}>
                        <Button
                          variant="contained"
                          sx={{ color: "white", backgroundColor: "#009688" }}
                        >
                          Know More
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item lg={4}>
                <Card
                  sx={{
                    boxShadow: "1px 1px 2px 2px #4B247B",
                  }}
                  className="examschedule1"
                >
                  <CardHeader
                    title="Exam Scheduled"
                    sx={{ backgroundColor: "#4B247B", color: "white" }}
                  ></CardHeader>
                  <CardContent>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Today's Exam
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#0D47A1",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Week's Exam
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#2E7D32",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item lg={10}>
                        <Typography
                          component="div"
                          fontWeight="bold"
                          variant="h7"
                        >
                          Month's Exam
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Chip
                          label="01"
                          size="small"
                          style={{
                            borderRadius: "15px",
                            margin: "2px",
                            backgroundColor: "#FF6D00",
                            color: "white",
                          }}
                        ></Chip>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Grid container justifyContent="center">
                      <Grid item lg={4}>
                        <Button
                          variant="contained"
                          sx={{ color: "white", backgroundColor: "#4527A0" }}
                        >
                          Know More
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 5 }} justifyContent="center">
              <Grid item lg={12}>
                <Card sx={{ boxShadow: "1px 1px 0px 2px #E0E0E0",backgroundColor:'#F5F5F5'  }}>
                  <CardHeader
                    title="Today's Exam Details"
                    sx={{
                      backgroundColor: "#0D47A1",
                      color: "white",
                      height: "55px",
                      textAlign: "center",
                    }}
                  ></CardHeader>
                  <CardContent sx={{ margin: "20px",}}>
                    <TableContainer
                      component={Paper}
                      sx={{ boxShadow: "1px 1px 2px 2px #BDBDBD" }}
                    >
                      <Table
                        sx={{ minWidth: 700 }}
                        aria-label="customized table"
                      >
                        <TableHead sx={{fontWeight:"bold",}}>
                          <TableRow>
                            <StyledTableCell sx={{fontWeight:"bold",backgroundColor:"#5a74a1"}}>Sl No</StyledTableCell>
                            <StyledTableCell align="center" sx={{fontWeight:"bold",backgroundColor:"#5a74a1"}}>
                              Test Name
                            </StyledTableCell >
                            <StyledTableCell align="center" sx={{fontWeight:"bold",backgroundColor:"#5a74a1"}}>
                              Subject Name
                            </StyledTableCell>
                            <StyledTableCell align="center" sx={{fontWeight:"bold",backgroundColor:"#5a74a1"}}>
                              Synced On
                            </StyledTableCell>
                            <StyledTableCell align="center" sx={{fontWeight:"bold",backgroundColor:"#5a74a1"}}>
                              Exam Starts
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {row.serialno}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.testname}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.subject}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.date}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.status}
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grow>
      </Box>
    </div>
  );
};

export default Dashboard;
