import React from "react";
import styled from "styled-components";
import {MdLightMode, MdDarkMode} from "react-icons/md";

interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

interface IWrapper {
  themeMode: string;
}


const Toggle = ({themeMode, toggleTheme}: IToggle) => {
  return (
    <>
      <Wrapper onClick={toggleTheme} themeMode={themeMode}>
        {themeMode === "light" ? <MdLightMode/> : <MdDarkMode/>}
      </Wrapper>
    </>
  );
};

export default Toggle;

const Wrapper = styled.button<IWrapper>`
  background: ${({theme}) => theme.mode.mainBackground};
  border: 1px solid ${({theme}) => theme.mode.border};
  box-shadow: 0 1px 3px ${({theme}) => theme.mode.divider};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem;
  z-index: 1;
  width: 2rem;
  height: 2rem;
  top: 2rem;
  right: 2rem;

  svg {
    color: ${({theme}) => theme.mode.themeIcon};

    &:first-child {
      width: 24px;
      height: 24px;
      animation: show 0.6s ease forwards;
    }

    &:nth-child(2) {
      width: 24px;
      height: 24px;
      animation: show 0.6s ease forwards;
    }

    @keyframes show {
      0% {
        transform: rotate(0deg);
        opacity: 0;
      }
      50% {
        transform: rotate(180deg);
      }
      95% {
        transform: scale(1.2);
      }
      100% {
        opacity: 1;
      }
    }

  }
`;
