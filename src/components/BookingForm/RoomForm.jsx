import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

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
            })}
        >
            <FBox>
                <Title>Room Type</Title>
                <Autocomplete
                    disablePortal
                    fullWidth
                    size='small'
                    id='roomType'
                    options={["AC", "Fan"]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, roomType: value })
                            : setData({ ...data, roomType: "" })
                    }
                    renderInput={(params) => (
                        <TextField {...params} fullWidth />
                    )}
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
