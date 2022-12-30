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
import deleteData from "../../message-control/deleteData";
import DeleteModal from "./DeleteModal";

export default function DetailsForm({ oldData, handleClose, onDelete }) {
    const [showLoaded, setShowLoaded] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [data, setData] = useState({
        Date: moment(moment(Date.now())).format("DD/MM/YYYY"),
        Total: 0,
        Rate: 0,
    });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });
    const closeModal = () => handleClose();
    const handleDelete = (_) => {
        deleteData(oldData?.ID)
            .then((res) => {
                console.log("Data Deleted", res);
                onDelete(oldData?.ID);
                handleClose();
            })
            .catch((e) => console.log(`Error while deleting ${oldData?.ID}`));
    };

    useEffect(() => {
        setTimeout(() => setShowLoaded(false), 2000);
    }, []);

    useEffect(() => {
        if (oldData) setData({ ...oldData });
        console.log("Old Data => ", oldData);
    }, [oldData]);

    return (
        <Box>
            <DeleteModal
                open={openDeleteModal}
                onDelete={handleDelete}
                handleClose={(_) => setOpenDeleteModal(false)}
            />
            <Grid container columnSpacing={5}>
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
                                onClick={closeModal}
                            >
                                Close
                            </Button>
                            <Button
                                type={"button"}
                                variant={"contained"}
                                color={"error"}
                                onClick={(_) => setOpenDeleteModal(true)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
