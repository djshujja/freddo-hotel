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
import React, { useEffect, useState } from "react";

import moment from "moment";
import ChargesForm from "./ChargesForm";
import CustomerForm from "./CustomerForm";
import DateForm from "./DateForm";
import DriverForm from "./DriverForm";
import RoomForm from "./RoomForm";
import send from "../../message-control/renderer";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ oldData }) {
    const [error, setError] = useState(false);
    const [showAdded, setShowAdded] = useState(false);
    const [data, setData] = useState({
        Date: moment(moment(Date.now())).format("DD/MM/YYYY"),
        Total: 0,
        Tax: 0,
    });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });
    const handleRecords = () => navigate("/records");
    const handleSave = (_) => {
        _.preventDefault();
        if (error) return;
        const _data = {
            ...data,
            Date: moment(data?.Date).format("DD/MM/YYYY"),
            LastRentDate: moment(data?.LastRentDate).format("DD/MM/YYYY"),
            DOB: moment(data?.DOB).format("DD/MM/YYYY"),
        };

        send(_data)
            .then((res) => {
                console.log("Response from server ", res);
                setShowAdded(true);
            })
            .catch((e) => console.log("Error from server", e));
    };

    useEffect(() => {
        if (oldData) setData({ ...oldData });
        console.log("Old Data => ", oldData);
    }, [oldData]);

    return (
        <Box onSubmit={handleSave} component={"form"}>
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
                        <DriverForm
                            data={data}
                            setData={setData}
                            handleChange={handleChange}
                        />
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
                            error={error}
                            setError={setError}
                            data={data}
                            handleChange={handleChange}
                            setData={setData}
                        />
                        <ChargesForm
                            setData={setData}
                            data={data}
                            handleChange={handleChange}
                        />
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
                                type={"button"}
                                variant={"contained"}
                                color={"primary"}
                                onClick={handleRecords}
                            >
                                View Records
                            </Button>
                            <Button
                                type={"submit"}
                                variant={"contained"}
                                color={"success"}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={showAdded}
                autoHideDuration={5000}
                onClose={(_) => setShowAdded(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={(_) => setShowAdded(false)}
                    severity='success'
                    sx={{ width: "100%" }}
                >
                    Added Successfully!
                </Alert>
            </Snackbar>
            <Snackbar
                open={error}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity='error' sx={{ width: "100%" }}>
                    Please fix the errors before you submit the form.
                </Alert>
            </Snackbar>
        </Box>
    );
}
