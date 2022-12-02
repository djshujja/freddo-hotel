import { Box, Typography, styled } from "@mui/material";

export const FBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Title = styled(Typography)(({ theme, w }) => ({
  fontSize: 18,
  minWidth: w || 180,
}));
