import React, { useEffect, useState } from 'react';
import TodoInsert from './TodoInsert';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  const [isUpdate, setIsUpdate] = useState(false);
  
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:8000/todos/api/todo-list")
      if(!response.ok) throw new Error(`getTodos data fetching error😥`)
      const datas = await response.json()
      setTodos(datas.todoList)
    }

    getTodos()
  }, [isUpdate])

  console.log(todos)

  return (
    <div>
      <TodoInsert isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      <p>남은 할일: 🙂 <span>{todos && todos.length}</span></p>
      <ul>
        {todos.length && todos.map((todo, i) => (
            <Todo todo={todo} isUpdate={isUpdate} setIsUpdate={setIsUpdate} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;