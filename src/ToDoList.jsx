import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState(["Eat breakfast", "Take a shower", "walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange() {
    setNewTask(event.target.value)
  }

  function addTask() {

    if(newTask.trim() !== ""){
        setTask (t => [...t, newTask])
        setNewTask("")
    }


  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
        <div className="to-do-list">

        <h1>To-Do-List</h1>

        <div>
            <input 
            type="text" 
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}/>

            <button
            className="add-button"
            onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                 <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                     Delete
                    </button>
                    <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                     UP
                    </button>
                    <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}>
                     Down
                    </button>
                 </li>)}
        </ol>

        </div>);
}
export default ToDoList;
