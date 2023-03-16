import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";

export default function BasicTextFields() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "#51048F",
          borderRadius: "10px",
          justifyContent: " center",
          padding: "20px",
        }}
      >
        <Typography variant="h3" sx={{ color: "#89FDFE", textAlign: "center" }}>
          Tenho interesse!
        </Typography>
        <Box
          style={{
            alignItems: "center",
            borderRadius: "15px",
            backgroundColor: "#51048F",
            opacity: "0.5",
          }}
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "45ch",
              background: " #fff",
              borderRadius: "10px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth id="demo-helper-text-misaligned" label="Name" />
          <TextField
            fullWidth
            id="demo-helper-text-misaligned-no-helper"
            label="E-mail"
          />
          <TextField
            fullWidth
            id="demo-helper-text-misaligned-no-helper"
            label="Telefone"
          />
        </Box>
        <Button
          style={{
            marginTop: "10px",
            color: "#51048F",
            backgroundColor: "#89FDFE",
          }}
          variant="outlined"
        >
          REGISTRAR INTERESSE
        </Button>
      </Grid>
    </>
  );
}
