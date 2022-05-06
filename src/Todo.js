import React from 'react'
import'./todostyle.css'
export default function Todo({todo, toggleTodo}) {

  const cbStyle= {
    
  };
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
    <div className='listText'>
        <label>
            <input type="checkbox" className='tdcheckbox' checked={todo.complete} onChange={handleTodoClick}/>
              &nbsp;  {todo.name}
        </label>
    </div>
  )
}
