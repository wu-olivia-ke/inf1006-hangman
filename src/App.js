import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Header from "./Components/Header";
import Images from "./Components/Images";
import Notification from "./Components/Notification";
import WordBlanks from "./Components/WordBlanks";
import IncorrectGuesses from "./Components/IncorrectGuesses";

import { endGameState, showNotification as show } from "./helpers/helpers";
import { Box, Button } from "@mui/material";
import EndGameDialog from "./Components/EndGameDialog";

// Define the array of words to choose from
const WORD_LIST = [
  "apple",
  "watermelon",
  "orange",
  "pear",
  "cherry",
  "strawberry",
  "mango",
  "nectarine",
  "grape",
  "mango",
  "blueberry",
  "pomegranate",
  "starfruit",
  "plum",
  "banana",
  "raspberry",
  "mandarin",
  "jackfruit",
  "papaya",
  "kiwi",
  "pineapple",
  "lime",
  "lemon",
  "apricot",
  "grapefruit",
  "melon",
  "coconut",
  "avocado",
  "peach",
];

// Choose a random word from the array
let selectedWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Create a function called handlekeydown and have the event.
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  const gameState = useMemo(
    () => endGameState(correctLetters, wrongLetters, selectedWord),
    [correctLetters, wrongLetters, selectedWord]
  );

  const resetGame = () => {
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * WORD_LIST.length);
    selectedWord = WORD_LIST[random];
    setPlayable(true);
  };

  return (
    <>
      <Header />
      <Box display="flex" padding="20px">
        <Images wrongLetters={wrongLetters} />
        <IncorrectGuesses wrongLetters={wrongLetters} />
      </Box>
      <WordBlanks selectedWord={selectedWord} correctLetters={correctLetters} />
      <Button
        variant="contained"
        sx={{ mt: 4, backgroundColor: "gray" }}
        onClick={resetGame}
      >
        Reset Game
      </Button>
      <EndGameDialog
        gameState={gameState}
        playable={playable}
        setPlayable={setPlayable}
        resetGame={resetGame}
        selectedWord={selectedWord}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
