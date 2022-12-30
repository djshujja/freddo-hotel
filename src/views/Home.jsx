import { Box, Button, Typography } from "@mui/material";

import NavigateNext from "@mui/icons-material/NavigateNext";
import React from "react";
import { useNavigate } from "react-router-dom";
import save from "../message-control/renderer";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
export default function Home() {
    const _navigate = useNavigate();
    const handleProceed = () => _navigate("/main");
    const handleLogout = () => _navigate("/");

    return (
        <Box
            sx={(theme) => ({
                background: "#070F4E",
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
                    color: "#070F4E",
                    p: 5,
                    borderRadius: 5,
                })}
            >
                <Typography variant='h2' fontWeight={700}>
                    FREDDO PARK HOTEL
                </Typography>
                <Typography variant={"h2"} fontSize={32}>
                    Customers Portal
                </Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                })}
            >
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
                <Button
                    variant={"contained"}
                    color={"error"}
                    disableElevation
                    onClick={handleLogout}
                >
                    Logout{"  "} <ExitToAppIcon />
                </Button>
            </Box>
        </Box>
    );
}
