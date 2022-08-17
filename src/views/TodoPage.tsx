import NewTodo from "../components/Todo/NewTodo";
import TodoList from "../components/Todo/TodoList";
import Auth from "../components/Auth/Auth";
import UserProfile from "../components/Auth/UserProfile";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {ReducerType} from "../store";
import useFetch from "../hooks/useFetch";
import {useNavigate} from "react-router-dom";

const TodoPage = () => {
  const {error, isPending, data: todos} = useFetch('http://localhost:3001/todo');
  console.log(todos);
  // const [todos, setTodos] = useState<Todo[]>([]);
  const isAuth = useSelector((state: ReducerType) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const todoAddHandler = (text: string) => {
    // setTodos(prevTodos => [...prevTodos,
    //   {id: Math.random().toString(), text: text}]);
    console.log("yes");
    const todo = {text};

    fetch('http://localhost:3001/todo/', {
      method : 'POST',
      headers: {"Content-Type": "application/json"},
      body   : JSON.stringify(todo)
    }).then(() => {
      navigate('/');
    })
  }

  const todoDeleteHandler = (todoId: string) => {
    // setTodos(prevTodos => {
    //   return prevTodos.filter(todo => todo.id !== todoId);
    //});
    fetch('http://localhost:3001/todo/' + todoId, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })
  };

  const todoUpdateHandler = (todoId: string, text: string) => {
    // setTodos(prevTodos => {
    //   return prevTodos.filter(todo => todo.id !== todoId);
    //});
    console.log(todoId, text);
    const putData = {
      "text": text,
      "id"  : todoId,
    };

    fetch('http://localhost:3001/todo/' + todoId, {
      method : 'PUT',
      headers: {"Content-Type": "application/json"},
      body   : JSON.stringify(putData)
    }).then(() => {
      navigate(`/`);
    })
  };
  return (
    <>
      {error && <div>{error}</div>}
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      {isAuth && <NewTodo onAddTodo={todoAddHandler}/>}
      {isAuth && <TodoList items={todos} onDeleteTodo={todoDeleteHandler} onUpdateTodo={todoUpdateHandler}
                           isPending={isPending}/>}
    </>
  )
}

export default TodoPage;
