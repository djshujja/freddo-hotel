import { Box, TextField } from "@mui/material";
import { DBox, Title, ValueField } from "../Styled/Globals";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useEffect, useState } from "react";
import moment from "moment/moment";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import TimePicker from "react-time-picker";
export default function DateForm({ data, setData, handleChange }) {
    const [inTime, setInTime] = useState("");
    const [outTime, setOutTime] = useState("");

    useEffect(() => {
        const days = Math.abs(moment().diff(data?.LastRentDate, "days")) + 1;
        console.log(days);
        setData({ ...data, TotalDays: days });
    }, [data?.LastRentDate]);

    useEffect(() => {
        setData({ ...data, CheckInTime: inTime, CheckOutTime: outTime });
    }, [inTime, outTime]);

    return (
        <Box
            py={2}
            px={4}
            display={"flex"}
            flexDirection={"column"}
            rowGap={1}
            sx={(theme) => ({
                border: "1px solid #000",
                minWidth: "340px",
                background: "#EFF5F5",
                borderRadius: "5px",
            })}
        >
            <DBox>
                <Title>Booking Date</Title>
                <ValueField>{data?.Date}</ValueField>
            </DBox>
            <DBox>
                <Title>Last Rent Date</Title>
                <ValueField>{data?.LastRentDate}</ValueField>
            </DBox>
            <DBox>
                <Title>Check In Time:</Title>
                <ValueField>{data?.CheckInTime}</ValueField>
            </DBox>
            <DBox>
                <Title>Check Out Time:</Title>
                <ValueField>{data?.CheckOutTime}</ValueField>
            </DBox>
            <DBox>
                <Title>Total No. of Days</Title>
                <ValueField>{data?.TotalDays}</ValueField>
            </DBox>
        </Box>
    );
}
