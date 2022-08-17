import React from "react";
import {useDispatch} from 'react-redux';
import {authActions} from "../../store/auth";

import styled from 'styled-components';
import Button from "../../style/Button";
import {Text} from "../../style/Text";


const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <StyledAuth>
      <section>
        <form onSubmit={e => loginHandler(e)}>
          <div className="control">
            <label htmlFor="email"><Text>Email</Text></label>
            <input type="email" id="email"/>
          </div>
          <div className="control">
            <label htmlFor="password"><Text>Password</Text></label>
            <input type="password" id='password'/>
          </div>
          <Button>Login</Button>
        </form>
      </section>
    </StyledAuth>
  );
}

export default Auth;

const StyledAuth = styled.main`
  margin: 2rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.mode.border};
  padding: 1rem;
  text-align: center;
  background-color: ${({theme}) => theme.mode.background};

  & .control {
    margin-bottom: 0.5rem;
  }

  & .control label {
    display: block;
    color: #616161;
    text-transfrom: uppercase;
    margin-bottom: 0.5rem;
  }

  & .control input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 1rem;
    height: 2.5rem;
  }
`
