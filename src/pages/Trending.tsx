import React from 'react';
import TrendingList from '../components/Trending/TrendingList';
import { Box } from '@mui/material';

const Trending: React.FC = () => {
  return (
    <Box sx={{ px: 3 }}>
      <TrendingList />
    </Box>
  );
};

export default Trending;
