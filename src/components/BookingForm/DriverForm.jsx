import React from "react";
import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

export default function DriverForm({ data, handleChange }) {
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
                <Title>Driver Name</Title>
                <TextField
                    name={"driverName"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.driverName}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Driver Phone</Title>
                <TextField
                    name={"driverPhone"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.driverPhone}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Driver ID</Title>
                <TextField
                    name={"driverId"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.driverId}
                    onChange={handleChange}
                />
            </FBox>
        </Box>
    );
}
