import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ChargesForm from "./ChargesForm";
import CustomerForm from "./CustomerForm";
import DateForm from "./DateForm";
import PersonalInfoForm from "./PersonalInfoForm";
import React, { useState } from "react";
import RoomForm from "./RoomForm";

export default function BookingForm() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });
    const handleRecords = () => navigate("/records");
    const handleClear = (_) => setData(null);

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
                        })}
                    >
                        <CustomerForm data={data} handleChange={handleChange} />
                        <DateForm
                            data={data}
                            handleChange={handleChange}
                            setData={setData}
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
                        <RoomForm data={data} handleChange={handleChange} />
                        <PersonalInfoForm
                            data={data}
                            handleChange={handleChange}
                        />
                        <ChargesForm data={data} handleChange={handleChange} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
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
                        <Button variant={"contained"} color={"success"}>
                            Save
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
