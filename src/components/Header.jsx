import React from "react";
import "../styles/Header.css";
import logo from "../images/logo-bonus.svg";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Header = () => {
  const { playerScore, computerScore } = useContext(GlobalContext);

  return (
    <header className='header'>
      <div className='header__container__logo'>
        <img src={logo} alt='' />
      </div>
      <div className='header__container__score__container'>
        <div className='header__container__score player'>
          <div className='header__container__score__title'>YOU</div>
          <div className='header__container__score__global'>{playerScore}</div>
        </div>
        <div className='header__container__score computer'>
          <div className='header__container__score__title'>
            <span>COMPUTER</span>
          </div>
          <div className='header__container__score__global'>
            {computerScore}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
