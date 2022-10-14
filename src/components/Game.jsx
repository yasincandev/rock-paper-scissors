import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/Game.css";

const Game = () => {
  const {
    playerChoice,
    computerChoice,
    result,
    resetGame,
    resetScore,
    winnerCheck,
    choices,
    loading,
  } = useContext(GlobalContext);

  return (
    <div className='game'>
      <div className='game__container'>
        <div className='game__player'>
          <div className='game__player__text'>YOU PICKED</div>
          <div
            className={`game__player__choice__${choices[playerChoice].className}`}
          >
            <div className='game__player__choice__container'>
              <img
                src={choices[playerChoice].img}
                alt={choices[playerChoice].name}
              />
            </div>
          </div>
        </div>
        {loading ? (
          <></>
        ) : (
          <div className='game__result'>
            <h2 className='game__result__text'>{result}</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button className='game__result__btn' onClick={resetGame}>
                Play Again
              </button>
              <button className='game__result__btn' onClick={resetScore}>
                Reset Score
              </button>
            </div>
          </div>
        )}

        <div className='game__computer'>
          {loading ? (
            <div className='game__computer__loading'>Just a second...</div>
          ) : (
            <>
              <div className='game__computer__text'>THE HOUSE PICKED</div>
              <div
                className={`game__computer__choice__${choices[computerChoice].className}`}
              >
                <div className='game__computer__choice__container'>
                  <img
                    src={choices[computerChoice].img}
                    alt={choices[computerChoice].name}
                    className={`game__computer__choice__img__${choices[computerChoice].className}`}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
