import { Box, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Employees() {
    const [data, setData] = useState(null);

    return (
        <Box>
            <Box>
                <Typography>Create New Employee</Typography>
            </Box>
        </Box>
    );
}
