const fs = require("fs");
const { questions } = require("./questions");

const getQuizQuestions = (quizType) =>
  Object.entries(questions[quizType]).map(([key, value]) => ({
    type: "list",
    name: key,
    message: value.question,
    choices: value.answers,
  }));

const getQuizResults = (quizType, quizAnswers) => {
  const totalQuestions = Object.entries(quizAnswers).length;

  let score = 0;

  // get the correct values from the questions object
  const breakdown = Object.entries(quizAnswers).map(([key, value]) => {
    const questionObj = questions[quizType][key];

    // verify answer
    if (value === questionObj.correctAnswer) {
      score += 1;
      return {
        question: questionObj.question,
        correctAnswer: questionObj.correctAnswer,
        yourAnswer: value,
        status: "CORRECT",
      };
    } else {
      return {
        question: questionObj.question,
        correctAnswer: questionObj.correctAnswer,
        yourAnswer: value,
        status: "INCORRECT",
      };
    }
  });

  return {
    quizType,
    score: `${score}/${totalQuestions}`,
    totalQuestions,
    breakdown,
  };
};

const constructBreakdownCard = (card) => {
  return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        ${card.question}
      </h5>
      <h6 class="card-subtitle mb-2 ${
        card.status === "CORRECT" ? "text-success" : "text-danger"
      }">${card.status}</h6>
      <p class="card-text">Correct Answer: ${card.correctAnswer}</p>
      <p class="card-text">Your Answer: ${card.yourAnswer}</p>
    </div>
  </div>`;
};

const constructQuizResultContainer = (quiz) => {
  return `<div class="mb-4">
    <div class="text-center">
      <h2>${quiz.quizType.toUpperCase()}</h2>
      <h3>Score: ${quiz.score}</h3>
    </div>
    <div class="d-flex flex-wrap justify-content-around">
      ${quiz.breakdown.map(constructBreakdownCard).join("")}
    </div>
  </div>`;
};

const generateHTML = ({ username, results }) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <title>Quiz Results | ${username}</title>
      </head>
      <body>
        <div class="p-4 m-4 text-center">
          <h1>Your Results</h1>
        </div>
        <hr />
        ${results.map(constructQuizResultContainer).join("")}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getQuizQuestions,
  getQuizResults,
  generateHTML,
  writeToFile,
};
