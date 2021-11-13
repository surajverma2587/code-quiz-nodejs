const inquirer = require("inquirer");
const { quizStartQuestions, quizEndQuestions } = require("./questions");
const {
  getQuizQuestions,
  getQuizResults,
  generateHTML,
  writeToFile,
} = require("./utils");

const init = async () => {
  let isInProgress = true;
  const output = {};

  while (isInProgress) {
    // prompt the start quiz questions
    const { username, quizType } = await inquirer.prompt(quizStartQuestions);

    // get specific question set
    const quizQuestions = getQuizQuestions(quizType);

    const quizAnswers = await inquirer.prompt(quizQuestions);

    const quizResults = getQuizResults(quizType, quizAnswers);

    const results = output.results || [];

    output.username = username;
    output.results = [...results, quizResults];

    // prompt play again
    const { playAgain } = await inquirer.prompt(quizEndQuestions);

    if (!playAgain) {
      isInProgress = false;
    }
  }

  // get the HTML to write to file
  const html = generateHTML(output);

  // write to file
  writeToFile("index.html", html);

  console.log("Successfully generated results html!!");
};

init();
