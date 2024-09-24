import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import TodoList from './todoList/TodoList';
import TodoForm from './todoList/TodoForm/TodoForm';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addTodo' element={<TodoForm />} />
        <Route path='/myList' element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
