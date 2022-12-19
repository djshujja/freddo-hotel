import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";
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
                background: "#EEEFF0",
            })}
        >
            <FBox>
                <Title>Booking Date</Title>
                <TextField
                    type={"date"}
                    onChange={handleChange}
                    name={"Date"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.Date}
                    required
                    fullWidth
                />
            </FBox>
            <FBox>
                <Title>Last Rent Date</Title>
                <TextField
                    type={"date"}
                    name={"LastRentDate"}
                    variant={"outlined"}
                    size={"small"}
                    fullWidth
                    onChange={handleChange}
                    value={data?.LastRentDate}
                    required
                />
            </FBox>
            <FBox>
                <Title>Check In Time:</Title>
                <div>
                    <TimePicker onChange={setInTime} value={inTime} />
                </div>
            </FBox>
            <FBox>
                <Title>Check Out Time:</Title>
                <div>
                    <TimePicker onChange={setOutTime} value={outTime} />
                </div>
            </FBox>
            <FBox>
                <Title>Total No. of Days</Title>
                <TextField
                    name={"TotalDays"}
                    variant={"outlined"}
                    size={"small"}
                    inputProps={{
                        readOnly: true,
                    }}
                    value={data?.TotalDays}
                />
            </FBox>
        </Box>
    );
}
