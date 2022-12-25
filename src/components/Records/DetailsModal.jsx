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
import DetailsForm from "../DetailsForm";

export default function DetailsModal({ data, open, handleClose, onDelete }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
            })}
        >
            <Box
                sx={(theme) => ({
                    maxHeight: "100%",
                })}
            >
                <Paper
                    sx={(theme) => ({
                        p: 2,
                        px: 4,
                    })}
                >
                    <Box>
                        <Box
                            sx={(theme) => ({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 2,
                            })}
                        >
                            <Typography
                                sx={(theme) => ({
                                    fontWeight: "bold",
                                    fontSize: 24,
                                    textTransform: "uppercase",
                                    textAlign: "center",
                                })}
                            >
                                Booking Details
                            </Typography>
                            <Close
                                sx={(theme) => ({
                                    cursor: "pointer",
                                })}
                                onClick={handleClose}
                            />
                        </Box>
                        <Grid container>
                            <DetailsForm
                                onDelete={onDelete}
                                oldData={data}
                                handleClose={handleClose}
                            />
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Modal>
    );
}
