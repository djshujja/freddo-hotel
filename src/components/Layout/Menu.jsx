import { Box, Button as MUIButton, styled } from "@mui/material";

import { useNavigate } from "react-router-dom";
import React from "react";

const Button = styled(MUIButton)(({ theme }) => ({
    color: "#070F4E",
    fontWeight: "bold",
    fontSize: "16px",
}));

export default function Menu() {
    const navigate = useNavigate();
    return (
        <Box
            sx={(theme) => ({
                bgcolor: "#BBE1FA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
            })}
        >
            <Button
                variant={"text"}
                color={"primary"}
                onClick={(_) => navigate("/")}
            >
                Home
            </Button>
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
            <Button
                variant='text'
                color={"primary"}
                onClick={(_) => navigate("/info")}
            >
                Info
            </Button>
        </Box>
    );
}
