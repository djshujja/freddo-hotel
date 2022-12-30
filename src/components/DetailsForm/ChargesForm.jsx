import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { DBox, Title, ValueField } from "../Styled/Globals";

export default function ChargesForm({ data, setData, handleChange }) {
    React.useEffect(() => {
        const Total = Number(data?.Rate) * Number(data?.TotalDays);
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
                minWidth: "340px",
            })}
        >
            <DBox>
                <Title>Rate</Title>
                <ValueField>XOF {data?.Rate}</ValueField>
            </DBox>
            <DBox>
                <Title>Total</Title>
                <ValueField>XOF {data?.Total}</ValueField>
            </DBox>
        </Box>
    );
}
