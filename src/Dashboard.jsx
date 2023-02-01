import React from "react";
import "./Style.css";
// import AppBarDrawer from "./AppBarDrawer";
import NewAppBar from "./NewAppBar";
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import notifications from "./images/notifications.gif";
import FiberNewIcon from "@mui/icons-material/FiberNew";

const drawerWidth = 240;

const Dashboard = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div>
      <Box
        sx={{ display: "flex", backgroundColor: "#E0E0E0", height: "100vh" }}
      >
        <CssBaseline />
        {/* <AppBarDrawer /> */}
        <NewAppBar />
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
            <Grid container spacing={12}>
              <Grid item lg={4} xs={9}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 400,
                      height: 230,
                    },
                  }}
                >
                  <Paper elevation={24} className="boxClick1">
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          background:
                            "linear-gradient(to right, #0066cc 0%, #99ccff 100%)",
                          color: "white",
                          padding: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Exam Fetch Count
                      </Typography>
                    </Box>

                    <CardContent sx={{ m: 1 }}>
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
                        <Grid item lg={5}>
                          <Button
                            size="medium"
                            variant="contained"
                            sx={{
                              background:
                                "linear-gradient(to right, #0066cc 0%, #99ccff 100%)",
                              color: "white",
                            }}
                          >
                            Know More
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Paper>
                </Box>
              </Grid>

              <Grid item lg={4} xs={9}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 400,
                      height: 230,
                    },
                  }}
                >
                  <Paper elevation={24} className="boxClick2">
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          background:
                            "linear-gradient(to right, #006699 0%,  #66ff66 100%)",
                          color: "white",
                          padding: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Exam Type Count
                      </Typography>
                    </Box>

                    <CardContent sx={{ m: 1 }}>
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
                        <Grid item lg={5}>
                          <Button
                            size="medium"
                            variant="contained"
                            sx={{
                              background:
                                "linear-gradient(to right, #006699 0%, #66ff66 100%)",
                              color: "white",
                            }}
                          >
                            Know More
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Paper>
                </Box>
              </Grid>

              <Grid item lg={4} xs={9}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 400,
                      height: 230,
                    },
                  }}
                >
                  <Paper elevation={24} className="boxClick3">
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          background:
                            " linear-gradient(to right, #000099 0%, #66ffff 100%)",
                          color: "white",
                          padding: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Exam Scheduled
                      </Typography>
                    </Box>

                    <CardContent sx={{ m: 1 }}>
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
                        <Grid item lg={5}>
                          <Button
                            size="medium"
                            variant="contained"
                            sx={{
                              background:
                                " linear-gradient(to right, #000099 0%, #66ffff 100%)",
                              color: "white",
                            }}
                          >
                            Know More
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 3, ml: 1 }}>
              <Grid item lg={12}>
                <Typography
                  variant="h6"
                  color="#000099"
                  fontFamily="revert"
                  fontWeight="bold"
                >
                  Today's Exam Details
                  <span sx={{ mt: 3 }}>
                    {/* <Chip label="new" color="warning" className="blink"/> */}
                    <FiberNewIcon
                      className="blink"
                      sx={{ color: "#E64A19", fontSize: "30px" }}
                    />
                  </span>
                </Typography>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <Grid item lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: "100%",
                      height: 310,
                    },
                  }}
                >
                  <Paper
                    elevation={24}
                    sx={
                      {
                        // boxShadow: "1px 1px 0px 2px #E0E0E0",
                        // backgroundColor: "#E4EAF6",
                      }
                    }
                  >
                    {/* <Typography vatiant="h7" color="#FF3D00" fontFamily="cursive" fontWeight="bold">
                     Today's Exam Details
                          </Typography>   */}
                    <CardContent sx={{ margin: "0px",backgroundColor:"#EEEEEE" }}>
                      <List
                        className="listClick"
                        dense
                        sx={{
                          width: "100%",
                          bgcolor: "#FAFAFA",
                          cursor: "pointer",
                        }}
                      >
                        <Grid container>
                          <Grid item lg={1}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar
                                  alt={``}
                                  src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFBUXGBcaGRgYGRgeGRsiGiEYGB4dGiMiHSghGiIlHh0fITEhJSkrLzEwIDAzODMwNzAwMDABCgoKDg0OGxAQGy8mICY1MDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMC8wMDAwMDAwMDAvMP/AABEIAMwAtAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAEMQAAIBAwIEBAIGBwUHBQAAAAECAwAEERIhBQYxQRNRYXEigQcUMlKRoSNCU2JygrEzY5LB0RUkNEOissIWF3Pw8f/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAA2EQABAwIEBQMDAwIGAwAAAAABAAIRAyESMUFRBCJhcYGRofATscEFktFi4RQyUnKCoiNCQ//aAAwDAQACEQMRAD8A7hSlKjWUpSlESlKURKUpREpStC84tDEcSSBT5YJP5CsOc1olxhZAJMBb9K1LLiEUozG6t5gdR7jqKxcR4vBAVEsgQv8AZznf2xWMTcOKbbphdOGLqQpUdFxq3bpMnzIH9cVICjXBwlplCC0wQvtKUrZYSlKURKUpREpSlESlKURKUpREpSlESlK5/f8AOErTvHEyoY2KlNi2xwdWRnHqBjyJ61DXrtotxOB8D4FLSpGq7CCPJVo4vx6KD4Tln+6P8ydhUXcczLLEyxv4Ep+yzjKZ9SD/AKVXr65gum13CPHLgL40DENgZ2ZTlWAJ7g+lYV4HcEFoHiu1GNgfCmGfNW+A/wCJM1SPEVajpoua4f6cnfcHyD4VkUKbGxVBB3zHuI9ivs1zfWx8SQSaevjQsZojjucDUB/EuPWthuL214Fa5iVyNhPC5V19MqcnGc6ScelQp48bVgpM0UpIAh0OJGJ2AVMfHnzGR61buE8DS8i8W7sjazknDqVSVgejN4Z/6Xzv2rFFj3TgDmbh3M09L39B2K3qva2MeF2xbYj0t7hRC8vybtaXC3IXfRIPDmGPJgNLEnuVX3rHd8yywjwL2F3DfD4U0LSavRSoZZPkWq08C5ItraQTB55ZhnEksrE4PbSulCPdatFWGcI1vMOU64bA+DI+6rv4ibESNMVz6iFzjhXLcdzGZLb6zZkHHhTxu0fuokCvg/usAPKteWx4hanaCRxn7Vs4ZT7qxVvlgj1NXzjlhNKmILhrd+zBVYfzAjJ+RFc94pzLxbh5zdpHJDnaYLmPtjVpCmM7/rDHkTUj+FpvIcRfcWP/AFhS0HvfLQ4DZrpjwTIHlwUrZ853Ue1xZ3bDz+ryAj5orA/gKtXAuPwXaFoXyRsynZ1/iHUVU+F/SjA5CzxPD+8CGX3Owb8AaunDeJQ3C+JDIkg81IOPQ9wfQ1vTYW/+xI6x98/WVrxfD1qJirTwnfT+PRb1KUqVU0pSlESlKURKUpREpSlESvBcDGSN+lfJJAoLMQABkk9BVC50eXxBJoklt9I0yRqHVOzAhSXHQHVgj2xUVao5jZa0uOw+T6AnopKTGudDjA3WlzDxWaO4Pjl4TkiNjlYyM7aHB0nPXBOrzFfJ+ILMAt3DHcAdGYYkH8LjBB9R+NYuH8ecphZFmjOxVvjX2IP2fbb2r7HZWcmdJexf+7OqAn1jIIA/h0+9ccPBcXU6jmO1Dsie+X7m9tV0sBDQHsDhoRn87ErJHwOOTH1S6IY5/Q3IJ38lkGGHz1msI5f4k8ojSMW2N2uGZXVd8fogDlieo1Bcd8VvR8jXMkyLLPGLYfEzQl1llwQVX+6HckMT2GOo6KoxtV+lwgMOqsAdOmXkd7qpU4gt5abiR1/BzWKGMhVDNrIABYgAk9zsMDPpWelKvKolK0eL36wQvK2+kbDzJ2A9N+/aobgPG5Xl8K4XSzrqj+ErkbkjGTtgd9/PtWhqAODfnnadN1sGEjErPWOSMEEEAgjBB6H3rJSt1qqde/Rvw5gdMRhJ7xMVA9l3Qf4apKcAt4pj9T4siuhxiQBMEdjIulT5EaT6jtXZ6pPNn0fQ3cgmjc283R2VQyyeWtcjJH3gQcbHOBgrvC8W9hwue4NNrGR5aZBG4tI1U1yy90Yv96aF27PEThh2J2A/AD271OVxufkG/gcmCaOZgM4SVoZfwAx/1Vt8P49xW0dRcwTvF0YFPE67Z8RNWCP3jjz86KR/CUqhJpVmk7EFh8TLfcBdZpWGCXUoYAjIzhgQR7g9KzUXOSlKURKUpREpSlEVe5u1tAyQ/HICpMasodhkZxqIHrjviqFacUaKTSGeKX7jgo/4NgMPUZFSXNCypPJKY5GiJysyDWo2GxCEsmk7ZIxtnNYIeNeNHpkEV3F5SAOB7HqD+Yrj8UWmpNVrm7OG2nwFdPhw4M/8Za4atNjOvwhermaCc5uYAZP20RMcw9yuNXsdvSsh5Oa5AEF7rty4EupAJ1UDLIGXC6m2GSo2Ocnv5tODQTNptppLdydopf0sRxnZSSHX/F7CrdyZy/8AU7fS5DzSMZJnGcM58s76VGFHoPMmrHDMc/mqODwMjF5+47GVDXe1lmAsJzE2j7ekKatbZIkWONQiIoVVGwAAwAPYVm9K+1RLPgiy3VysjukiNqUrgHDknVnc7AqOtXHvcCABM9Y0lVWNBmTCvdKrEfFZLZtFw6zIOsiY1p/8qjJx6jNWKKVWUMpDKRkEHIIPcVuDK1IhQXNTAtbRsQEMjO+emmJSxz+VR/EeMxTGKaIkPDKmQwIJSQ+GxGeoOR6jbIG1YuelZ7m0hXbxfEXPkCULfkK1efOGpbwpNCoQAiNgB1DY0sfMhgMk9e/QVXeXcxEQM97QRHbPyp2NHKDN8tszM98l0GlKieLcYWHCAa5DuEGBgfeYnZR6nFWTZV1LV8BzVVfhRuEMt1calAY6YiPDXv5HUQO9bHI0JW1DHo7FgPwX8yCfnUWN2MNIsQfaNI67rfCMMg7e/VVbnb6PpZbj6zZeGC4PjRuzKGYYw6YUgE76ugPXqSarwbjdmPs3IHoTOo+Q14HyFdomTUCpyMgjIJB322I3B9RXBbzit/YXMsDXM2tXbSzszLIrfEr4PwkkHfA65qQrqfp1erUjh5YQJIFQSOsHTf1Vi4N9J84kCTqki5AJVGWQeZxnG3lgZrq9vMrqroQysAVI3BB3BFcUXn2dwFu4ILpR+0jXPyOdI98VfOUefYryTwfCMTEEjLAqcbkDYEHGT07GgKl/Uf0+s0fUFENiSS10g9Q03EdsuyutKUrK4aUpSiJUdx92FtMV6hG+Q7n5DJqRqD5sv3hhVo20sXAzgHbDHv7VHWcG03EzEaZ+FvSaXPACoPDuJsvxwS7easCPn1HyNbM0lvO2q4hCyH/nwHw5fc42f2OR6Umkt521XEGmQ9Z4D4cnu2Nn9jkelY/9jSn/AIaWO7H3GxFOP/B/wWuNSDm24d4P9Jsf2mx8FdSoQ69ZsH/ULj1Fx5UlwvlISTwyrdCe3ik1lWTTLqQfAGK4U4bDfZHQda6HVM+j3hkkZupZo3id5EQK+M6IlGCMEg5d33B3q512KDcLBYDUgbrm1nS88xIGROyVC8cs3ytxCMyR9V/aJ+svv3HrU1SpCJEKIGFzrlvhlvcmYOWLKwKsGKnS2Tq26knrnO+3vuWqT8NY6i09mzdcfHCSdyQOq+o/rWzxngckM/120GX/AObF2kB6kb7Hvt+BNTfC+IxXMWpCGVhhlPbzVh/9BG42qGnSDeUCDc9759evhWHvJ5jcGARtGnTKRpn1Ci+LFXvrBgQwKzlSDsfhUgj8ayc/xA2UvvHj31qB/WqvxiJrK9ttz9W8RmTJP6PXhXQfujZgPL51MfSVxHw4Yo1GqR5UIXzCEN+Z0j51IRyuB1/IAUjaR+pRw328OJPYgKW5i4u0WIbdfEuHHwL2UdNTeQHrtUXw/lBFDSXkrTO2Wf4iEB6nGME49T8qluXuFGJTJMddxLhpX9fur5KvQAeWaiuPXUl4zWdocL0nmHRR3RT3Pt5Y8yMuaDdwnooG35WGIzP53A2GZ8wInluJp1eCIkRu4aRvJBsF/ifH4DeuhwxhVCqAFAAAHQAbACtXg/DI7aJYoh8I7nqT3J9TW/WlKngaAsVX43EpVO+kXj8lnDG6RRyJJJ4beJkhcgsMr+sCFZTuMEjrVxqJ5ntbeS1lF2muBVLuPiziP48jT8WRjO29SrVhAcC4SARbfouMS8Y4fJqM3D0jc/r2xKf9OcH51IcDteHCZJUvbiHSwbTKsec9Rhgu38wORkd61ZbXhcxJhuLi2U9PERHQjz3+MD3Oa9LyK8gza3FrdbZIEhR/8IDDPuRWL9CvTn/CMb/9aII/qwkHv9RuugBXbrW4SRQ8bK6tuGUgg+xHWs9Vb6PuH3MFr4dyAp1MVUMCVB3IOMj7WTsT1q01leaqsax5a0yAbHfqlKUoo0qD5r8LwNMwk0MwGYzhlO5DA/LG+xzg5qcqI5ls2lt3VBqcfEq7DUV305JAGemSajq4sBw5x8zstmRiGLJUFuDynJtpY7pfuMRFOPT9m59fhrR+shXCSB4ZMjCSKUb+U9G91Jr7JPofw5A0MnZJBpY+qZ2f3UsKkxxZyvhyhJ4zjKSqGH57iuE/6R5arSw7ty/afwV2GioOZhDh1z/cP4Vx5KvJJbKKSU5YmQZ9Fd1XPn8IG/et/ifE4oF1SNjPQYJJ9h/n0HesHK8kLWsRt00RAFVXf4dJKkb+TA1j5g4ILlVw2h0zpOMjfGQfmBv/AFruuLsHJnpK5Agv5stVrJxq4cF47cJGAT4k0mkYG+cYyBjfPSoiPj3EJmItkhkAOC2h1QdP1mbfY+WfSpG4N3oaGe38ZGBUyQuoJz30tjfv5VCWXE7u0yq2000eonBiZWGdzgjK7nfuPLyqLEZEzGtrg+BEdQXKVoEGwnS+nec/AU7EOKn7TWY9MSH/ADFV/iPCeJJN9YhWAOftiJmCv/EjnBPqDnvsd6moebZDubG7B8hHmo/ivPMkRCiylDvsgk+En+UZY71PLIzPv/C2pCqH8rW9jhg9+bL5bMVnmfmSa7VbVrYrMJAdtROQCCApGoZBzvkY33G9YOJcNvbOSC4uR4yIUwFZ3ACEaVJI+HJORsRkb5r3xmG/jlXiMyKrBl05G3Q6Rp1ZUDPc5yc1l5h5xe/QW0UBjLug+MgkkkBdOMAHPUnIx88O5M6fiy7VNjsLBRY00+bGQ7FhJHOA4mWgNyjPqIJl34rxDiKYt4hBEdmYtjPmNWASOo+AfPtU5wzh19DGscbWiKo6Kkh+ZJbc+v8A+VWrLi99w1EiuLcNFkBcHZck4AcZGB5MM/KrVHzDOQG+ozYYAgq0bA56bgmktzM+/wCAVyuJa5pim1gZJiCDPUlzgSd5Fthrr3P+10OQ1vIvkow3yzgH8a+cM43dykqpgLr9qN0eN9tjg6mGxwD5Z3G9Y7nmq8O0XD5/4nViB8goJ/GsXB4LlZDO1tLLM2d3McajOB0JyTgAdBgbAd6hceYYSY1sfa0z0iFARynEBOkR7wY91NRcyBX8O6ia3bsSdSHfGcgdOm/Qd8VOXMAdGRvsspU+xGDVcfgk9yytdMqoucRx5PXY/F59s77dMdatAFb0y+85ab+fk7gKJ4baM9dvC4ZPyLGuEt7+1mKgYV3EbEYBGCCwbbG+AKjrnlS/j3NtJjt4R8UfLQCfyrPJ9H/EYFCiHxAur44nVh1J2BCt36aajor25tGGXuLduyussefk2xqQ9V6nhK1Q02/S4lswLOAEGBaQWm3nyrv9FF3cfWJIpPH0LGwKuJcK2VK5Dj4CV1bbZrrFcp5D5xvJ7qOCZg6Nr3KgEaVYjBAHcDrmurUC436vTqM4iagaC4A8sxtNwNkpSlZXMSsU8WpWU7ZBG3XestKIuZy8SkwYbgJcICQyTLqG2xwTuMee9av+zrZv7CV7RvuSZlg9hvrT5EAeVWLm/g0BcSmWWCST9cfHESoAw6E7bfd0+ZNVmbh1zGNXhi4j/aWxLf4oz8Y9hqrkOp12SxpFQDQ3I8f5hbUErptqUXQ8ywnUWHqLeyv3J9lJDarHIYydUjAxsShDuzjBIB/WqcqifR5xVXeSJZAw0hgud1IJDZU4ZScrsR2q910qLsTAYjptFtbqhVaWvIJnr3ulKVG8a4j4KDSNUjnTGnmx8/QdT6VLMKNaPMnMAt9MUa+JPJsqD+relOB8DERM0x8W4b7bnt+6nkB02xn8hBcqxR/WLi4mkVpE+EOxA89TDPQZGB5Cty55ga6kNtZEn9pPg6VH7nmfX8PMaNdIxHwPmuamLSORv/I+9+gtbU7mAInnm7NzNDaRg+H4qrI46aj+rnzC6mPkfatn6Q+FKkEM8CBXt2QLpAGFJAUfJ9JGfXzNbd/YxwXHD4UGFDysSerNpG58yc9flUhz4B9Rn9h/3LQnlcT8gKdlQh9FrchPnE7CZ7jTaAtng9/HeW4YqDnKyRsM6WGzKw9D59qhZ3bhjAjU9mx3XqYST27lT2/13O5xewljf63ZjLsB4sXaUbAHr8LAdx/qDl4dxy1vYimoDUCrxvsw7Eb9cdiKyTiMHPT59x/YquCGgkCWnMbf3GjvbMKdtp1kVXRgysAQR0INZq57ypfm1DISXgWTw2I/UySEf+E4IPlgV0KsMeHCVo9haYStbiDMIpDGupwjFV8yAcD5natmqx9IV9cw2bNZrIZi8agxprKjUCzFcHbSCOnet1quL+Ne2pXxmuoZcfEzmZSx8y2MN75NTNpz/fKMF1lXykRWB9zsfzrVt+dL6NmUTsSDgpLqY+xDjVWQ8wW8n/F8Pt3P3o1Mb/ip3rW28L2X0apYA+lTqtgAFpAMAAZuBGmhCuHIPMEE1zpSxhikZWZpY1C/Z8xp7566q6ZXP/o1SyfxJLWGVHQBSXYtgPvpQ6jkZTO4z/SugVtfVeZ44UxWIp0yyALG9/U22ulKUoqaUpSiLS4rYLPGY277g+R7GuXyXT28mmTxLZ84Gv4Q2PuMPgf5Mfauu1E8wwu0XwIkoH2onUMrjywe461U4nhWVYcZkajP56HYqxQ4h1OwiDoVVOG8eUSrJcRRu42E2kCRQcg74yRjttV8icMAynIIBBHcHeuXCytH/snezbyX9JAf5Duo/hK1deUfHERjmMTqv9nJExKsPIg7qR5b7d604N7zILw8aHUdxn9+634pjRBDS06jTwRI+3ZWGqjDxGJr2aSaRVEQ0RhjjuVcjzOQR/NVuqLbgNuXMhiBYnJyWIz1zjOn8qtVGuJGGLH8GPeCq7C0Ti+fBZVU8LhupT9WiITJLTPq8MEnfwlP2jnffYHt0q4cL4bHbxiOMYHc9yfMnvW4BjYV6rLabW3AEnYQjnudYkx3lUnn2Ux3FjMBtG8jN7fBn8q9/SPeg2gjQgmUgjH3Uw5PtsB86kObIVJty4ynilH9pFKZ9N8HNQfEuXFgjI1mR5WSFNsYDMCe53IB6YA3261FUxDEALH2t7zkOqmplvKTmPe/4V7gGFUegqtcd5XSRjLGilj9pDsr+oI3RvX8fW00qdzQ6xVdpLTIVP4UbMRSQvqhZxiRZjhth2JwpAzkY963+S78yW+ltzGdGr7wwCp/Db5VJ8Q4XFOAJUDY6HcMPYjBH4164fYRwqViXSCcnckk9NySSelRNpuDhEQBpr46KRzwQZmSdb+63K5LzzzrcLdtDaSYjhCq5ULkybswyc7KNK489QOcVe+b+YksrcysutyQsaZxrY9s9gACxPkPPArlF9zRb3Dlrrh9vKSSdSBo5N/Ng2W96lJV79M4apUf9UU8YGkgXP8AuBBjaNl7PP1yy6LmO3uV7iaJT/QgflXi1veEyDS9k8DH9aCQ4+SkgD2wawiHhkv2ZLq0P7wjkQfjlvzFSvAuRY7mT4b6GZBuxQYkxkbaf1QQSNWdj2NL6LsVBwTZdUpPpE6gEDw5hLfaF0nlHh8ENuhtw+lwr6n+22QBqbsMgZwAB5Cp6sccYAAAwAAAB2xWSsryz3l7i4kkncyfJ1SlKUWqUpSiJSlKIqjzJyw8jGW2KBycsjlgjeoIzoOOvwkH0OSas0t1ZnVJFNB1y6jxIvdmTUAP4wtdXrHKpIIBwcbHy9aq1eEp1DiuDuDCnp8TUYMOY2N1Ecu8wRXceUZSw6hWBHuD3H9Km6od0y2sonurJdSkn61bjAbOc+LpAYbdQ+U/eNWbhvH7efT4cgy3QHv7Ho3yJqRtQCGuN+tp/BPb0WjmEy5ot0vH59VLUpSplGo/jdj48DxZwSNj5Ebj8xUBwe1uZpo3uQVWDoCuNTEYz1OojY6httt1NW+lRupBzgZPbQ6iex+XW7aha2Pg0PqlKUqRaJWlxK/jgjeWVgkaDLMe3+pPQAbk7CvPFeKRW0ZlncIg7nuewA6knyFc15q5hsuIFUa4ubbw2JXCxNGxO2plySTjp0wCfM0Vjh+FqVjLWkjUgEx436LDx/mqwvXUz21yNAwjrIoZQ2NXweJozkDzO3yqDk4FZP8A2PEQh7JcRqvyLpgfka+f+lA/9heWlz5KzGJz8sEZ/CtS65Svoz8VrMM94x4g37/Bk49wKwQdQvRUjwTOSnWfT6OJbfcte2L91tf+hrx94VhnX9pDMjDfzDBcfnXU+RuVhZREsB4r/axuFA6KPTuT3J9BUN9H3JTW5+sXGRIM6EycDO2psHGcdB26nfp0OgAzXM/UeOqOmgKmMamAJ6WsR1AAJvcQUpSlZXISlKURKUpREpSlESlKURKrnFOTrWZi4VoJDuZIToJPmw+w59WUmrHSsEAiCgJFwofgfD54AyS3H1hM5RmXTIo8mIOH98LUxUNzBx1bRQ7w3EinqYYy+n1bB2HqahuHfSRYy/8AMdP4kP8A46sfOmQU1OhVqnkaXdhP2VypUNPxsGLxLRPrhz9mKSIfMlmAHt19KoHHfpNuY20G3Fq398khPyPwqflmsrNHhn1nYWxPVzR9yF1ZmwMnaqhxn6Q7OA6VLTtnB8PGkfzHAPyzVEveffrCCK9tY548g4USRnI751mtaG34VNnL3doe32ZE/NGbH4VibWK6tH9IqUnTxNJ7h/RhPrefQKU43NY37+K9/cQP0VJo1eNQeyhANOfPXk981CScmSsT9WltboZ28OYK/wA1YYH+KpCP6OpJU12d1BcL5sHjPt0ff8KmuA/RecBrqXT5xxnUfm5H9B86zfVWhxHD0GRSrubE8rm4vEYRHkqnLyff6xH9Wly242BT5uPhX5kV1LkblNrRdUkrPIRjQGbw18xjOGPqR7edWeytFiRY0BCqMAEsT+JJJrarAAC5vF/q/EcRT+k4iOgifUmPHmUpSlZXLSlKURKUpREpSlESlKURKUpREpSlESozifAbW43nt4ZT5uilvkSMipOlFhVT/wBvrAENHG8TDoySzAj2+Pap614eiR+GS0inr4rFyffVn8K3aVm6kqValT/O4nuSfuqtd8hcOdtf1ZUP93qQH3CED8q3rDlWyh3jtowfMjU34tk/nU3SifVqYcGI4dpMemSUpSsQtEpSlESlKURKUpREpSlESlKURKUpREpSlESqDzNeOl2xRiNOgjc42AO48qv1U2eINxTDAEHrkZB/RHrVLjgS1jQYlwH3VrhCA5xImGlYOZ+KCaGB0OM+JqAPQjTsa2Oe5CDDgkbP0JH3aheYOFmCUqMlDkp7dx8un4VMc8JvAOvwsP8Atrn1XONOsX2PID3Bj3z8q2wNDqQbccxHn+FG3TmCVPq9w0h275GfunfBB8ql+ZOCyZluBMcYB0jI6ADHXHbyqat+A20bBljGRuCSxx6jJOK+8xj/AHWX+H/Srh4TCx+PLMAEwIHVV/8AEYntwdiSBJkqscu8JedfF8dl0vjG5zp0t971rDx9/wDfXVpGRMrlgTt8C9hU7yOpFu2Rj9I39FqE41Iq37tImtAVyuM5+BarPY1nDUzlJbMkxr1+ynY5zq7xsHREdFv8AtofHUpdNIQGOkqQDtp7++a88FlY38oLEgGXbO2zAdKz8G4rbmVVjtjGzZGrSu3Unpv2qGW/NveSyaC3xSDHTq3tWwfTYym4ERivExl1JK1wPc54IM4bTE59F0OlQnBOPC4Yr4ZQgZznI6gY6CpuurTqNqNxNMhc97HMOFwgpSlK3WqUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUpKJSlKzJRKUpWESlKURKUpREpSlEX/9k=`}
                                />
                              </ListItemAvatar>
                            </ListItemButton>
                          </Grid>
                          <Grid item lg={5} sx={{ mt: 1 }}>
                            <Typography variant="h7" fontFamily="cursive">
                              {" "}
                              Common Entrance Exam Test NPTEL (2022)
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              <b>Starts:</b> 10:00 AM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              {" "}
                              <b>Ends:</b> 1:00 PM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Button
                              className="button"
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              <span>More Details</span>
                            </Button>
                          </Grid>
                        </Grid>
                      </List>

                      <List
                        className="listClick"
                        dense
                        sx={{
                          mt: 1,
                          width: "100%",
                          bgcolor: "#FAFAFA",
                          cursor: "pointer",
                        }}
                      >
                        <Grid container>
                          <Grid item lg={1}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar
                                  alt={``}
                                  src={`https://upload.wikimedia.org/wikipedia/en/9/90/Orissa_University_of_Agriculture_and_Technology_logo.png`}
                                />
                              </ListItemAvatar>
                            </ListItemButton>
                          </Grid>
                          <Grid item lg={5} sx={{ mt: 1 }}>
                            <Typography variant="h7" fontFamily="cursive">
                              {" "}
                              Final Semester Examination OUAT (2022)
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              <b>Starts:</b> 10:00 AM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              {" "}
                              <b>Ends:</b> 1:00 PM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Button
                              className="button"
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              <span>More Details</span>
                            </Button>
                          </Grid>
                        </Grid>
                      </List>

                      <List
                        className="listClick"
                        dense
                        sx={{
                          mt: 1,
                          width: "100%",
                          bgcolor: "#FAFAFA",
                          cursor: "pointer",
                        }}
                      >
                        <Grid container>
                          <Grid item lg={1}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar
                                  alt={``}
                                  src={`https://upload.wikimedia.org/wikipedia/en/e/ec/Official_logo_of_Biju_Patanaik_University_of_Technology.png`}
                                />
                              </ListItemAvatar>
                            </ListItemButton>
                          </Grid>
                          <Grid item lg={5} sx={{ mt: 1 }}>
                            <Typography variant="h7" fontFamily="cursive">
                              {" "}
                              Common Entrance Exam Test BPUT (2022)
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              <b>Starts:</b> 10:00 AM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              {" "}
                              <b>Ends:</b> 1:00 PM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Button
                              className="button"
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              <span>More Details</span>
                            </Button>
                          </Grid>
                        </Grid>
                      </List>
                      <List
                        className="listClick"
                        dense
                        sx={{
                          mt: 1,
                          width: "100%",
                          bgcolor: "#FAFAFA",
                          cursor: "pointer",
                        }}
                      >
                        <Grid container>
                          <Grid item lg={1}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar
                                  alt={``}
                                  src="data:image/jpeg;base64,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"
                                />
                              </ListItemAvatar>
                            </ListItemButton>
                          </Grid>
                          <Grid item lg={5} sx={{ mt: 1 }}>
                            <Typography variant="h7" fontFamily="cursive">
                              {" "}
                              Multiple Choice Question Test Utkal University
                              (2022)
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              <b>Starts:</b> 10:00 AM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Typography variant="h7">
                              {" "}
                              <b>Ends:</b> 1:00 PM
                            </Typography>
                          </Grid>
                          <Grid item lg={2} sx={{ mt: 1 }}>
                            <Button
                              className="button"
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              <span> More Details </span>
                            </Button>
                          </Grid>
                        </Grid>
                      </List>
                    </CardContent>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grow>
      </Box>
    </div>
  );
};

export default Dashboard;
