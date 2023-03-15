import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export default function BasicTextFields() {
  return (
    <>
      <Grid container style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
        <Box
          style={{ alignItems: 'center' }}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '67ch' }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="demo-helper-text-misaligned" label="Name" />
          <TextField id="demo-helper-text-misaligned-no-helper" label="E-mail" />
          <TextField id="demo-helper-text-misaligned-no-helper" label="Telefone" />
        </Box>
      </Grid>
    </>
  );
}
