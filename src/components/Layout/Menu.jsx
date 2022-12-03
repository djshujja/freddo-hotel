import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
            })}
        >
            <Button
                variant={"text"}
                color={"primary"}
                onClick={(_) => navigate("/main")}
            >
                Booking Form
            </Button>
            <Button
                variant='text'
                color={"primary"}
                onClick={(_) => navigate("/records")}
            >
                View Records
            </Button>
        </Box>
    );
}
