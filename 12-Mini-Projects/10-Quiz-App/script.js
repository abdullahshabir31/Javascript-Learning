const question = document.getElementById("question");
const options = document.getElementById("options");
const scoreText = document.getElementById("score");

const quiz = [
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
];

let score = 0;

question.textContent = quiz[0].question;

quiz[0].options.forEach((option) => {
  const button = document.createElement("button");

  button.textContent = option;

  button.onclick = () => {
    if (option === quiz[0].answer) {
      score++;
    }

    scoreText.textContent = `Score: ${score}/1`;
  };

  options.appendChild(button);
});
