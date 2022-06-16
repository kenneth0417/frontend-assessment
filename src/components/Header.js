import React from "react";
import header from "../assets/header.png";
import headermobile from "../assets/header-mobile.png";
import { Box, Typography, styled } from "@mui/material";

const TextHeader = styled(Box)({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  color: "#fff",
});

const Header = () => {
  return (
    <Box className="header" style={{ position: "relative" }}>
      <img
        src={header}
        alt="header"
        style={{ filter: "brightness(70%)", width: "100%" }}
        className="desktop-header"
      />
      <img
        src={headermobile}
        alt="mobile header"
        className="mobile-header"
        style={{ filter: "brightness(70%)", width: "100%" }}
      />
      <TextHeader className="header-text">
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            letterSpacing: "2px",
            textAlign: "center",
            marginBottom: "10px",
            fontSize: {
              lg: 80,
              md: 50,
              sm: 35,
              xs: 45,
            },
          }}
        >
          Hello Developer!
        </Typography>
        <Typography
          variant="span"
          sx={{
            fontWeight: "300",
            letterSpacing: "1.5px",
            textAlign: "center",
            fontSize: {
              lg: 40,
              md: 30,
              sm: 20,
              xs: 25,
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Typography>
      </TextHeader>
    </Box>
  );
};

export default Header;
