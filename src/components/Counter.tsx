import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import {counterActions} from '../store/counter'
import {ReducerType} from "../store";

import styled from "styled-components";
import Button from "../style/Button";
import {Text} from "../style/Text";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: ReducerType) => state.counter.value);
  const show = useSelector((state: ReducerType) => state.counter.showCounter);

  const countHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(counterActions.counter(Number(e.currentTarget.value)));
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <StyledCounter>
      <Text fontSize="lg">Redux Counter Test</Text>
      {show && <div className="value"><Text fontSize="xxl" fontWeight="extraBold">{counter}</Text></div>}
      <div>
        <Button value={-5} onClick={event => countHandler(event)} fontSize="sm">Decrement by -5</Button>
        <Button value={5} onClick={event => countHandler(event)} fontSize="sm">Increase by 5</Button>
      </div>
      <div>
        <Button value={-1} onClick={event => countHandler(event)} fontSize="sm">Decrement</Button>
        <Button value={1} onClick={event => countHandler(event)} fontSize="sm">Increment</Button>
      </div>
      <Button onClick={toggleCounterHandler}>Toggle Counter</Button>
    </StyledCounter>
  );
};

export default Counter;

const StyledCounter = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 40rem;

  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: ${({theme}) => theme.mode.background};
  border: 1px solid ${({theme}) => theme.mode.border};

  & h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }

  .value {
    font-size: 2rem;
    color: #3c0080;
    margin: 2rem 0;
    font-weight: bold;
  }

  Button {
    margin: 0.3rem;
  }
`
