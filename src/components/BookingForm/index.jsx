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
      </Grid>
    </Box>
  );
}
