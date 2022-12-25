import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

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
                borderRadius:'5px'
            })}
        >
            <FBox>
                <Title>Tax</Title>
                <TextField
                    name={"Tax"}
                    variant={"outlined"}
                    size={"small"}
                    type={"number"}
                    value={data?.Tax}
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
            <FBox>
                <Title>Subtotal</Title>
                <TextField
                    disabled
                    name={"SubTotal"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.SubTotal}
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
        </Box>
    );
}
