import React, { useState } from 'react';
import styles from './TodoList.module.css';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return;
    setTodos(prev => [...prev, todo]);
    setTodo('');
  };

  const deleteTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>

      <div className={styles.inputContainer}>
        <input
        className={styles.input}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button className={styles.button} onClick={addTodo}>
        Add Todo
      </button>
      </div>

      <ul className={styles.list}>
        {todos.length === 0 ? (
          <p className={styles.emptyMessage}>No todos yet</p>
        ) : (
          todos.map((todo, index) => (
            <li className={styles.listItem} key={index}>
              {todo}
              <button
                className={styles.button}
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default TodoList;
