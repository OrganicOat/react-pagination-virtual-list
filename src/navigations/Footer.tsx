import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  // Update the active tab when the location changes
  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
        onChange={handleChange}
      >
        <BottomNavigationAction 
          label="Trending" 
          value="/trending" 
          icon={<StarIcon />} 
        />
        <BottomNavigationAction 
          label="Settings" 
          value="/settings" 
          icon={<SettingsIcon />} 
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
