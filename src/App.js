import ExpenseForm from './components/ExpenseForm';
import ExpenseData from './components/ExpenseData';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  function onData(data){
    setTodos([data,...todos])

  }
  return (
    <div className="App">
    <ExpenseForm onTodos={onData}/>
    <ExpenseData todos={todos}/>
      
    </div>
  )
}

export default App;
