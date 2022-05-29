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
const oneRound = (user, bot) => {
  user = user.toLowerCase();
  bot = bot.toLowerCase();
  const result = choiceResultMap[`${bot}_${user}`] || " ";
  if (result.includes("Player wins")) {
    userScore++;
  } else if (result.includes("Computer wins")) {
    botScore++;
  }
  console.log(result);
};

const game = () => {
  userSelect = prompt("Enter a choice") || " ";
  oneRound(userSelect, computerChoice());
};

for (let i = 0; i < 5; i++) {
  game();
}

console.log(userScore, botScore);
messageAfter5plays =
  userScore > botScore
    ? "Hooray youve have won after 5 rounds"
    : botScore > userScore
    ? "Oh no this mindless machine wins, try again"
    : "It's a Tie";
console.log(messageAfter5plays);
