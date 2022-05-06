import React from 'react'
import Todo from './Todo.js'
import './todostyle.css'
export default function TodoList({todos,toggleTodo}) {

return (

    todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo= {todo} />
    })
  )
}
