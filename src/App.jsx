import { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Header from "./components/Header";
import Pentagon from "./components/Pentagon";
import Game from "./components/Game";
import rules from "./images/image-rules-bonus.svg";

function App() {
  const { selectToStartGame, isRulesOpen, setIsRulesOpen } =
    useContext(GlobalContext);
  return (
    <div className='container'>
      <Header />
      {selectToStartGame ? <Game /> : <Pentagon />}
      <footer>
        <button
          className='rules-btn'
          onClick={() => setIsRulesOpen(!isRulesOpen)}
        >
          RULES
        </button>
        {isRulesOpen && (
          <div className='rules'>
            <button
              className='close-btn'
              onClick={() => setIsRulesOpen(!isRulesOpen)}
            >
              X
            </button>
            <img src={rules} alt='rules' />
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
