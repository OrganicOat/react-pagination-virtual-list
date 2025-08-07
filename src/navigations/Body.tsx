import { Box } from "@mui/material";
import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingSpinner from '../components/element/LoadingSpinner'

const Body = () => {
  return (
  <Box>
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  </Box>
  )
}

export default Body;