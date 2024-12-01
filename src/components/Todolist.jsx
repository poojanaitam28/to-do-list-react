import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todolist() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTask, id: uuidv4(), isDone: false }]);
    setNewTask("");
  };

  let updateTask = (event) => {
    setNewTask(event.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="w-1/2 bg-sky-100 h-full m-auto mt-2 flex flex-col justify-center rounded-lg ">
      <h1 className="text-4xl font-semibold text-center bg-red-400 w-1/2 m-auto rounded-full py-4">
        To-do List App
      </h1>
      <input
        className="w-1/2 bg-purple-200 text-xl rounded-md p-3 mt-12 m-auto"
        value={newTask}
        onChange={updateTask}
        placeholder="add a task"
      ></input>
      <button
        onClick={addNewTask}
        onChange={updateTask}
        className="w-1/4 bg-zinc-400 text-xl px-5 py-3 rounded-lg mt-10 font-semibold items-center mx-auto"
      >
        Add Task
      </button>
      <hr className="bg-zinc-500 h-[0.4vh] mt-5"></hr>
      <h2 className="w-full rounded-full bg-green-300 text-center font-semibold text-2xl mt-10 py-3">
        Things To Do
      </h2>
      <ul className="text-2xl text-center mt-5 mb-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="w-[80%] mx-auto p-1 rounded-full bg-red-300 mt-2"
          >
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => deleteTask(todo.id)}
              className="bg-zinc-400 rounded-full px-5 text-xl"
            >
              Delete
            </button>
            <button
              onClick={() => markAsDone(todo.id)}
              className="bg-zinc-400 rounded-full px-5 text-xl ml-5"
            >
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={markAllDone}
        className="bg-sky-500 w-1/4 m-auto rounded-lg text-xl p-2 mt-5 mb-8 font-semibold"
      >
        Mark All Done
      </button>
    </div>
  );
}

export default Todolist;
