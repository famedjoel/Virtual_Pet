function showGameDialog() {
    const gameDialog = document.querySelector("#gameDialog");
    gameDialog.style.display = "block";
  }
  
  function funGame(playerMove) {
    const moves = ["rock", "paper", "scissors"];
    const petMove = moves[Math.floor(Math.random() * moves.length)];
  
    const resultElement = document.querySelector("#result");
    let result;
  
    if (playerMove === petMove) {
      result = "It's a tie!";
    } else if (
      (playerMove === "rock" && petMove === "scissors") ||
      (playerMove === "paper" && petMove === "rock") ||
      (playerMove === "scissors" && petMove === "paper")
    ) {
      result = "Woah, You won this round! Go on😉";
    } else {
      result = "Unfortunately, Pet won this round😥! Try again😁😁 ";
    }
  
    resultElement.innerText = `You chose ${playerMove}. Pet chose ${petMove}. ${result}`;
  
    //Forit to reset after it disappears
    setTimeout(function () {
      const gameDialog = document.querySelector("#gameDialog");
      gameDialog.style.display = "none";
      resultElement.innerText = "";
    }, 7000);
  }