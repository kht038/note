import React, { useState } from 'react';
import './App.css';
import TodoList from './components/todo-list';
import TextareaCustom from './components/text-area-custom';

export type Todo = {
  id: string;
  value: string;
}

const randomString = () => {
  return Math.random().toString(36)
}

const App: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todoList, setTodolist] = useState<Array<Todo>>([]);

  const renderTodos = (): JSX.Element[] => {
    const todos = todoList.map((todo) => {
      return <TodoList id={todo.id} text={todo.value} todoList={todoList} setTodoList={setTodolist} />;
    })

    return todos;
  }

  const onClickSave = (value: string) => {
    const newTodo: Todo = {
      id: randomString(),
      value: value,
    }
    const newList = todoList.concat(newTodo);
    setTodolist(newList);
  }

  return (
    <div className='main'>
      {renderTodos()}
      <div className='send-area'>
        <TextareaCustom placeholder='할일' value={todoText} setValue={setTodoText} />
        <button onClick={() => onClickSave(todoText)}>저장</button>
      </div>
    </div>
  )
}

export default App;
