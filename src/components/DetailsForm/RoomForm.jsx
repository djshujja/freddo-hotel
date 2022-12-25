import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { DBox, Title, ValueField } from "../Styled/Globals";

export default function RoomForm({ data, setData, handleChange }) {
    return (
        <Box
            py={2}
            px={4}
            display={"flex"}
            flexDirection={"column"}
            rowGap={1}
            sx={(theme) => ({
                border: "1px solid #000",
                background: "#EFF5F5",
                minWidth: "340px",
                borderRadius: "5px",
            })}
        >
            <DBox>
                <Title>Room Type</Title>
                <ValueField>{data?.RoomType}</ValueField>
            </DBox>
            <DBox>
                <Title>Room No.</Title>
                <ValueField>{data?.RoomNo}</ValueField>
            </DBox>
            <DBox>
                <Title>Room Ext. No.</Title>
                <ValueField>{data?.RoomExtNo}</ValueField>
            </DBox>
        </Box>
    );
}
