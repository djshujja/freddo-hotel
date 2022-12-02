import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

import React from "react";
import moment from "moment/moment";

export default function DateForm({ data, setData, handleChange }) {
    return (
        <Box
            py={2}
            px={4}
            display={"flex"}
            flexDirection={"column"}
            rowGap={1}
            sx={(theme) => ({
                border: "1px solid #000",
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
                    onChange={(e) => {
                        setData({
                            ...data,
                            lastRentDate: moment(e.target.value).format(
                                "DD/MM/YYYY"
                            ),
                        });
                    }}
                    value={moment().format("DD/MM/YYYY")}
                />
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
