import { AppBar, Toolbar, Typography } from '@mui/material';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { displayPageTitle } from '@/utils';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0} 
      sx={{
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: '#E2E2E2',
      }}
    >
      <Toolbar>
        <Typography variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }}>
          {displayPageTitle(location.pathname)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
