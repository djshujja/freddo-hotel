import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function LoginScreen() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const PASSWORD = "Rosen";
    const navigate = useNavigate();

    const checkPassword = (e) => {
        e.preventDefault();
        setError(false);
        if (password.toLowerCase() === PASSWORD.toLowerCase()) {
            navigate("/home");
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        if (password === "") setError(false);
    }, [password]);

    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#070F4E",
                textAlign: "center",
                minHeight: "100vh",
            })}
            component='form'
            onSubmit={checkPassword}
        >
            <Box
                sx={(theme) => ({
                    borderRadius: 5,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "15px",
                    bgcolor: "#fff",
                    p: 5,
                })}
            >
                <Typography component={"h2"} variant='h5' fontWeight={"bold"}>
                    Login
                </Typography>
                <Typography>Please enter password to proceed:</Typography>
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
                        color={"success"}
                        fullWidth
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
