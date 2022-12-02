import { Box, TextField } from "@mui/material";
import { FBox, Title } from "../Styled/Globals";

import React from "react";

export default function DateForm() {
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
        <Title>Current Date</Title>
        <TextField
          name={"currentData"}
          variant={"outlined"}
          size={"small"}
          value={new Date(Date.now())}
        />
      </FBox>
    </Box>
  );
}
