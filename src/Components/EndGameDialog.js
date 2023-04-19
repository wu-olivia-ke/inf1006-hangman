import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const EndGameDialog = ({
  gameState,
  playable,
  setPlayable,
  resetGame,
  selectedWord,
}) => {
  useEffect(() => {
    setPlayable(!gameState);
  });

  return (
    <Dialog open={Boolean(gameState)} onClose={resetGame}>
      <DialogTitle>
        {gameState === "win" ? "Congratulations!" : "Game Over"}
      </DialogTitle>
      <DialogContent>
        {!playable && (
          <DialogContentText>
            {gameState === "win"
              ? "You guessed the word correctly and won!"
              : `You've run out of guesses! The correct word was: ${selectedWord}`}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={resetGame} variant="contained">
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndGameDialog;
