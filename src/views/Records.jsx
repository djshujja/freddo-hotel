import React from "react";
import { Box, Typography } from "@mui/material";
import RecordsTable from "../components/Records/RecordsTable";

export default function Records() {
    return (
        <Box
            sx={(theme) => ({
                bgcolor: "#070F4E",
                minHeight: "100vh",
                [theme.breakpoints.up("xs")]: {
                    padding: "0px 25px",
                },
            })}
        >
            <Box>
                <Box
                    sx={(theme) => ({
                        pt: 5,
                        pb: 5,
                    })}
                >
                    <Typography
                        textAlign={"center"}
                        variant={"h4"}
                        fontWeight={"bold"}
                        color='#fff'
                    >
                        All Records
                    </Typography>
                </Box>
                <RecordsTable />
            </Box>
        </Box>
    );
}
