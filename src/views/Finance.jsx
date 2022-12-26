import React from "react";
import { Box } from "@mui/material";
import FinanceComponent from "../components/Finance";

export default function Finance() {
    return (
        <Box
            sx={(theme) => ({
                bgcolor: "#070F4E",
                minHeight: "100vh",
            })}
        >
            <FinanceComponent />;
        </Box>
    );
}
