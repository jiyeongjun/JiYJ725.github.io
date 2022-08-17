import React, {useRef} from 'react';
import styled from "styled-components";
import {Text} from "../../style/Text";
import Button from "../../style/Button";


interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <StyledNewTodo>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-text"><Text>Todo Text</Text></label>
          <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <Button type="submit">ADD TODO</Button>
      </form>
    </StyledNewTodo>
  );
};

export default NewTodo;


const StyledNewTodo = styled.div`
  box-sizing: border-box;
  margin: 2rem;
  display: flex;
  justify-content: center;

  & form {
    width: 90%;
    max-width: 40rem;
  }

  & .form-control {
    margin-bottom: 1rem;
  }

  & label, input {
    display: block;
    width: 100%;
  }

  & label {
    font-weight: bold;
  }

  & input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.25rem;
  }

  & input:focus {
    outline: none;
    border-color: #50005a;
  }

  & Button {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    height: 2.5rem;
  }
`
