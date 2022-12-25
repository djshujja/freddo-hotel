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
                background: "#EFF5F5", 
                borderRadius:'5px'
            })}
        >
            <FBox>
                <Title>Room Type</Title>
                <Autocomplete
                    disablePortal
                    fullWidth
                    size='small'
                    id='RoomType'
                    value={data?.RoomType}
                    options={["AC", "Fan"]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, RoomType: value })
                            : setData({ ...data, RoomType: "" })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            value={data?.RoomType}
                            fullWidth
                            required
                        />
                    )}
                />
            </FBox>
            <FBox>
                <Title>Room No.</Title>
                <TextField
                    name={"RoomNo"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.RoomNo}
                    onChange={handleChange}
                    required
                />
            </FBox>
            <FBox>
                <Title>Room Ext. No.</Title>
                <TextField
                    name={"RoomExtNo"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.RoomExtNo}
                    onChange={handleChange}
                />
            </FBox>
        </Box>
    );
}
