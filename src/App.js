import "@cloudscape-design/global-styles/index.css";
import { useState } from 'react';
import { Button, RadioGroup, SpaceBetween, Box, Header, Container, Input } from '@cloudscape-design/components';
import image from "../src/Asset/memeTemplete.jpg";

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { label: "Berlin", value: "Berlin" },
      { label: "Madrid", value: "Madrid" },
      { label: "Paris", value: "Paris" },
      { label: "Rome", value: "Rome" },
    ],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: [
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
    ],
    correctAnswer: "4",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      { label: "Atlantic", value: "Atlantic" },
      { label: "Indian", value: "Indian" },
      { label: "Pacific", value: "Pacific" },
      { label: "Arctic", value: "Arctic" },
    ],
    correctAnswer: "Pacific",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      { label: "Charles Dickens", value: "Charles Dickens" },
      { label: "Leo Tolstoy", value: "Leo Tolstoy" },
      { label: "William Shakespeare", value: "William Shakespeare" },
      { label: "Mark Twain", value: "Mark Twain" },
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: [
      { label: "Earth", value: "Earth" },
      { label: "Mars", value: "Mars" },
      { label: "Mercury", value: "Mercury" },
      { label: "Venus", value: "Venus" },
    ],
    correctAnswer: "Mercury",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { label: "Oxygen", value: "Oxygen" },
      { label: "Gold", value: "Gold" },
      { label: "Osmium", value: "Osmium" },
      { label: "Oganesson", value: "Oganesson" },
    ],
    correctAnswer: "Oxygen",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { label: "Earth", value: "Earth" },
      { label: "Jupiter", value: "Jupiter" },
      { label: "Mars", value: "Mars" },
      { label: "Saturn", value: "Saturn" },
    ],
    correctAnswer: "Mars",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [upiSubmitted, setUpiSubmitted] = useState(false);

  const handleAnswer = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      if (currentQuestion === questions.length - 1) {
        setShowMessage(true);
      } else {
        setIsCorrect(true);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
          setIsCorrect(null);
        }, 1000);
      }
    } else {
      setIsCorrect(false);
    }
  };

  const handleSubmitUPI = () => {
    setUpiSubmitted(true);
    // Additional UPI ID submission logic can be added here
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding="l"
    >
      <Container width="50%">
        {upiSubmitted ? (
          <Box textAlign="center">
            <img
              src={image}
              alt="Congratulations Image"
          
            />
          </Box>
        ) : showMessage ? (
          <SpaceBetween size="l">
            <Header variant="h2" textAlign="center">Congratulations! You have won ₹86🤑! Please enter your UPI ID:</Header>
            <Input
              value={upiId}
              onChange={({ detail }) => setUpiId(detail.value)}
              placeholder="Enter your UPI ID"
              type="text"
            />
            <Button variant="primary" onClick={handleSubmitUPI}>Submit UPI ID</Button>
          </SpaceBetween>
        ) : (
          <SpaceBetween size="l">
            <Header variant="h2" textAlign="center">{questions[currentQuestion].question}</Header>

            <RadioGroup
              items={questions[currentQuestion].options}
              value={selectedOption}
              onChange={({ detail }) => setSelectedOption(detail.value)}
            />

            <Box textAlign="center">
              <Button variant="primary" onClick={handleAnswer}>Submit Answer</Button>
            </Box>

            {isCorrect === true && (
              <Header variant="h3" color="text-status-success" textAlign="center">Correct!</Header>
            )}
            {isCorrect === false && (
              <Header variant="h3" color="text-status-error" textAlign="center">Try Again!</Header>
            )}
          </SpaceBetween>
        )}
      </Container>
    </Box>
  );
}

export default App;
