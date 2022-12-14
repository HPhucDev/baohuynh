import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import CardHappy from "./Card";
import Player from "./Player";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

function App() {
  const [value, setValue] = useState(0);
  const [page2, setPage2] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openError2, setOpenError2] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleOpenError = () => setOpenError(true);
  const handleCloseError = () => setOpenError(false);
  const handleOpenError2 = () => setOpenError2(true);
  const handleCloseError2 = () => setOpenError2(false);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);
  const [active, setActive] = useState({
    active0: false,
    active1: true,
    active2: true,
    active3: true,
    active4: true,
    active5: true,
    active6: true,
  });
  const [success, setSuccess] = useState({
    active0: false,
    active1: false,
    active2: false,
    active3: false,
    active4: false,
    active5: false,
    active6: false,
  });

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleNextPage = (page) => {
    switch (page) {
      case 1:
        setActive({ ...active, active0: true, active1: false });
        setValue(page);
        break;
      case 2:
        setActive({ ...active, active1: true, active2: false });
        setValue(page);
        break;
      case 3:
        setActive({ ...active, active2: true, active3: false });
        setValue(page);
        break;
      case 4:
        setActive({ ...active, active3: true, active4: false });
        setValue(page);
        break;
      case 5:
        setActive({ ...active, active4: true, active5: false });
        setValue(page);
        break;
      case 6:
        setActive({ ...active, active5: true, active6: false });
        setValue(page);
        break;
      case 7:
        setPage2(true);
        break;
    }
  };

  return (
    <>
      <Modal
        open={openError}
        onClose={handleCloseError}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="100%"
            image={require("./images/error.jpg")}
            alt="File1"
          />
        </Box>
      </Modal>
      <Modal
        open={openError2}
        onClose={handleCloseError2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="100%"
            image={require("./images/error2.jpg")}
            alt="File1"
          />
        </Box>
      </Modal>
      <Modal
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <CardMedia
            component="img"
            height="100%"
            image={require("./images/success.jpg")}
            alt="File1"
          />
        </Box>
      </Modal>
      <div className="App">
        <Container maxWidth="lg">
          {page2 === false && (
            <Box sx={{ height: "100vh" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label="C??u h???i 1"
                    {...a11yProps(0)}
                    disabled={active.active0}
                  />
                  <Tab
                    label="C??u h???i 2"
                    {...a11yProps(1)}
                    disabled={active.active1}
                  />
                  <Tab
                    label="C??u h???i 3"
                    {...a11yProps(2)}
                    disabled={active.active2}
                  />
                  <Tab
                    label="C??u h???i 4"
                    {...a11yProps(3)}
                    disabled={active.active3}
                  />
                  <Tab
                    label="C??u h???i 5"
                    {...a11yProps(4)}
                    disabled={active.active4}
                  />
                  <Tab
                    label="C??u h???i 6"
                    {...a11yProps(5)}
                    disabled={active.active5}
                  />
                  <Tab
                    label="C??u h???i 7"
                    {...a11yProps(6)}
                    disabled={active.active6}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Card sx={{ maxWidth: "70%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="70%"
                          image={require("./images/File1.jpg")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="Who???s this?" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              X??
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              N???i
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{
                                width: "150px",
                                backgroundColor: success.active0 && "#bef3be",
                              }}
                              variant="outlined"
                              onClick={() => {
                                setSuccess({ ...success, active0: true });
                              }}
                            >
                              G??o
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Ch???u
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active0 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(1)}
                          >
                            Ti???p theo n??o...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={8}>
                    <Card sx={{ maxWidth: "70%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="70%"
                          image={require("./images/File2.jpg")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="C??n ????y?" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "150px",
                                backgroundColor: success.active1 && "#bef3be",
                              }}
                              onClick={() => {
                                setSuccess({ ...success, active1: true });
                              }}
                            >
                              Th???o
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError2}
                            >
                              Yoona
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError2}
                            >
                              Suzy
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError2}
                            >
                              Kim Tae - Hee
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active1 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(2)}
                          >
                            Ti???p theo n??o...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container justifyContent={"space-between"}>
                  <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="Hai con kh???a n??y l?? ai?" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Hai con ????? ngh??o kh???
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "150px",
                                backgroundColor: success.active2 && "#bef3be",
                              }}
                              onClick={() => {
                                handleOpenSuccess();
                                setSuccess({ ...success, active2: true });
                              }}
                            >
                              Hai con ng?????i d??? th????ng
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Hai con ???t ?? Kim Long
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Hai con s??c z???t
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active2 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(3)}
                          >
                            Ti???p theo n??o...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={7}>
                    <Card sx={{ width: "80%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="80%"
                          image={require("./images/File3.jpg")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={8}>
                    <Card sx={{ width: "50%", padding: 0 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="65%"
                          image={require("./images/File4.jpg")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="Anh c?? nh??? ch??ng ta ???? ??i ???? N???ng v??o ng??y n??o khum?" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              01/06/2022
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "150px",
                                backgroundColor: success.active3 && "#bef3be",
                              }}
                              onClick={() => {
                                setSuccess({ ...success, active3: true });
                              }}
                            >
                              02/06/2022
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              03/06/2022
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              04/06/2022
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active3 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(4)}
                          >
                            Ti???p theo n??o...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={8}>
                    <Card sx={{ width: "80%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="80%"
                          image={require("./images/File5.jpg")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="Anh l?? ai?" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              B???o Nguy???n
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "150px",
                                backgroundColor: success.active4 && "#bef3be",
                              }}
                              onClick={() => {
                                setSuccess({ ...success, active4: true });
                              }}
                            >
                              B???o Hu???nh
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              B???o Tr???n
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              B???o Ng??
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active4 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(5)}
                          >
                            Ti???p theo n??o...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={8}>
                    <Card sx={{ width: "80%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="80%"
                          image={require("./images/File6.jpg")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="Anh sinh ng??y n??o?" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              26.11.1996
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "150px",
                                backgroundColor: success.active5 && "#bef3be",
                              }}
                              onClick={() => {
                                setSuccess({ ...success, active5: true });
                              }}
                            >
                              26.11.1997
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              26.11.1998
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "150px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              26.11.1999
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active5 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(6)}
                          >
                            Ti???p theo n??o...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs={6}>
                    <Card sx={{ width: "90%" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="80%"
                          image={require("./images/File7.png")}
                          alt="File1"
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card sx={{ maxWidth: "100%" }}>
                      <CardHeader title="B?????c sang tu???i m???i, anh ph???i:" />
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "240px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Lu??n vui v???
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "240px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Lu??n m???nh kho???
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              sx={{ width: "240px" }}
                              variant="outlined"
                              onClick={handleOpenError}
                            >
                              Lu??n th??nh c??ng
                            </Button>
                          </Grid>
                          <Grid item xs={6} md={6}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "240px",
                                backgroundColor: success.active6 && "#bef3be",
                              }}
                              onClick={() => {
                                setSuccess({ ...success, active6: true });
                              }}
                            >
                              C??? 3 ph????ng ??n tr??n
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        {success.active6 && (
                          <Button
                            size="small"
                            onClick={() => handleNextPage(7)}
                          >
                            One more thing...
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          )}
          {page2 === true && (
            <div style={{ marginTop: "100px" }}>
              <Grid container justifyContent={"center"}>
                <CardHappy />
              </Grid>
            </div>
          )}
          <div style={{marginTop:"50px"}}>
            <AudioPlayer
              autoPlay={true}
              loop={true}
              src={require("./images/music.mp3")}
              onPlay={(e) => console.log("onPlay")}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
