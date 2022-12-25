import { Autocomplete, Box, TextField } from "@mui/material";
import { DBox, Title, ValueField } from "../Styled/Globals";

import React from "react";
import countries from "../../constants/countries";

export default function CustomerForm({ data, setData, handleChange }) {
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
                <Title>Customer Ref</Title>
                <ValueField>{data?.CustomerRef}</ValueField>
            </DBox>
            <DBox>
                <Title>Firstname</Title>
                <ValueField>{data?.FirstName}</ValueField>
            </DBox>
            <DBox>
                <Title>Surname</Title>
                <ValueField>{data?.SurName}</ValueField>
            </DBox>
            <DBox>
                <Title>Address</Title>
                <ValueField>{data?.Address}</ValueField>
            </DBox>

            <DBox>
                <Title>Post Code</Title>
                <ValueField>{data?.PostCode}</ValueField>
            </DBox>
            <DBox>
                <Title>Email</Title>
                <ValueField>{data?.Email}</ValueField>
            </DBox>
            <DBox>
                <Title>Mobile</Title>
                <ValueField>{data?.Mobile}</ValueField>
            </DBox>
            <DBox>
                <Title>Nationality</Title>
                <ValueField>{data?.Nationality}</ValueField>
            </DBox>
            <DBox>
                <Title>Gender</Title>
                <ValueField>{data?.Gender}</ValueField>
            </DBox>
            <DBox>
                <Title>Date Of Birth</Title>
                <ValueField>{data?.DOB}</ValueField>
            </DBox>
            <DBox>
                <Title>Identity Type</Title>
                <ValueField>{data?.IDType}</ValueField>
            </DBox>
            {data?.IDType && (
                <DBox>
                    <Title>{data?.IDType} Number</Title>
                    <ValueField>{data?.IDNo}</ValueField>
                </DBox>
            )}
        </Box>
    );
}
