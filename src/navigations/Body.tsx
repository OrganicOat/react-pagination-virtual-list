import { Box } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Body() {
  return (
  <div style={{ flex: 1, overflowY: 'auto' }}>
    <Suspense fallback={<div>Loading...</div>}>
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Suspense>
  </div>
  )
}