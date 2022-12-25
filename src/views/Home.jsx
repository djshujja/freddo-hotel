import { Box, Button, Typography } from "@mui/material";

import NavigateNext from "@mui/icons-material/NavigateNext";
import React from "react";
import { useNavigate } from "react-router-dom";
import save from "../message-control/renderer";

export default function Home() {
    const _navigate = useNavigate();
    const handleProceed = () => _navigate("/main");
    const handleSQL = (e) => {
        e.preventDefault();
        save()
            .then((res) => console.log("res from server", res))
            .catch((e) => console.log(e));
    };

    return (
        <Box
            sx={(theme) => ({
                background:'#070F4E',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "100vh",
            })}
        >
            <Box
                sx={(theme) => ({
                    bgcolor: "#BBE1FA",
                    color: "#0F4C75",
                    p: 5,
                    borderRadius: 5,
                })}
            >
                <Typography variant='h1' fontWeight={700}>
                    FREDDO HOTEL
                </Typography>
                <Typography variant={"h2"} fontSize={32}>
                    Employee Portal
                </Typography>
            </Box>
            <Box my={2}>
                <Button
                    variant={"contained"}
                    sx={(theme) => ({
                        backgroundColor: "#0F4C75",
                        color: "#fff",
                        ":hover": {
                            backgroundColor: "#BBE1FA",
                            color: "#070F4E",
                        },
                    })}
                    disableElevation
                    onClick={handleProceed}
                >
                    Proceed <NavigateNext />{" "}
                </Button>
            </Box>
        </Box>
    );
}
