import { Box, Button, Grid } from "@mui/material";

import ChargesForm from "./ChargesForm";
import CustomerForm from "./CustomerForm";
import DateForm from "./DateForm";
import PersonalInfoForm from "./PersonalInfoForm";
import React from "react";
import RoomForm from "./RoomForm";

export default function BookingForm() {
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
                        <CustomerForm />
                        <DateForm />
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
                        <RoomForm />
                        <PersonalInfoForm />
                        <ChargesForm />
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
                        <Button variant={"contained"} color={"primary"}>
                            View Records
                        </Button>
                        <Button variant={"contained"} color={"error"}>
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
