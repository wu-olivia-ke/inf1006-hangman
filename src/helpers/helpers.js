export const showNotification = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
    // after 2 seconds, it gonna to set it faults
  }, 2000);
};

export const endGameState = (correct, wrong, word) => {
  let status = "win";

  // Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 6) status = "lose";

  return status;
};
