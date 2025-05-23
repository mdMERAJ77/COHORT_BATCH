// import React from "react";

// const App = () => {
// //without parameter
//   let handleFunction = () => {
//     alert("mai chal gaya");
//   };
// //with parameter

//   let handlePara=(msg)=>{
//     alert(msg)
//   }
//   return (
//     <>
//       <button onClick={handleFunction}>click me</button>
//       <button onClick={()=>handlePara("MERAJ")}>Para</button>
//     </>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(10)
//   let changeCount=()=>{
//     setCount(count>0?preCount=> preCount-1:0)
//     console.log(count);
//   }
//   return (
//     <>
//       <h3>Hello meraj you can do it</h3>
//       <h1>{count}</h1>
//       <button onClick={changeCount}>decrment</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState("SERAJ")
//   let changeName=()=>{
//     setName("MERAJ")
//   }
//   return (
//     <>
//       <h2>{name}</h2>
//       <button onClick={changeName}>change Name</button>
//     </>
//   )
// }

// export default App

//how to handle json data
// import React from "react";

// const App = () => {
//   let obj = [
//     {
//       user: "MERAJ",
//       age: 20,
//     },
//   ];
//   const updateObj = obj.map((currElem, i) => {
//     return (
//       <li key={i}>
//         <span>Name: {currElem.user}</span> |<span> Age: {currElem.age}</span>
//       </li>
//     );
//   });

//   return (
//     <>
//       <ol>{updateObj}</ol>
//     </>
//   );
// };

// export default App;

//Two-Way Binding
// import React, { useState } from "react";
// import Create from "./components/Create";
// import Read from "./components/Read";
// const App = () => {
//   //Common user data
//   const [users, setusers] = useState([
//     { name: "Meraj", age: 20 },
//     { name: "Sakib", age: 25 },
//     { name: "Hamza", age: 14 },
//   ]);

//   return (
//     <>
//       <Create />
//       <Read users={users} setusers={setusers} />
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [completed, setcompleted] = useState(false);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("kolkata");

  return (
    <>
      <div>
        <input
          checked={completed}
          onChange={(e) => setcompleted(e.target.checked)}
          type="checkbox"
        />
        Completed
        <br />
        <input
          value="male"
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          checked={gender === "male"}
        />
        Male
        <input
          value="female"
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          checked={gender === "female"}
        />
        Female
        <br />
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
      </div>
    </>
  );
};

export default App;
