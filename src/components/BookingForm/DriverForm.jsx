import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

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
                background: "#EEEFF0",
            })}
        >
            <FBox>
                <Title>Driver Name</Title>
                <TextField
                    name={"DriverName"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.DriverName}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Driver Phone</Title>
                <TextField
                    name={"DriverPhone"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.DriverPhone}
                    onChange={handleChange}
                />
            </FBox>
            <FBox>
                <Title>Identity Type</Title>
                <Autocomplete
                    disablePortal
                    fullWidth
                    sx={{ width: "100%" }}
                    size='small'
                    id='DriverIDType'
                    value={data?.DriverIDType}
                    options={["ID", "Passport"]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, DriverIDType: value })
                            : setData({ ...data, DriverIDType: "" })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            value={data?.DriverIDType}
                            required
                        />
                    )}
                />
            </FBox>
            {data?.DriverIDType && (
                <FBox>
                    <Title>{data?.DriverIDType} Number</Title>
                    <TextField
                        name={"DriverIDNo"}
                        value={data?.DriverIDNo}
                        onChange={handleChange}
                        fullWidth
                        variant='outlined'
                        size='small'
                        required
                    />
                </FBox>
            )}
        </Box>
    );
}
