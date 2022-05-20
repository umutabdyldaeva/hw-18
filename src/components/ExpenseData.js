

function ExpenseData(props){
    

    return(
        <div>
         {props.todos.map((el)=>(
             <li key = {el.id}>
                  <p>{el.title}</p>
                      {el.date}

             </li>
         ))}
        </div>
    )
}

export default ExpenseData;