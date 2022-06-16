import React from "react";
import cards from "../assets/cards.png";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Button,
  styled,
} from "@mui/material";

const CardText = styled(Typography)({
  textAlign: "center",
  fontSize: "15px",
  marginBottom: "10px",
  color: "#000",
});

const StyledButton = styled(Button)({
  border: "2px solid #000",
  color: "#000",
  borderRadius: "20px",
  letterSpacing: "1px",
  fontWeight: "700",
  fontSize: "12px",
  width: "140px",
  height: "40px",
});

const content = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

const Cards = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      style={{ padding: "25px", flexWrap: "wrap" }}
    >
      {content.map((card, idx) => (
        <Grid item key={idx} sx={{ margin: "10px" }}>
          <Card
            sx={{
              maxWidth: 345,
              minHeight: { lg: 570, md: 570, sm: 570, xs: 0 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              image={cards}
              alt="card"
              style={{ padding: "20px", borderRadius: "30px" }}
            />
            <CardContent>
              <CardText
                variant="h6"
                color="text.secondary"
                style={{ fontSize: "18px" }}
              >
                {card.text}
              </CardText>
            </CardContent>
            <Box style={{ margin: "auto 15px 15px 15px", textAlign: "center" }}>
              <StyledButton variant="outlined">READ MORE</StyledButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Stack>
  );
};

export default Cards;
