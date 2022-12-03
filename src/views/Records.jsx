import React from "react";
import { Box, Typography } from "@mui/material";
import RecordsTable from "../components/Records/RecordsTable";

export default function Records() {
    return (
        <Box
            sx={(theme) => ({
                [theme.breakpoints.up("xs")]: {
                    margin: "0px 25px",
                },
            })}
        >
            <Box>
                <Box
                    sx={(theme) => ({
                        mt: 5,
                        mb: 5,
                    })}
                >
                    <Typography
                        textAlign={"center"}
                        variant={"h4"}
                        fontWeight={"bold"}
                    >
                        All Records
                    </Typography>
                </Box>
                <RecordsTable />
            </Box>
        </Box>
    );
}
