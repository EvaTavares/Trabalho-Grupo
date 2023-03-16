import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
  return (
    <Grid container justifyContent="space-between" style={{ width: '100vw', height: '100vh' }}>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Component />
        </Container>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          backgroundColor: '#025D97',
          marginTop: '20px',
          padding: '20px',
          height: '100px',
          bottom: '0',
          position: 'fixed',
          width: '100vw',
          alignItems: 'center',
          fontWeight: 'bold'
        }}
      >
        <Typography variant="h5">Links </Typography>
        <Typography variant="h5">Trabalhe Conosco </Typography>
        <Typography variant="h5">Redes Sociais </Typography>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
