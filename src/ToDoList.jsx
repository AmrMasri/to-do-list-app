import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState(["Eat breakfast", "Take a shower", "walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange() {
    setNewTask(event.target.value)
  }

  function addTask() {}

  function deleteTask(index) {}

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
                 <li key={index}></li>)}
        </ol>

        </div>);
}
export default ToDoList;
