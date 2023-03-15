import React from 'react';
import { ThemeProvider } from '@mui/material';
import GlobalStyles from './config/GlobalStyles';
import defaultTheme from './config/theme/defaultTheme';
import AppRoutes from './routes/AppRoutes';
import '../src/pages/home.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="container">
        <GlobalStyles />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
