import React from "react";
import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

export default function PersonalInfoForm({ data, handleChange }) {
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
                <Title>Gender</Title>
                <TextField
                    name={"gender"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.gender}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Date Of Birth</Title>
                <TextField
                    name={"dob"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.dob}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Identity Type</Title>
                <TextField
                    name={"identityType"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.identityType}
                    onChange={handleChange}
                    inputProps={{
                        readonly: true,
                    }}
                />
            </FBox>
        </Box>
    );
}
