import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

import React from "react";

export default function CustomerForm({ data, handleChange }) {
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
        <Title>Customer Ref</Title>
        <TextField name={"customerRef"} variant={"outlined"} size={"small"} />
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
          name={"address"}
          value={data?.address}
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
        <TextField
          name={"nationality"}
          value={data?.nationality}
          onChange={handleChange}
          variant={"outlined"}
          size={"small"}
        />
      </FBox>
    </Box>
  );
}
