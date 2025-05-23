import React, { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  // State to hold the input value for the new todo
  const [title, settitle] = useState("");

  // Initial todos state with a default task
  const [todos, settodos] = useState([{ id: 1, title: "kaam kar le" }]);

  // Handles form submission to add a new todo
  let submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submit (which refreshes the page)

    const newTodo = {
      id: nanoid(),   // Generate a unique ID for each todo
      title: title,   // Use the current value from input
    };

    // ✅ Method 1: using spread operator (recommended & clean)
    settodos([...todos, newTodo]);

    // ❌ Method 2: using copy array and push (less common)
    // let copytodos = [...todos];
    // copytodos.push(newTodo);
    // settodos(copytodos);

    settitle(""); // Clear the input field after submission
  };

  // Renders each todo, skipping if title is empty or whitespace
  let rendertodos = todos.map((currElem) => {
    // Skip rendering if the todo is null or title is empty
    if (!currElem || currElem.title.trim() === "") {
      return null;
    }

    return (
      <li key={currElem.id}>
        {currElem.title}
      </li>
    );
  });

  return (
    <>
      <div>
        <h1>ADD TASK</h1>

        {/* Form for submitting a new todo */}
        <form onSubmit={submitHandler}>
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="add here"
          />
          <button>ADD</button>
        </form>

        <hr />

        <h1>Pending TODO</h1>
        
        {/* Render all valid todos */}
        <ol>{rendertodos}</ol>
      </div>
    </>
  );
};

export default App;
