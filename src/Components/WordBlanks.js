import React from "react";
import { Box, Typography } from "@mui/material";

const WordBlanks = ({ selectedWord, correctLetters }) => {
  return (
    <Box display="flex">
      {selectedWord.split("").map((letter, i) => {
        return (
          <Typography
            key={i}
            sx={{
              borderBottom: "4px solid red",
              fontSize: "50px",
              mr: "8px",
              width: "30px",
              height: "50px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {correctLetters.includes(letter) ? letter : ""}
          </Typography>
        );
      })}
    </Box>
  );
};

export default WordBlanks;
