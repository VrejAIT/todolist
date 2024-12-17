import React, {useState} from 'react'
import '../App.css'
const Todo = () => {

const [inputValue, setInputValue]=useState('')
const [tasks, setTasks]=useState([])
const click=()=>{
    if(inputValue.trim()!=="" &&inputValue!==""){
        setTasks([...tasks,inputValue])
        console.log(tasks);
    }
}



  return (
    <div className="main">
        <div className="start">
            <h1>Todo App</h1>
            <input value={inputValue} type=" text" className='todoinp' placeholder='Add a new task' onChange={(e)=>{setInputValue(e.target.value)}} />
            <button  onClick={click} className='todobut'>Add Task</button>
           {tasks.map((task,index)=>(
            <p key={index}>{task}</p>
           ))}
          
        </div>
    </div>
  )
}

export default Todo