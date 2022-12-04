import { Autocomplete, Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

import React from "react";
import countries from "../../constants/countries";

export default function CustomerForm({ data, setData, handleChange }) {
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
                <Title>Customer Ref</Title>
                <TextField
                    onChange={handleChange}
                    value={data?.customerRef}
                    name={"customerRef"}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Firstname</Title>
                <TextField
                    name={"firstname"}
                    value={data?.firstname}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Surname</Title>
                <TextField
                    name={"surname"}
                    value={data?.surname}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Address</Title>
                <TextField
                    name={"address"}
                    value={data?.address}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>

            <FBox>
                <Title>Post Code</Title>
                <TextField
                    name={"postCode"}
                    value={data?.postCode}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Email</Title>
                <TextField
                    type={"email"}
                    name={"email"}
                    value={data?.email}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Mobile</Title>
                <TextField
                    name={"mobile"}
                    value={data?.mobile}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Nationality</Title>
                <Autocomplete
                    disablePortal
                    fullWidth
                    size='small'
                    id='combo-box-demo'
                    options={[...countries]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, nationality: value })
                            : setData({ ...data, nationality: "" })
                    }
                    renderInput={(params) => (
                        <TextField {...params} fullWidth />
                    )}
                />
            </FBox>
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
            {data?.identityType && (
                <FBox>
                    <Title>{data?.identityType} Number</Title>
                    <TextField
                        name={"idNumber"}
                        value={data?.idNumber}
                        onChange={handleChange}
                        fullWidth
                        variant='outlined'
                        size='small'
                    />
                </FBox>
            )}
        </Box>
    );
}
