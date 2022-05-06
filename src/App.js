import React, {useState,useRef,useEffect } from 'react'
import './todostyle.css'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'       
const LOCAL_STORAGE_KEY='todoApp.todos'

function App() {
  const [todos,setTodos]= useState([])
  const todoNameRef=useRef()
  
  useEffect(()=> {
    const  storedTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)

  },[])

  useEffect(()=> {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function toggleTodo(id) {
    const newTodos=[...todos]
    const todo=newTodos.find(todo => todo.id=== id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
   const name= todoNameRef.current.value
   if (name === '') return 
  setTodos(prevTodos=> {
  return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
})  
 todoNameRef.current.value=null
  }

 function handleClearTodos() {
   const newTodos=todos.filter(todo => !todo.complete)
   setTodos(newTodos)
 }


  return(
    <>
    
    <input placeholder="To Do..."className="inputBox" ref={todoNameRef}  type="text" />
    <button className="addButton" onClick={handleAddTodo}>Add a task To do</button>
    <button  onClick={handleClearTodos}className="removeButton">Clear complete tasks</button>
    <div className="leftToDo">{todos.filter(todo=>!todo.complete).length} left to do</div>
    <TodoList   todos={todos} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App;
