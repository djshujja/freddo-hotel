import React from "react";
import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

export default function RoomForm({ data, handleChange }) {
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
                <Title>Room Type</Title>
                <TextField
                    name={"roomType"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.roomType}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Room No.</Title>
                <TextField
                    name={"roomNo"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.roomNo}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Room Ext. No.</Title>
                <TextField
                    name={"roomExtNo"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.roomExtNo}
                    onChange={handleChange}
                />
            </FBox>
        </Box>
    );
}
