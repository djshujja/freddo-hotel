import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { DBox, Title, ValueField } from "../Styled/Globals";

export default function ChargesForm({ data, setData, handleChange }) {
    React.useEffect(() => {
        console.log("tax or total changed");
        const SubTotal = Number(data?.Total) + Number(data?.Tax);
        if (SubTotal) setData({ ...data, SubTotal });
    }, [data?.Total, data?.Tax]);

    React.useEffect(() => console.log("data", data), [data?.Tax]);

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
                <Title>Tax</Title>
                <ValueField>XOF {data?.Tax}</ValueField>
            </DBox>
            <DBox>
                <Title>Total</Title>
                <ValueField>XOF {data?.Total}</ValueField>
            </DBox>
            <DBox>
                <Title>Subtotal</Title>
                <ValueField>XOF {data?.SubTotal}</ValueField>
            </DBox>
        </Box>
    );
}
