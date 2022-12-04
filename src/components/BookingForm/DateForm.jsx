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
        const days = Math.abs(moment().diff(data?.lastRentDate, "days")) + 1;
        console.log(days);
        setData({ ...data, totalDays: days });
    }, [data?.lastRentDate]);

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
                <Title>Current Date</Title>
                <TextField
                    name={"currentData"}
                    variant={"outlined"}
                    size={"small"}
                    value={moment(moment()).format("DD/MM/YYYY")}
                />
            </FBox>
            <FBox>
                <Title>Last Rent Date</Title>
                <TextField
                    type={"date"}
                    name={"lastRentDate"}
                    variant={"outlined"}
                    size={"small"}
                    fullWidth
                    onChange={handleChange}
                    value={data?.lastRentDate}
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
                    name={"totalDays"}
                    variant={"outlined"}
                    size={"small"}
                    inputProps={{
                        readOnly: true,
                    }}
                    value={data?.totalDays}
                />
            </FBox>
        </Box>
    );
}
