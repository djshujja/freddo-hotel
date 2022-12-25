import { Box, Typography, styled } from "@mui/material";

export const FBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

export const DBox = styled(Box)(({ theme }) => ({
    display: "flex",
    columnGap: "15px",
    alignItems: "center",
}));

export const Title = styled(Typography)(({ theme, w }) => ({
    fontSize: 18,
    minWidth: w || 180,
}));

export const ValueField = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
}));
