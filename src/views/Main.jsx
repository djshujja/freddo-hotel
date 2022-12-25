import BookingForm from "../components/BookingForm";
import { Box } from "@mui/material";
import React from "react";

export default function Main() {
    return (
        <Box
            width={"100%"}
            pt={5}
            sx={(theme) => ({
                bgcolor: "#070F4E",
                height: "100%",
            })}
        >
            <BookingForm />
        </Box>
    );
}
