import { Box, Button, Typography } from "@mui/material";

import NavigateNext from "@mui/icons-material/NavigateNext";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const _navigate = useNavigate();

  const handleProceed = () => _navigate("/main");

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
      })}
    >
      <Box
        sx={(theme) => ({
          bgcolor: "#1f2833",
          color: "#66fcf1",
          p: 5,
          borderRadius: 5,
        })}
      >
        <Typography variant="h1" fontWeight={700}>
          FREDDO HOTEL
        </Typography>
        <Typography variant={"h2"} fontSize={32}>
          Employee Portal
        </Typography>
      </Box>
      <Box my={2}>
        <Button
          variant={"contained"}
          sx={(theme) => ({
            backgroundColor: "#66fcf1",
            color: "#1f2833",
            ":hover": {
              backgroundColor: "#1f2833",
              color: "#66fcf1",
            },
          })}
          disableElevation
          onClick={handleProceed}
        >
          Proceed <NavigateNext />{" "}
        </Button>
      </Box>
    </Box>
  );
}
