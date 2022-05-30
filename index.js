//LOGIC
const computerChoice = () => {
  options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const choiceResultMap = {
  rock_rock: "Tie",
  rock_paper: "Player wins paper beats rock",
  rock_scissors: `Computer wins, rock beats scissors`,

  paper_paper: "Tie",
  paper_scissors: "Player wins scissors beats paper",
  paper_rock: `Computer wins, paper beats rock`,

  scissors_scissors: "Tie",
  scissors_paper: `Computer wins,scissors beats paper`,
  scissors_rock: "Player wins, rock beats scissors",
};
let botScore = 0;
let userScore = 0;
let total = 0;

const oneRound = (user, bot) => {
  user = user.toLowerCase();
  bot = bot.toLowerCase();

  if (total < 5) {
    const result = choiceResultMap[`${bot}_${user}`] || " ";
    if (result.includes("Player wins")) {
      userScore++;
      total++;
    } else if (result.includes("Computer wins")) {
      botScore++;
      total++;
    } else {
      total++;
    }
    const message =
      userScore > botScore
        ? "Hooray you've have won after 5 rounds"
        : botScore > userScore
        ? "Oh no this mindless machine wins, Try again"
        : "You tied, Try again";
    return { user, bot, result, message };
  }
};

// CHOOSE

const buttons = document.querySelectorAll(".select");
const resultDiv = document.querySelector("#result");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const { user, bot, result, message } = oneRound(
      e.target.innerText,
      computerChoice()
    );
    resultDiv.innerHTML =
      total < 5
        ? `
    <h4> User Choice: ${user}, Computer Choice: ${bot} </h4>
     <h5> Result: ${result} </h5>  
     <h5> Played: ${total} time${total > 1 ? "s" : ""} </h5>  
     <div> User Score: ${userScore}, Computer Score: ${botScore} </div>
     `
        : `<h4> Total Play: ${total}</h4>
     <h1> Winner: ${message} </h1>
     `;
  })
);

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
  window.location.reload();
});
