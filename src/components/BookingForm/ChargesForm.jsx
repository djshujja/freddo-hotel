import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

export default function ChargesForm({ data, setData, handleChange }) {
    React.useEffect(() => {
        const Total = Number(data?.TotalDays) * Number(data?.Rate);
        if (Total) setData({ ...data, Total });
    }, [data?.Rate]);

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
                borderRadius: "5px",
            })}
        >
            <FBox>
                <Title>Rate</Title>
                <TextField
                    name={"Rate"}
                    variant={"outlined"}
                    size={"small"}
                    type={"number"}
                    value={data?.Rate}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                XOF
                            </InputAdornment>
                        ),
                    }}
                />
            </FBox>
            <FBox>
                <Title>Total</Title>
                <TextField
                    name={"Total"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.Total}
                    type={"number"}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                XOF
                            </InputAdornment>
                        ),
                    }}
                />
            </FBox>{" "}
        </Box>
    );
}
