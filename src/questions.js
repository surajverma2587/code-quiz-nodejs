const quizStartQuestions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your username:",
  },
  {
    type: "list",
    name: "quizType",
    message: "Please select the type of quiz you want to play:",
    choices: [
      {
        name: "Movie",
        value: "movie",
      },
      {
        name: "Music",
        value: "music",
      },
      {
        name: "Sport",
        value: "sport",
      },
    ],
  },
];

const questions = {
  movie: {
    question1: {
      question: "How many Harry Potter movies were released?",
      answers: [9, 4, 8, 6],
      correctAnswer: 8,
    },
    question2: {
      question: "What was the first movie in the Marvel Cinematic Universe?",
      answers: ["Iron Man", "Batman", "Spider-Man", "The Avengers"],
      correctAnswer: "Iron Man",
    },
    question3: {
      question: "Which of these actors DIDN'T appear in 'Pulp Fiction'?",
      answers: [
        "Bruce Willis",
        "Samuel L. Jackson",
        "Uma Thurman",
        "John Turturro",
      ],
      correctAnswer: "John Turturro",
    },
  },
  music: {
    question1: {
      question: "How many spice girls are there in the spice girls band?",
      answers: [3, 5, 4, 7],
      correctAnswer: 5,
    },
    question2: {
      question: "How many spice girls are there in the spice girls band?",
      answers: [3, 5, 4, 7],
      correctAnswer: 5,
    },
    question3: {
      question: "How many spice girls are there in the spice girls band?",
      answers: [3, 5, 4, 7],
      correctAnswer: 5,
    },
    question4: {
      question: "How many spice girls are there in the spice girls band?",
      answers: [3, 5, 4, 7],
      correctAnswer: 5,
    },
  },
  sport: {
    question1: {
      question: "Who won the football Euro's cup in 2020?",
      answers: ["Germany", "Italy", "France", "England"],
      correctAnswer: 8,
    },
    question2: {
      question: "Who won the football Euro's cup in 2020?",
      answers: ["Germany", "Italy", "France", "England"],
      correctAnswer: 8,
    },
    question3: {
      question: "Who won the football Euro's cup in 2020?",
      answers: ["Germany", "Italy", "France", "England"],
      correctAnswer: 8,
    },
    question4: {
      question: "Who won the football Euro's cup in 2020?",
      answers: ["Germany", "Italy", "France", "England"],
      correctAnswer: 8,
    },
  },
};

const quizEndQuestions = [
  {
    type: "confirm",
    name: "playAgain",
    message: "Do you want to play again?",
  },
];

module.exports = {
  quizStartQuestions,
  questions,
  quizEndQuestions,
};
