import { Box, Typography } from "@mui/material";
import React from "react";

const IncorrectGuesses = ({ wrongLetters }) => {
  return (
    <Box>
      {wrongLetters.length > 0 && (
        <Typography variant="body1">Incorrect Guesses:</Typography>
      )}
      <Box display="flex" justifyContent="right">
        {wrongLetters.map((letter, index) => (
          <Typography key={index} variant="h5" sx={{ mr: 1 }}>
            {`${letter}${wrongLetters.length - 1 !== index ? ", " : ""}`}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default IncorrectGuesses;
