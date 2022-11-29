import { Box, Grid } from "@mui/material";

import ChargesForm from "./ChargesForm";
import CustomerForm from "./CustomerForm";
import DateForm from "./DateForm";
import PersonalInfoForm from "./PersonalInfoForm";
import React from "react";
import RoomForm from "./RoomForm";

export default function BookingForm() {
  return (
    <Box>
      <Grid container rowGap={2}>
        <Grid item md={6}>
          <Box
            sx={(theme) => ({
              rowGap: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            })}
          >
            <CustomerForm />
            <DateForm />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={(theme) => ({
              rowGap: 2,
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
      </Grid>
    </Box>
  );
}
