import { useCallback, useState } from 'react';
import '../components/ExpenseData.js'
import '../App.css'


function ExpenseForm(props){
    let [title, setTitle] = useState('');
  

    function titleChangeHandler(event){
        setTitle(event.target.value)
    }


    
const onsubmitHandler = (e) => {
e.preventDefault()

if(title.trim() === ''){
    return
}

setTitle('')
const newData = {
    title,
    date: new Date().toLocaleDateString(),
    id: Math.random().toString()
}
props.onTodos(newData)
}
    return (
        <form onSubmit={onsubmitHandler}>
        <div className='container'>
            <input value={title} onChange={titleChangeHandler} type="text"></input>
            <button className='Click'>Click</button>
        </div>
        </form>

    )
}

export default ExpenseForm;