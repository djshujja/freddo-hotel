import {
    Modal,
    Typography,
    styled,
    Button,
    Box,
    Paper,
    Grid,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import React from "react";
import Main from "../../views/Main";
import BookingForm from "../BookingForm";

export default function DetailsModal({ data, open, handleClose }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={(theme) => ({
                diplay: "flex",
            })}
        >
            <Box
                sx={(theme) => ({
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                })}
            >
                <Paper
                    sx={(theme) => ({
                        p: 2,
                    })}
                >
                    <Box>
                        <Box
                            sx={(theme) => ({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            })}
                        >
                            <Typography
                                sx={(theme) => ({
                                    fontWeight: "bold",
                                    fontSize: 24,
                                    textTransform: "uppercase",
                                })}
                            >
                                Details
                            </Typography>
                            <Close onClick={handleClose} />
                        </Box>

                        <Grid container>
                            <BookingForm oldData={data} />
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Modal>
    );
}
