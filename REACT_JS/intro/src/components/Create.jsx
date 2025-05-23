import { useState } from "react";

const Create = (props) => {
  const [name, setname] = useState("");
  const [age, setage] = useState();
  let submitHandler = (e) => {
    e.preventDefault();
    let newUser = { name, age };
    console.log(newUser);
  };
  return (
    <>
      <div>
        <h1>Register Data</h1>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setname(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setage(e.target.value)}
            type="number"
            placeholder="age"
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Create;
