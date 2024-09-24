import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function TodoList() {
  const { state } = useLocation();

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    try {
      const data = localStorage.getItem('todos');
      if (data) {
        const parsedData = JSON.parse(data);
        setTodos(parsedData);
        console.log('Loaded todos from localStorage:', parsedData);
      }
    } catch (error) {
      console.error('Error loading todos from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (state?.title && state?.description) {
      setTodos((prevState) => [
        ...prevState,
        { title: state.title, description: state.description },
      ]);
    }
    setLoading(false);
  }, [state]);

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log('Saved todos to localStorage:', todos);
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  }, [todos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function deleteTask(index) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((_, i) => i !== index);
      return updatedTodos;
    });
  }
  function moveTodoUp(index) {
    if (index === 0) return;
    const updatedTodos = [...todos];
    const temp = updatedTodos[index];
    updatedTodos[index] = updatedTodos[index - 1];
    updatedTodos[index - 1] = temp;
    setTodos(updatedTodos);
  }

  function moveTodoDown(index) {
    if (index === todos.length - 1) return;
    const updatedTodos = [...todos];
    const temp = updatedTodos[index];
    updatedTodos[index] = updatedTodos[index + 1];
    updatedTodos[index + 1] = temp;
    setTodos(updatedTodos);
  }

  return (
    <>
      <div>
        <div>
          <h1>Todo List</h1>
          <button>
            <Link to='/addTodo'>Add Todo</Link>
          </button>
        </div>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              <div>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => moveTodoUp(index)}>Up</button>
              <button onClick={() => moveTodoDown(index)}>Down</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
