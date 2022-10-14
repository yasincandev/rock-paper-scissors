import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/Pentagon.css";
import pentagon from "../images/bg-pentagon.svg";

export default function Pentagon() {
  const { playerChoice, computerChoice, playGame, choices, loading } =
    useContext(GlobalContext);

  return (
    <div className='pentagon'>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <img src={pentagon} alt='pentagon' />
          <div className='pentagon__container'>
            {choices.map((choice) => (
              <div
                key={choice.id}
                className={`${choice.className}__container`}
                onClick={() => playGame(choice.id)}
              >
                <button className={`${choice.className}__container__button`}>
                  <img
                    src={choice.img}
                    alt={choice.alt}
                    className={`${choice.className}__container__button__img`}
                  />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
