import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Form from '../components/Form';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="bg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3">Home</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={5} style={{ padding: '20px' }}>
            <Typography variant="h3" style={{ color: '#025D97', fontWeight: 'bold', textAlign: 'center' }}>
              Isso é Data Science
            </Typography>
            <br />
            <Typography variant="body1">
              Análise, Captura, Curadoria de Dados, Pesquisa, Compartilhamento, Armazenamento, Transferência,
              Visualizações e informações acerca da privacidade dos dados. Isso é Data Science
            </Typography>
            <br />
            <Button style={{ marginTop: '10px' }} variant="outlined">
              Entrar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
