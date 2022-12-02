import React from "react";
import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

export default function ChargesForm({ data, handleChange }) {
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
                <Title>Subtotal</Title>
                <TextField
                    name={"subTotal"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.subTotal}
                    onChange={handleChange}
                    inputProps={{
                        readOnly: true,
                    }}
                />
            </FBox>
            <FBox>
                <Title>Tax</Title>
                <TextField
                    name={"tax"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.tax}
                    onChange={handleChange}
                    inputProps={{
                        readOnly: true,
                    }}
                />
            </FBox>
            <FBox>
                <Title>Total</Title>
                <TextField
                    name={"total"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.total}
                    onChange={handleChange}
                    inputProps={{
                        readOnly: true,
                    }}
                />
            </FBox>
        </Box>
    );
}
