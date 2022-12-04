import React from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

export default function PersonalInfoForm({ data, setData, handleChange }) {
    return (
        <Box
            py={2}
            px={4}
            display={"flex"}
            flexDirection={"column"}
            rowGap={1}
            width={"380px"}
            sx={(theme) => ({
                border: "1px solid #000",
                background: "#EEEFF0",
            })}
        >
            <FBox>
                <Title>Gender</Title>
                <Autocomplete
                    disablePortal
                    fullWidth
                    size='small'
                    id='combo-box-demo'
                    value={data?.gender}
                    options={["Male", "Female", ""]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, gender: value })
                            : setData({ ...data, gender: "" })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            name={"gender"}
                            variant={"outlined"}
                            size={"small"}
                            value={data?.gender}
                            onChange={handleChange}
                        />
                    )}
                />
            </FBox>
            <FBox>
                <Title>Date Of Birth</Title>
                <TextField
                    name={"dob"}
                    type={"date"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.dob}
                    fullWidth
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
                    id='identityType'
                    value={data?.identityType}
                    options={["ID", "Passport"]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, identityType: value })
                            : setData({ ...data, identityType: "" })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            value={data?.identityType}
                        />
                    )}
                />
            </FBox>
        </Box>
    );
}
