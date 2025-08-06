import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/trending':
        return 'Trending Repos';
      case '/settings':
        return 'Settings Repos';
      default:
        return '';
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <Toolbar>
        <Typography variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {getPageTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
