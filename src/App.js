
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/todoList';

function App() {

const [todos, settodos] = useState( [
  {
    id: 1,
    text: "walk the dog",
    isDone: false,
  },
  {
    id: 2,
    text: "walk the cat",
    isDone: false,
  },
])

  return (
    <div className="App">
     <AddTodo/>
     <TodoList   todos={todos} />
    </div>
  );
}

export default App;
