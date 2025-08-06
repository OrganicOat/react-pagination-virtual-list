import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import Header from './navigations/Header';
import Footer from './navigations/Footer';
import Body from './navigations/Body';

// Create a theme instance
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        paddingBottom: '56px' // Height of the BottomNavigation
      }}>
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
