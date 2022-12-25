import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { DBox, Title, ValueField } from "../Styled/Globals";

export default function DriverForm({ data, setData, handleChange }) {
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
                <Title>Driver Name</Title>
                <ValueField>{data?.DriverName || "-"}</ValueField>
            </DBox>
            <DBox>
                <Title>Driver Phone</Title>
                <ValueField>{data?.DriverPhone || "-"}</ValueField>
            </DBox>
            <DBox>
                <Title>Identity Type</Title>
                <ValueField>{data?.DriverIDType || "-"}</ValueField>
            </DBox>
            {data?.DriverIDType && (
                <DBox>
                    <Title>{data?.DriverIDType} Number</Title>
                    <ValueField>{data?.DriverIDNo || "-"}</ValueField>
                </DBox>
            )}
        </Box>
    );
}
