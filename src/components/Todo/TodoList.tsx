import React, {useRef} from 'react';
import styled from "styled-components";
import Button from "../../style/Button";
import {Text} from "../../style/Text";
import {Todo} from "../../model/todo.model";
import Loading from "../Loading";
import {useDispatch, useSelector} from "react-redux";
import {ReducerType} from "../../store";
import {todoActions} from "../../store/todo";
import {counterActions} from "../../store/counter";


interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  onUpdateTodo: (id: string, text: string) => void;
  isPending: boolean;
}

const TodoList = (props: TodoListProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const show = useSelector((state: ReducerType) => state.todo.showUpdate);
  const clickedId = useSelector((state: ReducerType) => state.todo.id);

  const showUpdateHandler = (id: string) => {
    dispatch(todoActions.toggleUpdate(id));
  };

  return (
    <StyledUl>
      {props.isPending && <Loading/>}
      {props.items && (props.items.map(todo =>
        <li key={todo.id}>
          <div>
            <Text className="todo">{todo.text}</Text>
            <Button fontSize="sm" onClick={() => showUpdateHandler(todo.id)}>UPDATE</Button>
            <Button fontSize="sm" onClick={() => props.onDeleteTodo(todo.id)}>DELETE</Button>
          </div>
          {show && clickedId === todo.id && (<div>
            <input type="text" id="todo-text" ref={textInputRef}/>
          </div>)}
          {show && clickedId === todo.id && (<div className="confirm">
            <Button fontSize="sm"
                    onClick={() => props.onUpdateTodo(todo.id, textInputRef.current!.value)}>CONFIRM</Button>
          </div>)}
        </li>
      ))}
    </StyledUl>
  );
};

export default TodoList;


const StyledUl = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;
  text-align: center;

  & li {
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    background-color: ${({theme}) => theme.mode.background};
    border: 1px solid ${({theme}) => theme.mode.border};

    .confirm {
      display: flex;
      flex-direction: row-reverse;
    }
  }

  & li div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .todo {
      margin-right: auto;
    }

    Button {
      margin-right: 1rem;
    }

    & input {
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.25rem;
      width: 35rem;
      margin: 1rem;
    }
  }
`
