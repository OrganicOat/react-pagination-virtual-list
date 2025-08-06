import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Star, Settings } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const onNavigateActionChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper 
      sx={{
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000
      }} 
      elevation={3}
    >
      <BottomNavigation 
        showLabels 
        value={value}
        onChange={onNavigateActionChange}
        style={{ background: '#E2E2E2' }}
      >
        <BottomNavigationAction 
          label="Trending" 
          value="/trending" 
          icon={<Star />} 
        />
        <BottomNavigationAction 
          label="Settings" 
          value="/settings" 
          icon={<Settings />} 
        />
      </BottomNavigation>
    </Paper>
  );
};

export default memo(Footer);
