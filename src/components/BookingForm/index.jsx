import {
    Alert,
    Box,
    Button,
    Collapse,
    Grid,
    IconButton,
    Snackbar,
    useForkRef,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import ChargesForm from "./ChargesForm";
import CustomerForm from "./CustomerForm";
import DateForm from "./DateForm";
import PersonalInfoForm from "./PersonalInfoForm";
import React, { useEffect, useState } from "react";
import RoomForm from "./RoomForm";
import DriverForm from "./DriverForm";

export default function BookingForm() {
    const [showLoaded, setShowLoaded] = useState(true);
    const [showAdded, setShowAdded] = useState(false);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });
    const handleRecords = () => navigate("/records");
    const handleClear = (_) => setData(null);

    const handleSave = (_) => {
        setShowAdded(true);
        handleClear();
        console.table(data);
    };

    useEffect(() => {
        setTimeout(() => {
            setShowLoaded(false);
        }, 2000);
    }, []);

    return (
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <Box
                        sx={(theme) => ({
                            rowGap: 2,
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            flexDirection: "column",
                            mb: 5,
                        })}
                    >
                        <CustomerForm
                            data={data}
                            setData={setData}
                            handleChange={handleChange}
                        />
                        <DriverForm data={data} handleChange={handleChange} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={(theme) => ({
                            rowGap: 2,
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        })}
                    >
                        <RoomForm
                            setData={setData}
                            data={data}
                            handleChange={handleChange}
                        />
                        <DateForm
                            data={data}
                            handleChange={handleChange}
                            setData={setData}
                        />
                        <ChargesForm data={data} handleChange={handleChange} />
                        <Box
                            sx={(theme) => ({
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                columnGap: "25px",
                                px: 4,
                                mt: 4,
                            })}
                        >
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                onClick={handleRecords}
                            >
                                View Records
                            </Button>
                            <Button
                                variant={"contained"}
                                color={"error"}
                                onClick={handleClear}
                            >
                                Clear
                            </Button>
                            <Button
                                onClick={handleSave}
                                variant={"contained"}
                                color={"success"}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                {/* <Grid item xs={12}>
                    <Box
                        sx={(theme) => ({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            columnGap: "25px",
                            px: 4,
                            mt: 4,
                        })}
                    >
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={handleRecords}
                        >
                            View Records
                        </Button>
                        <Button
                            variant={"contained"}
                            color={"error"}
                            onClick={handleClear}
                        >
                            Clear
                        </Button>
                        <Button
                            onClick={handleSave}
                            variant={"contained"}
                            color={"success"}
                        >
                            Save
                        </Button>
                    </Box>
                </Grid> */}
            </Grid>
            <Snackbar
                open={showAdded}
                autoHideDuration={2500}
                onClose={(_) => setShowAdded(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={(_) => setShowAdded(false)}
                    severity='info'
                    sx={{ width: "100%" }}
                >
                    Records Added Successfully!
                </Alert>
            </Snackbar>
            <Snackbar
                open={showLoaded}
                autoHideDuration={1200}
                onClose={(_) => setShowLoaded(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={(_) => setShowLoaded(false)}
                    severity='success'
                    sx={{ width: "100%" }}
                >
                    Records Loaded Successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
}
