import React from 'react';
import { Box, Typography } from '@mui/material';

const Settings: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings Page
      </Typography>
      <Typography variant="body1">
        This is the settings page where you can configure your preferences.
      </Typography>
    </Box>
  );
};

export default Settings;
