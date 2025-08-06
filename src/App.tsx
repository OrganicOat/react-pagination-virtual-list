import { createTheme, ThemeProvider } from '@mui/material';
import Header from './navigations/Header';
import Footer from './navigations/Footer';
import Body from './navigations/Body';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
