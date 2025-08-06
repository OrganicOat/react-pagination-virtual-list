import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
      <CircularProgress size={24} />
    </Box>
  )
}

export default LoadingSpinner;