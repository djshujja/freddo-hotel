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
import CloseIcon from "@mui/icons-material/Close";
import CustomerForm from "./CustomerForm";
import DateForm from "./DateForm";
import DriverForm from "./DriverForm";
import PersonalInfoForm from "./PersonalInfoForm";
import RoomForm from "./RoomForm";
import send from "../../message-control/renderer";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ oldData }) {
    const [showLoaded, setShowLoaded] = useState(false);
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
    const handleClear = (_) => setData(null);

    const handleSave = (_) => {
        _.preventDefault();
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
                handleClear();
            })
            .catch((e) => console.log("Error from server", e));
    };

    useEffect(() => {
        setTimeout(() => {
            setShowLoaded(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (oldData) setData({ ...oldData });
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
                                type={"button"}
                                variant={"contained"}
                                color={"error"}
                                onClick={handleClear}
                            >
                                Clear
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
        </Box>
    );
}
