import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import videoBg from "../assets/videoBg.mp4";
import Form from "./Form";

export default function BoxSx() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="main">
          <video src={videoBg} autoPlay loop muted />
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="inside">
                  <h1>Empowering your businnes</h1>
                  <h2>with data science and AI technology</h2>
                </div>
                <div className="inside">
                  <p>
                    Systems are deployed in grocery, cosmetic, and othe
                    commercial sites helping them automate the tasks.
                  </p>
                  <Button
                    style={{
                      marginTop: "10px",
                      color: "#51048F",
                      backgroundColor: "#89FDFE",
                    }}
                    variant="outlined"
                  >
                    Entrar
                  </Button>
                </div>
              </div>
              <div className="row">
                <Form />
              </div>
            </div>
          </div>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#51048F",
              padding: "20px",
              height: "100px",
              bottom: "0",
              position: "fixed",
              width: "100vw",
              alignItems: "center",
              fontWeight: "bold",
              color: "#89FDFE",
            }}
          >
            <Typography variant="h5">Links </Typography>
            <Typography variant="h5">Trabalhe Conosco </Typography>
            <Typography variant="h5">Redes Sociais </Typography>
          </Grid>
        </div>
      </Box>
    </>
  );
}
