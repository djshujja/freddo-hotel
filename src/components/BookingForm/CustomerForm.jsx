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
                background: "#EFF5F5", 
                borderRadius:'5px'
            })}
        >
            <FBox>
                <Title>Customer Ref</Title>
                <TextField
                    onChange={handleChange}
                    value={data?.CustomerRef}
                    name={"CustomerRef"}
                    variant={"outlined"}
                    size={"small"}
                />
            </FBox>
            <FBox>
                <Title>Firstname</Title>
                <TextField
                    name={"FirstName"}
                    value={data?.FirstName}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                    required
                />
            </FBox>
            <FBox>
                <Title>Surname</Title>
                <TextField
                    name={"SurName"}
                    value={data?.SurName}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                    required
                />
            </FBox>
            <FBox>
                <Title>Address</Title>
                <TextField
                    name={"Address"}
                    value={data?.Address}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                    required
                />
            </FBox>

            <FBox>
                <Title>Post Code</Title>
                <TextField
                    name={"PostCode"}
                    value={data?.PostCode}
                    onChange={handleChange}
                    variant={"outlined"}
                    size={"small"}
                    required
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
                    name={"Mobile"}
                    value={data?.Mobile}
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
                            ? setData({ ...data, Nationality: value })
                            : setData({ ...data, Nationality: "" })
                    }
                    renderInput={(params) => (
                        <TextField {...params} fullWidth required />
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
                    value={data?.Gender}
                    options={["Male", "Female", ""]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, Gender: value })
                            : setData({ ...data, Gender: "" })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            name={"Gender"}
                            variant={"outlined"}
                            size={"small"}
                            value={data?.Gender}
                            onChange={handleChange}
                            required
                        />
                    )}
                />
            </FBox>
            <FBox>
                <Title>Date Of Birth</Title>
                <TextField
                    name={"DOB"}
                    type={"date"}
                    variant={"outlined"}
                    size={"small"}
                    value={data?.DOB}
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
                    id='IDType'
                    value={data?.IDType}
                    options={["ID", "Passport"]}
                    onChange={(_, value, choice) =>
                        choice === "selectOption"
                            ? setData({ ...data, IDType: value })
                            : setData({ ...data, IDType: "" })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            value={data?.IDType}
                            required
                        />
                    )}
                />
            </FBox>
            {data?.IDType && (
                <FBox>
                    <Title>{data?.IDType} Number</Title>
                    <TextField
                        name={"IDNo"}
                        value={data?.IDNo}
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
