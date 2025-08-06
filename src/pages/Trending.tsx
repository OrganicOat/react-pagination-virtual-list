import React from 'react';
import { Box, Typography } from '@mui/material';

const Trending: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Trending Page
      </Typography>
      <Typography variant="body1">
        This is the trending content page.
      </Typography>
    </Box>
  );
};

export default Trending;
