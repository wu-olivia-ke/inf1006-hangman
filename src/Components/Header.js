import { Typography } from "@mui/material";
import React from "react";

// Title and intro for the web app
const Header = () => {
  return (
    <>
      <Typography variant="h3">INF1006 Hangman Final Project</Typography>
      <Typography variant="h5">By: Ke Wu</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Hi there, welcome to my final project for INF1006 - Hangman. Please
        guess a letter for the hidden word below.
      </Typography>
      <Typography variant="body1" sx={{ display: "flex", mt: 2 }}>
        The topic is:{" "}
        <Typography fontWeight={800} sx={{ ml: 1 }}>
          Fruit
        </Typography>
      </Typography>
    </>
  );
};

export default Header;
