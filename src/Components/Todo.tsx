import { useEffect, useState } from "react";
import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput"; 
import { v4 as uuidv4 } from "uuid";

interface TODO {
  id: string;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [todo, setTodo] = useState<TODO[]>([]);

  
  const toggleTask = (id: string) => {
    setTodo(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  const handleAddTask = (task: string) => {
    const newTask: TODO = {
      id: uuidv4().slice(0,10), 
      text: task,
      completed: false
    };

    console.log(newTask.id)

    setTodo(prev => [...prev, newTask]);
    
  };

  const deleteTask=(id:string)=>{
    setTodo(prev=>
        prev.filter(todo=>
            todo.id!==id
        )
    )
  }

  console.log(todo)

  return (
    <>
      
      <TodoInput onAddTask={handleAddTask} /> 

      {todo.length===0 && <h3 style={{color:"red"}} >Please Enter a Task</h3> }
      {todo.map(e => (
        <TodoList
          key={e.id}
          id={e.id}
          text={e.text}
          completed={e.completed}
          toggleTask={toggleTask}
          deletTask={deleteTask}
        />
      ))}
    </>
  );
};

export default Todo;
