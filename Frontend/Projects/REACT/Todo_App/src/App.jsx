import React, { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [title, settitle] = useState("");

  const [todos, settodos] = useState([{ id: 1, title: "kaam kar le" }]);
  let submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
    };
    // let copytodos=[...todos];
    // copytodos.push(newTodo);
    // settodos(copytodos)
    //alternative
    settodos([...todos,newTodo])
    // console.log(todos);
    settitle("");
  };
  let rendertodos= todos.map((currElem)=>{
    if(!currElem || currElem.title.trim()==""){
      return null;
    }
    return(
      <li key={nanoid()}>
        {currElem.title}
      </li>
    )
  })

  return (
    <>
      <div>
        <h1>ADD TASK</h1>
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
        <ol>{rendertodos}</ol>
      </div>
    </>
  );
};

export default App;
