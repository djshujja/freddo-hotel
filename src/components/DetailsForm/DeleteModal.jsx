import React, { useEffect, useState } from "react";

import {
    Modal,
    Box,
    Paper,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export default function DeleteModal({ open, handleClose, onDelete }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const PASSWORD = "Fresine";
    const checkPassword = (e) => {
        e.preventDefault();
        setError(false);
        if (password.toLowerCase() === PASSWORD.toLowerCase()) {
            onDelete();
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        if (password === "") setError(false);
    }, [password]);

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
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 2,
                    })}
                    component={"form"}
                    onSubmit={checkPassword}
                >
                    <Box
                        sx={(theme) => ({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 2,
                        })}
                    >
                        <Typography
                            component={"h2"}
                            variant='h5'
                            fontWeight={"bold"}
                        >
                            Delete
                        </Typography>
                        <Close
                            sx={(theme) => ({
                                cursor: "pointer",
                            })}
                            onClick={handleClose}
                        />
                    </Box>

                    <Typography>Please enter password to proceed</Typography>
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size={"small"}
                        error={error}
                        helperText={error && "Wrong password, try again!"}
                        fullWidth
                    />
                    <Box>
                        <Button
                            type='submit'
                            variant='contained'
                            color={"error"}
                            fullWidth
                        >
                            Delete
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Modal>
    );
}
