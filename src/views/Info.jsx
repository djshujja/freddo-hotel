import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function Info() {
    return (
        <Box
            sx={(theme) => ({
                bgcolor: "#070F4E",
                minHeight: "100vh",
                pt: 5,
            })}
        >
            <Paper
                sx={(theme) => ({
                    mx: 10,
                    my: 6,
                    py: 10,
                })}
            >
                <Box>
                    <Box
                        sx={(theme) => ({
                            textAlign: "center",
                        })}
                    >
                        <Typography
                            component={"p"}
                            sx={(theme) => ({
                                fontStyle: "italic",
                            })}
                        >
                            Developed By
                        </Typography>
                        <Typography
                            component={"h3"}
                            sx={(theme) => ({
                                fontSize: "32px",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                            })}
                        >
                            Shujja - Computer Data Shred
                        </Typography>
                        <Typography
                            component={"p"}
                            sx={(theme) => ({
                                fontStyle: "italic",
                            })}
                        >
                            Developed For
                        </Typography>
                        <Typography
                            component={"h3"}
                            sx={(theme) => ({
                                fontSize: "32px",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                            })}
                        >
                            Freddo Hotel
                        </Typography>
                        <Typography>
                            Please
                            <a href='mailto:shujjaahmed999@gmail.com'>
                                contact
                            </a>
                            the developers for support.
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
