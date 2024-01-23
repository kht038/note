import React from "react";
import { Todo } from "../App";

interface IProps {
  id: string;
  text: string;
  todoList: Array<Todo>;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = (props: IProps) => {
  const {id, text, todoList, setTodoList} = props;

  const deleteTodo = (id: string) => {
    const removedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(removedList);
  };

  return (
    <div className="todo-list" id={id}>
      <pre>
        {text}
      </pre>
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </div>
  )
};

export default TodoList;