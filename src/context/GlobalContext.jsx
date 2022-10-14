import { createContext, useState } from "react";
import scissor from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectToStartGame, setSelectToStartGame] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [winnerCheck, setWinnerCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [choice, setChoice] = useState(null);

  const choices = [
    {
      id: 0,
      name: "rock",
      img: rock,
      beats: [2, 3],
      className: "rock",
    },
    {
      id: 1,
      name: "paper",
      img: paper,
      beats: [0, 4],
      className: "paper",
    },
    {
      id: 2,
      name: "scissor",
      img: scissor,
      beats: [1, 3],
      className: "scissor",
    },
    {
      id: 3,
      name: "lizard",
      img: lizard,
      beats: [1, 4],
      className: "lizard",
    },
    {
      id: 4,
      name: "spock",
      img: spock,
      beats: [0, 2],
      className: "spock",
    },
  ];

  const checkWinner = (player, computer) => {
    if (player === computer) {
      setResult("DRAW");
    } else if (choices[player].beats.includes(computer)) {
      setResult("YOU WIN");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("YOU LOST");
      setComputerScore(computerScore + 1);
    }
  };

  const playGame = (choice) => {
    setLoading(true);
    setChoice(choice);
    setSelectToStartGame(true);
    setPlayerChoice(choice);
    const random = Math.floor(Math.random() * 5);
    setComputerChoice(random);
    setTimeout(() => {
      setComputerChoice(random);
      setWinnerCheck(true);
      checkWinner(choice, random);
      setLoading(false);
    }, 1000);
  };

  const resetScore = () => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  const resetGame = () => {
    setSelectToStartGame(false);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setWinnerCheck(false);
    setIsRulesOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        selectToStartGame,
        playerChoice,
        computerChoice,
        result,
        playerScore,
        resetGame,
        loading,
        winnerCheck,
        choices,
        checkWinner,
        playGame,
        resetScore,
        isRulesOpen,
        setIsRulesOpen,
        computerScore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
